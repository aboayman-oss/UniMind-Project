[CmdletBinding()]
param(
    [string]$EnvFile = '.env'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$script:TotalStages = 0
$script:StageIndex = 0
$script:WrittenEnv = [System.Collections.Generic.List[string]]::new()
$script:WrittenSecrets = [System.Collections.Generic.List[string]]::new()
$script:Skipped = [System.Collections.Generic.List[string]]::new()

function Show-WizardBanner {
    param([Parameter(Mandatory)][string]$Title)

    Clear-Host
    Write-Host "`n  $Title" -ForegroundColor Cyan
    Write-Host "  $script:TotalStages stages`n" -ForegroundColor DarkGray
    Write-Host '  You control the browser. This wizard explains each manual step'
    Write-Host '  and captures only the values needed by the project.'
    [void](Read-Host '  Press Enter to start')
}

function Show-WizardStage {
    param([Parameter(Mandatory)][string]$Name)

    Clear-Host
    $script:StageIndex++
    Write-Host "`n  Stage $script:StageIndex/$script:TotalStages - $Name" -ForegroundColor Cyan
}

function Write-WizardStep {
    param([Parameter(Mandatory)][string]$Text)
    Write-Host "  * $Text"
}

function Write-WizardNote {
    param([Parameter(Mandatory)][string]$Text)
    Write-Host "  $Text" -ForegroundColor DarkGray
}

function Open-SetupUrl {
    param([Parameter(Mandatory)][uri]$Url)

    Write-Host "  Opening $Url" -ForegroundColor Green
    try {
        Start-Process -FilePath $Url.AbsoluteUri | Out-Null
    }
    catch {
        Write-Warning "The browser did not open. Visit this URL manually: $Url"
    }
}

function Confirm-WizardAction {
    param([Parameter(Mandatory)][string]$Question)

    $answer = Read-Host "  $Question [y/N]"
    return $answer -match '^(?i:y|yes)$'
}

function Get-DotEnvValue {
    param([Parameter(Mandatory)][string]$Name)

    if (-not (Test-Path -LiteralPath $EnvFile)) {
        return $null
    }

    $prefix = "$Name="
    $line = Get-Content -LiteralPath $EnvFile | Where-Object { $_.StartsWith($prefix, [System.StringComparison]::Ordinal) } | Select-Object -Last 1
    if ($null -eq $line) {
        return $null
    }

    return $line.Substring($prefix.Length)
}

function Read-PublicValue {
    param(
        [Parameter(Mandatory)][string]$Name,
        [Parameter(Mandatory)][string]$Prompt
    )

    $current = Get-DotEnvValue -Name $Name
    $suffix = if ([string]::IsNullOrEmpty($current)) { '' } else { ' [Enter keeps current]' }
    $value = Read-Host "  $Prompt$suffix"
    if ([string]::IsNullOrEmpty($value) -and -not [string]::IsNullOrEmpty($current)) {
        return $current
    }
    return $value
}

function Read-SecretValue {
    param(
        [Parameter(Mandatory)][string]$Name,
        [Parameter(Mandatory)][string]$Prompt
    )

    $current = Get-DotEnvValue -Name $Name
    $suffix = if ([string]::IsNullOrEmpty($current)) { '' } else { ' [Enter keeps current]' }
    $secure = Read-Host "  $Prompt$suffix" -AsSecureString
    $pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try {
        $value = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    }
    finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    }

    if ([string]::IsNullOrEmpty($value) -and -not [string]::IsNullOrEmpty($current)) {
        return $current
    }
    return $value
}

function Set-DotEnvValue {
    param(
        [Parameter(Mandatory)][ValidatePattern('^[A-Z][A-Z0-9_]*$')][string]$Name,
        [AllowEmptyString()][Parameter(Mandatory)][string]$Value
    )

    if ($Value.Contains("`r") -or $Value.Contains("`n")) {
        throw "Environment value $Name must fit on one line."
    }

    $lines = if (Test-Path -LiteralPath $EnvFile) {
        [System.Collections.Generic.List[string]](Get-Content -LiteralPath $EnvFile)
    }
    else {
        [System.Collections.Generic.List[string]]::new()
    }

    $prefix = "$Name="
    $filtered = [System.Collections.Generic.List[string]]::new()
    foreach ($line in $lines) {
        if (-not $line.StartsWith($prefix, [System.StringComparison]::Ordinal)) {
            $filtered.Add($line)
        }
    }
    $filtered.Add("$Name=$Value")

    $encoding = [System.Text.UTF8Encoding]::new($false)
    [System.IO.File]::WriteAllLines((Join-Path (Get-Location) $EnvFile), $filtered, $encoding)
    $script:WrittenEnv.Add($Name)
    Write-Host "  Wrote $Name to $EnvFile" -ForegroundColor Green
}

function Test-GitHubCli {
    if ($null -eq (Get-Command gh -ErrorAction SilentlyContinue)) {
        return $false
    }

    & gh auth status 2>$null
    return $LASTEXITCODE -eq 0
}

function Set-GitHubSecret {
    param(
        [Parameter(Mandatory)][string]$Name,
        [AllowEmptyString()][Parameter(Mandatory)][string]$Value
    )

    if (Test-GitHubCli) {
        $Value | & gh secret set $Name 1>$null
        if ($LASTEXITCODE -eq 0) {
            $script:WrittenSecrets.Add($Name)
            Write-Host "  Set GitHub secret $Name" -ForegroundColor Green
            return
        }
    }

    $script:Skipped.Add("GitHub secret $Name")
    Write-Warning "GitHub CLI is not ready. Set secret $Name later."
}

function Set-GitHubVariable {
    param(
        [Parameter(Mandatory)][string]$Name,
        [AllowEmptyString()][Parameter(Mandatory)][string]$Value
    )

    if (Test-GitHubCli) {
        & gh variable set $Name --body $Value 1>$null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  Set GitHub variable $Name" -ForegroundColor Green
            return
        }
    }

    $script:Skipped.Add("GitHub variable $Name")
    Write-Warning "GitHub CLI is not ready. Set variable $Name later."
}

function Complete-Wizard {
    Clear-Host
    Write-Host "`n  Setup complete" -ForegroundColor Green
    if ($script:WrittenEnv.Count -gt 0) {
        Write-WizardNote "Updated $EnvFile keys: $($script:WrittenEnv -join ', ')"
    }
    if ($script:WrittenSecrets.Count -gt 0) {
        Write-WizardNote "Set GitHub secrets: $($script:WrittenSecrets -join ', ')"
    }
    if ($script:Skipped.Count -gt 0) {
        Write-Warning "Still required: $($script:Skipped -join ', ')"
    }
    Write-Host ''
}

# STAGES
# Keep the library above this marker unchanged. Replace the sample stage below.

$script:TotalStages = 1
Show-WizardBanner -Title 'Setup wizard template'

Show-WizardStage -Name 'Replace this sample'
Write-WizardStep 'Replace this stage with one concrete manual task.'
Write-WizardNote 'Generated wizards should open an authoritative URL before requesting a value.'

Complete-Wizard
