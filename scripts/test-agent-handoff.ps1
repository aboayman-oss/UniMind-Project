[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$sourceWorkStateScript = Join-Path $projectRoot 'scripts/show-work-state.ps1'
$sourceWorkStateOutput = @(& pwsh -NoProfile -File $sourceWorkStateScript -Format Json)
if ($LASTEXITCODE -ne 0) {
  throw "Source work-state command failed with exit code $LASTEXITCODE."
}
$sourceWorkState = ($sourceWorkStateOutput -join [Environment]::NewLine) | ConvertFrom-Json -Depth 8
$expectedWorkPackage = $sourceWorkState.currentWorkPackage
$expectedTaskId = $sourceWorkState.recommendedTask.taskId
$tempBase = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
$rehearsalName = 'unimind-agent-handoff-{0}' -f ([guid]::NewGuid().ToString('N'))
$rehearsalPath = [System.IO.Path]::GetFullPath((Join-Path $tempBase $rehearsalName))
$expectedPrefix = $tempBase.TrimEnd('\', '/') + [System.IO.Path]::DirectorySeparatorChar

if (-not $rehearsalPath.StartsWith($expectedPrefix, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing rehearsal outside the system temp directory: $rehearsalPath"
}
if ([System.IO.Path]::GetFileName($rehearsalPath) -notlike 'unimind-agent-handoff-*') {
  throw "Refusing unexpected rehearsal directory name: $rehearsalPath"
}

$trackedFiles = @(& git -C $projectRoot ls-files)
if ($LASTEXITCODE -ne 0) {
  throw "Unable to enumerate the committed snapshot with git ls-files."
}
if ($trackedFiles.Count -eq 0) {
  throw 'Committed snapshot contains no tracked files.'
}

try {
  [void](New-Item -ItemType Directory -Path $rehearsalPath)

  foreach ($relativePath in $trackedFiles) {
    $sourcePath = Join-Path $projectRoot $relativePath
    if (-not (Test-Path -LiteralPath $sourcePath)) {
      throw "Rehearsal source is missing: $relativePath"
    }

    $destinationPath = Join-Path $rehearsalPath $relativePath
    $destinationDirectory = Split-Path -Parent $destinationPath
    if (-not (Test-Path -LiteralPath $destinationDirectory)) {
      [void](New-Item -ItemType Directory -Path $destinationDirectory -Force)
    }
    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath
  }

  $gitInitOutput = @(& git -C $rehearsalPath init --quiet 2>&1)
  if ($LASTEXITCODE -ne 0) {
    throw "Temporary git init failed with exit code $LASTEXITCODE`: $($gitInitOutput -join ' ')"
  }
  $gitAddOutput = @(& git -C $rehearsalPath add --all 2>&1)
  if ($LASTEXITCODE -ne 0) {
    throw "Temporary git add failed with exit code $LASTEXITCODE`: $($gitAddOutput -join ' ')"
  }
  $gitCommitOutput = @(& git -C $rehearsalPath -c user.name='UniMind Rehearsal' -c user.email='rehearsal@invalid.example' commit --quiet -m 'test: isolated agent handoff snapshot' 2>&1)
  if ($LASTEXITCODE -ne 0) {
    throw "Temporary git commit failed with exit code $LASTEXITCODE`: $($gitCommitOutput -join ' ')"
  }

  $workStateScript = Join-Path $rehearsalPath 'scripts/show-work-state.ps1'
  $readinessScript = Join-Path $rehearsalPath 'scripts/verify-agent-readiness.ps1'

  $workStateOutput = @(& pwsh -NoProfile -File $workStateScript -Format Json)
  if ($LASTEXITCODE -ne 0) {
    throw "Isolated work-state command failed with exit code $LASTEXITCODE."
  }
  $workState = ($workStateOutput -join [Environment]::NewLine) | ConvertFrom-Json -Depth 8

  if ($workState.currentWorkPackage -cne $expectedWorkPackage) {
    throw "Isolated work package differs from source: expected $expectedWorkPackage, got $($workState.currentWorkPackage)"
  }
  if ($workState.recommendedTask.taskId -cne $expectedTaskId) {
    throw "Isolated recommendation differs from source: expected $expectedTaskId, got $($workState.recommendedTask.taskId)"
  }
  if ($null -ne $workState.recommendedTask -and @($workState.blockedTaskIds) -contains $workState.recommendedTask.taskId) {
    throw "Isolated recommendation is decision-blocked: $($workState.recommendedTask.taskId)"
  }
  if (@($workState.activeTaskRecords).Count -eq 0) {
    throw 'Isolated work state contains no durable active task record.'
  }
  foreach ($taskRecord in @($workState.activeTaskRecords)) {
    if ([string]::IsNullOrWhiteSpace($taskRecord.nextSafeAction)) {
      throw "Isolated task record lacks a next safe action: $($taskRecord.taskId)"
    }
  }

  $readinessOutput = @(& pwsh -NoProfile -File $readinessScript 2>&1)
  if ($LASTEXITCODE -ne 0) {
    throw "Isolated readiness command failed with exit code $LASTEXITCODE`: $($readinessOutput -join ' ')"
  }

  $gitStatus = @(& git -C $rehearsalPath status --short)
  if ($LASTEXITCODE -ne 0) {
    throw "Isolated git status failed with exit code $LASTEXITCODE."
  }
  if ($gitStatus.Count -ne 0) {
    throw "Rehearsal commands modified the isolated repository: $($gitStatus -join ', ')"
  }

  $displayRecommendation = if ($null -eq $workState.recommendedTask) { 'no eligible task' } else { "$($workState.recommendedTask.taskId) recommendation" }
  Write-Output "Agent handoff rehearsal passed: isolated committed snapshot, clean worktree, $displayRecommendation, $(@($workState.activeTaskRecords).Count) durable active records, and readiness verification."
} finally {
  if (Test-Path -LiteralPath $rehearsalPath) {
    $resolvedRemovalPath = [System.IO.Path]::GetFullPath((Resolve-Path -LiteralPath $rehearsalPath).Path)
    $safePrefix = $tempBase.TrimEnd('\', '/') + [System.IO.Path]::DirectorySeparatorChar
    $safeName = [System.IO.Path]::GetFileName($resolvedRemovalPath) -like 'unimind-agent-handoff-*'
    if (-not $resolvedRemovalPath.StartsWith($safePrefix, [System.StringComparison]::OrdinalIgnoreCase) -or -not $safeName) {
      throw "Refusing to remove unverified rehearsal path: $resolvedRemovalPath"
    }
    Remove-Item -LiteralPath $resolvedRemovalPath -Recurse -Force
  }
}
