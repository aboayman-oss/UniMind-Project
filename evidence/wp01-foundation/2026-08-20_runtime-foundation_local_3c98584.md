# Gate report: WP01-T01 runtime foundation

**Status:** PASS — ORDINARY-TASK REVIEW

**Environment:** Windows PowerShell, local zero-cost build, and isolated clean-snapshot install

**Commit SHA:** 3c985842638f3e86b17337dcda7682e9d5edfe4f

**Release/config fingerprint:** `node=24.19.0; pnpm=10.34.5; next=16.3.1; react=19.2.8; provider-mode=not-initialized; synthetic-only`

**Migrations:** NONE — database initialization begins in a later WP01 task

**Dataset/fixture versions:** NONE — this task creates only the root runtime and app shell

**Executor:** Codex `/root`

**Reviewer:** Codex `/root` — same-person review is permitted for this ordinary, non-sensitive task under runbook section 0.2

**Started/finished (UTC):** 2026-08-20 / 2026-08-20T16:45:56Z

## Scope and acceptance criteria

| Criterion | Threshold | Result | Status | Evidence |
| --- | --- | --- | --- | --- |
| Runtime is exact | Latest supported Node 24 LTS patch and exact pnpm 10 patch | Node 24.19.0; pnpm 10.34.5 | PASS | `.nvmrc`, `package.json`, `pnpm-workspace.yaml` |
| Dependency graph is deterministic | Exact direct versions and frozen lockfile install | 21 exact direct dependencies; lockfile 9.0 reproduced | PASS | `package.json`, `pnpm-lock.yaml` |
| Peer graph is supported | No unsupported direct TypeScript/ESLint peer combination | TypeScript 6.0.3 and ESLint 9.39.5 satisfy current Next lint peers | PASS | Install output and lockfile importer |
| Dependency scripts fail closed | Current build scripts are reviewed by exact version; new scripts fail install | `esbuild@0.28.2` and `unrs-resolver@1.12.2` allowlisted; `strictDepBuilds: true` | PASS | `pnpm-workspace.yaml` |
| Framework checks pass | Format, lint, strict typing, unit command, and production build exit 0 | `pnpm verify` exits 0 | PASS | Command table |
| Clean snapshot reproduces | No existing `node_modules` or `.next` cache | Frozen install and full verify passed in a new temporary directory | PASS | Command table |
| App Router boundaries are valid | Server Components by default; client only for error reset; global boundary owns document | Seven minimal app files compile and prerender | PASS | `src/app/` and build route table |
| Generated state is ignored | `.next` and TypeScript build info do not enter version control | Both paths match `.gitignore` | PASS | `git check-ignore -v` |
| Mock-only constraints hold | No real data, credential, provider call, database, or deployment | No external runtime integration exists | PASS | Diff and credential scan |

## Commands executed

| UTC time | Command/test ID | Exit code | Sanitized result |
| --- | --- | --- | --- |
| 2026-08-20T16:17Z | Official Node release and npm registry version checks | 0 | Node 24.19.0 is the latest Node 24 LTS patch; exact package candidates recorded. |
| 2026-08-20T16:31Z | Pinned `pnpm install` | 0 | Lockfile created; initial TypeScript 7/ESLint 10 peer warnings identified and corrected before review. |
| 2026-08-20T16:35Z | Node 24.19.0 `pnpm install --frozen-lockfile` and `pnpm verify` | 0 | Frozen install, format, lint, typecheck, unit command, and production build passed. |
| 2026-08-20T16:42Z | Isolated clean-snapshot frozen install and `pnpm verify` | 0 | A new directory with only config/source files installed and built successfully. |
| 2026-08-20T16:44Z | Impeccable detector on `src/app` | 0 | JSON result `[]`; no mechanical UI anti-pattern finding. |
| 2026-08-20T16:45Z | `scripts/show-work-state.ps1 -Format Text` | 0 | WP01-T01 selected as the active task; real-choice blocks remain. |
| 2026-08-20T16:45Z | `scripts/verify-agent-readiness.ps1` | 0 | 58 governed names, 27 local links, 20 decisions, and 102 task contracts passed. |
| 2026-08-20T16:45Z | Candidate credential-literal scan | 0 | 21 candidate files; no credential-like assignment found. |
| 2026-08-20T16:45Z | `git diff --check`, `git diff --stat`, authored diff and lockfile review | 0 | No whitespace error; all authored changes reviewed; 5,199 generated lockfile diff lines validated by frozen install and registry-only resolution scan. |
| 2026-08-20T16:45Z | `git check-ignore -v .next tsconfig.tsbuildinfo` | 0 | Both generated paths are ignored. |
| 2026-08-20T16:45Z | `git show --check --oneline --stat 3c98584` | 0 | Candidate commit has no whitespace error. |
| 2026-08-20T16:49Z | System Node 22 invoking pinned pnpm project runtime | 0 | `pnpm exec node --version` returned 24.19.0; frozen install and `pnpm verify` passed without an unreviewed-build warning. |

## Negative, retry, and recovery cases

| Case | Expected | Actual | Status |
| --- | --- | --- | --- |
| Agent runs project commands from a machine whose default Node is 22 | Project runtime remains Node 24.19.0 | pnpm fetched/selected Node 24.19.0 for `pnpm exec` and scripts | PASS |
| Direct dependencies use newest but unsupported peers | Installation must not be accepted | TypeScript 7/ESLint 10 warnings caused repinning to supported exact stable versions | PASS |
| A new dependency adds an unreviewed lifecycle script | Install fails instead of silently executing it | `strictDepBuilds: true`; only two exact reviewed packages are allowed | PASS |
| Existing cache hides a missing package or config | Clean reproduction fails | New-directory frozen install and full verification passed | PASS |
| UI code adds unnecessary client boundaries | Review fails | Only framework error reset boundaries use `"use client"` | PASS |

## Deviations and defects

| ID | Severity | Description | Owner | Blocks |
| --- | --- | --- | --- | --- |
| WP01-T01-NOTE-01 | Informational | The root page is deliberately a minimal technical scaffold because no visual identity or product-surface direction is approved. It establishes no durable design tokens; future product UI still requires Impeccable direction work. | Future UI task owner | No foundation task |
| WP01-T01-NOTE-02 | Informational | Unit suites contain no tests yet, so Vitest exits 0 through the explicitly visible `--passWithNoTests` foundation behavior. WP01-T02 and later tasks must replace emptiness with public-seam tests. | WP01 executor | Claims of tested business behavior |

## Security and privacy review

- [x] Direct versions and lockfile sources were inspected; no exotic tarball or non-registry URL was found.
- [x] Dependency lifecycle scripts are exact-version allowlisted and new scripts fail closed.
- [x] Candidate files contain no credential-like literal, private material, ordinary chat content, signed URL, or student data.
- [x] No provider, database, storage, deployment, or paid call ran.
- [x] Error boundaries do not expose error details to users.

## Rollback/disable procedure

Revert commit `3c98584`. No migration, shared service, provider, deployment, or external data requires rollback. The previous repository state remains planning-only and mock constrained.

## Decision

WP01-T01 passes its ordinary-task gate. The exact runtime, deterministic dependency graph, strict framework checks, minimal App Router shell, and fresh-snapshot reproduction are sufficient for WP01-T02. This decision does not approve real data, providers, spending, deployment, or beta release.

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Codex `/root` | Executor | COMPLETE | 2026-08-20 |
| Codex `/root` | Ordinary-task reviewer | PASS | 2026-08-20 |
