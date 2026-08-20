# Gate report: WP01-T03 environment contract

**Status:** PASS — ORDINARY-TASK REVIEW

**Environment:** Windows PowerShell, project-managed Node 24.19.0, pnpm 10.34.5, zero-cost local checks

**Commit SHA:** 3d1228e6376a51d8fd489eaadaa09e8671028e88

**Release/config fingerprint:** `provider-mode=mock; approved-budget-minor=0; public-env-allowlist=v1; synthetic-ci-build=v1`

**Migrations:** NONE

**Dataset/fixture versions:** Inline synthetic environment values only

**Executor:** Codex `/root`

**Reviewer:** Codex `/root` — same-person review is permitted for this ordinary, non-sensitive task

**Started/finished (UTC):** 2026-08-20T17:09:45Z / 2026-08-20T17:27:23Z

## Scope and acceptance criteria

| Criterion | Threshold | Result | Status | Evidence |
| --- | --- | --- | --- | --- |
| Public contract is narrow | Only Supabase URL/publishable key, release ID, and telemetry toggle use `NEXT_PUBLIC_` | Exact four-name allowlist; unknown public names fail | PASS | `.env.example`, `env.schema.ts`, negative test |
| Secrets remain server-only | Database, service role, storage, queue, and provider credentials have no public prefix | All names are server-only; accessor imports `server-only` | PASS | `env.server.ts`, `.env.example` |
| Validation is non-disclosing | Failures identify names but never values | Missing, malformed, bounded, and forbidden-public tests inspect messages | PASS | 9 focused tests |
| Provider mode fails closed | Mock is default; real mode requires enable flag, matching key, and positive approved budget | Mock flag and incomplete real-mode cases fail; complete synthetic real contract parses | PASS | Provider-gate tests |
| Limits are bounded | Eight operational limits have integer minima/maxima and safe defaults | All required limits encoded; malformed and out-of-range cases fail | PASS | `env.schema.ts` |
| Parsing is stable | Runtime environment parses once per process accessor | Cached reader invokes parser once | PASS | Cache test |
| Production build is reproducible | Build receives only synthetic required configuration | Exact `pnpm build` and hermetic `test:env-build` pass | PASS | Command output, `build-with-safe-env.ts` |
| Local secrets stay untracked | Ignore is confirmed before local file creation | `.env.local` ignore check exits 0; local file contains one comment and is absent from candidate | PASS | Git ignore/status checks |
| Agent handoff is complete | Clean committed snapshot can select and verify the task | Isolated rehearsal passes on candidate | PASS | Handoff command output |

## Commands executed

| UTC time | Command/test ID | Exit code | Sanitized result |
| --- | --- | --- | --- |
| 2026-08-20T17:16Z | Global pnpm dependency attempt | 1 | Stopped before modification because global pnpm 11 applied a release-age policy to two pre-existing transitive entries; no policy was weakened. |
| 2026-08-20T17:18Z | `corepack pnpm install --frozen-lockfile` | 0 | Pinned pnpm 10.34.5 restored the exact reviewed lock and dependencies. |
| 2026-08-20T17:19Z | First focused environment tests | 1 | Exposed Boolean default handling; narrow schema fix applied. |
| 2026-08-20T17:19Z | Focused environment rerun | 0 | 1 file, 9 tests passed. |
| 2026-08-20T17:19Z | First strict typecheck | 1 | Exposed child-environment and table-test types; narrow typing fix applied. |
| 2026-08-20T17:20Z | Focused lint, typecheck, boundaries | 0 | All three checks passed. |
| 2026-08-20T17:21Z | `pnpm test:env-build` | 0 | Next.js production build passed with synthetic CI values. |
| 2026-08-20T17:22Z | First `pnpm verify` | 1 | Found one formatting drift in the just-edited test; formatted before rerun. |
| 2026-08-20T17:23Z | `pnpm verify` | 0 | Format, lint, strict types, boundaries, 23 unit tests, and safe production build passed. |
| 2026-08-20T17:23Z | `pnpm test:unit -- env` | 0 | 3 files and 23 tests passed, including all environment cases. |
| 2026-08-20T17:23Z | Exact `pnpm build` with synthetic variables | 0 | Optimized Next.js build and static generation passed. |
| 2026-08-20T17:24Z | `.env.local` ignore-before-create check | 0 | Ignore rule matched; comment-only file created locally and remained ignored. |
| 2026-08-20T17:25Z | Candidate addition credential scan | 0 | Matches were schema identifiers or `syntheticCredential` references only; no credential literal, JWT, private key, or provider token found. |
| 2026-08-20T17:25Z | `git diff --cached --check`, stat, full staged diff review | 0 | No whitespace error; all 11 candidate files and lock entry reviewed. |
| 2026-08-20T17:26Z | `git show --check --oneline --stat 3d1228e` | 0 | Candidate commit has no whitespace error. |
| 2026-08-20T17:27Z | Agent readiness | 0 | 69 names, 30 links, 20 synchronized decisions, and 102 task contracts passed. |
| 2026-08-20T17:27Z | Isolated handoff rehearsal | 0 | Clean committed snapshot, WP01-T03 selection, seven durable active records, and readiness passed. |

## Negative, retry, and recovery cases

| Case | Expected | Actual | Status |
| --- | --- | --- | --- |
| Required variable absent | Fail with name only | `DATABASE_URL` named; value absent from message | PASS |
| Numeric variable malformed/out of bounds | Reject before runtime use | Output tokens and concurrency rejected | PASS |
| Secret receives public prefix | Reject unknown `NEXT_PUBLIC_` name | Public service-role name rejected without its value | PASS |
| Provider enabled while mode is mock | Reject configuration | Provider-specific enable name reported | PASS |
| Real mode lacks budget, flag, or key | Reject configuration | Each missing authorization component fails | PASS |
| Environment read repeated | Return same parsed object | Parser called exactly once | PASS |
| Host contains public/provider-key variables during CI build | Do not inherit them | Wrapper removes public and provider-key names, then overlays synthetic values | PASS |

## Deviations and defects

| ID | Severity | Description | Owner | Blocks |
| --- | --- | --- | --- | --- |
| WP01-T03-DEV-01 | Resolved | The first install command resolved to global pnpm 11.19.0 rather than repository pnpm 10.34.5 and stopped on release-age verification. The unchanged lock was restored with `corepack pnpm` before adding the single exact dependency. | Resolved in task | None |
| WP01-T03-LIMIT-01 | Informational | The environment gate authorizes configuration shape only. It does not approve a provider, budget, or real adapter; the existing decision and enablement gates remain mandatory. | Future provider-adapter agents | Any real provider initialization |

## Security and privacy review

- [x] No real credential, `.env.local`, private source, student data, ordinary chat, signed URL, or provider payload is committed.
- [x] Error construction uses variable names only and does not retain Zod value-bearing diagnostics as a cause.
- [x] Browser-visible names are allowlisted and covered by a forbidden-public test.
- [x] The safe build is mock-only, strips inherited public/provider-key variables, and makes no external service call.
- [x] The only values in committed fixtures are clearly synthetic local examples.

## Rollback/disable procedure

Revert commit `3d1228e`. This removes only the environment contract, synthetic build automation, tests, exact `server-only` dependency, page status wiring, and task state. Delete the ignored comment-only `.env.local` manually if desired. No migration, shared service, provider, deployment, or external state requires rollback.

## Decision

WP01-T03 passes its ordinary-task gate. Agents now receive a single fail-fast configuration seam, safe public/server naming, mock-by-default provider authorization, bounded operational inputs, a reproducible zero-cost build, and a clean committed handoff. WP01-T04 may begin.

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Codex `/root` | Executor | COMPLETE | 2026-08-20 |
| Codex `/root` | Ordinary-task reviewer | PASS | 2026-08-20 |
