# Gate report: WP01-T06 provider interfaces and deterministic mocks

**Status:** PASS — ORDINARY-TASK REVIEW

**Environment:** Windows PowerShell, project-managed Node 24.19.0, pnpm 10.34.5, zero-cost local checks with network-disabled mock assertions

**Commit SHA:** 61622df6c6e4314458e2444be7d6cb39f3b02bad

**Release/config fingerprint:** `provider-mode=mock; mock-config=mock-v1; scenario-set=v1; calculated-cost=0; real-initialization=fail-closed`

**Migrations:** NONE

**Dataset/fixture versions:** Inline synthetic provider requests and twelve deterministic case IDs only

**Executor:** Codex `/root`

**Reviewer:** Codex `/root` — same-person review is permitted for this ordinary mock-only task

**Started/finished (UTC):** 2026-08-20T17:34:00Z / 2026-08-20T17:45:59Z

## Scope and acceptance criteria

| Criterion | Threshold | Result | Status | Evidence |
| --- | --- | --- | --- | --- |
| All provider seams exist | One interface for answer, structured artifact, embedding, transcription, OCR, object storage, and job queue | Seven owner-local interface files | PASS | AI/storage/jobs modules |
| Results are normalized | Provider/config/request ID, usage, duration, attempt, status, cost, value/error on every result | One discriminated shared contract | PASS | `src/types/provider.ts` |
| Errors are explicit | Required minimum taxonomy plus known-before-accept timeout | Ten stable codes | PASS | Type and equality test |
| Calls are traceable/retry-safe | Correlation ID, idempotency key, timeout, attempt, optional abort signal | Shared call context used by all seven interfaces | PASS | Interface and contract matrix |
| Mocks cover failures | Success, latency, rate limit, both timeout states, malformed output, terminal rejection, authorization, rights, budget, invalid input, and unavailable | Twelve cases across all seven adapters | PASS | 84-case core matrix |
| Mocks are deterministic | Same adapter/case/context produces identical output and safe hashed request ID | All seven adapters pass repeated-call checks | PASS | Contract suite |
| Mocks are zero-network/zero-cost | No fetch invocation, SDK, URL, credential, or nonzero cost/unit | Complete matrix runs with fetch trap at zero calls | PASS | Network assertion and candidate scan |
| Real initialization fails closed | Initializer cannot run unless every D-05 live gate fact passes | Twelve denial cases leave initializer untouched; full synthetic authorization calls once | PASS | Initialization tests |
| Agent handoff is complete | Clean committed snapshot selects and verifies WP01-T06 | Isolated rehearsal passes on candidate | PASS | Handoff output |

## Commands executed

| UTC time | Command/test ID | Exit code | Sanitized result |
| --- | --- | --- | --- |
| 2026-08-20T17:41Z | Initial focused provider contract suite | 0 | 1 file and 104 tests passed across all seven mocks. |
| 2026-08-20T17:41Z | Focused lint, strict typecheck, boundaries | 0 | All checks passed. |
| 2026-08-20T17:43Z | Expanded focused provider suite | 0 | 1 file and 113 tests passed after adding the complete D-05 live gate. |
| 2026-08-20T17:43Z | `pnpm verify` | 0 | Format, lint, strict types, boundaries, 136 unit tests, and synthetic production build passed. |
| 2026-08-20T17:44Z | Candidate URL/SDK/credential scan | 0 | No dependency change, URL, provider SDK, provider token, private key, JWT, or credential-like literal found. |
| 2026-08-20T17:44Z | `git diff --cached --check`, stat, full staged review | 0 | No whitespace error; all 25 scoped files reviewed. |
| 2026-08-20T17:45Z | `git show --check --oneline --stat 61622df` | 0 | Candidate commit has no whitespace error. |
| 2026-08-20T17:45Z | Agent readiness | 0 | 73 names, 30 links, 20 synchronized decisions, and 102 task contracts passed. |
| 2026-08-20T17:45Z | Isolated handoff rehearsal | 0 | Clean committed snapshot, WP01-T06 selection, nine durable active records, and readiness passed. |

## Negative, retry, and recovery cases

| Case | Expected | Actual | Status |
| --- | --- | --- | --- |
| Rate limit | Retryable, known not accepted, retry delay | Normalized `RATE_LIMITED` result | PASS |
| Timeout before acceptance | Retryable without provider request ID | `TIMEOUT_BEFORE_ACCEPT`, null request ID | PASS |
| Timeout after acceptance | Unknown outcome; blind retry forbidden; request ID retained | `TIMEOUT_UNKNOWN`, unknown acceptance, non-retryable | PASS |
| Malformed output | Terminal normalized failure | `MALFORMED_OUTPUT` | PASS |
| Terminal content rejection | Terminal known rejection | `CONTENT_REJECTED` | PASS |
| Invalid/auth/rights/budget input | Reject before accepted work | Exact typed codes | PASS |
| Provider unavailable | Retryable known-not-accepted result | `PROVIDER_UNAVAILABLE` | PASS |
| Already-aborted signal | No accepted request or request ID | All seven adapters return retryable pre-accept failure | PASS |
| Real gate fact absent | Initializer remains uncalled | All twelve gate variants throw before factory call | PASS |

## Deviations and defects

| ID | Severity | Description | Owner | Blocks |
| --- | --- | --- | --- | --- |
| WP01-T06-DESIGN-01 | Resolved | Initial guard design covered only mock mode, action flag, and budget. Review expanded it to every approved D-05 live-enablement fact so its name cannot imply partial authorization is sufficient. | Resolved in candidate | None |
| WP01-T06-LIMIT-01 | Informational | No real provider adapter or SDK exists. Future adapters must keep initialization lazy, pass this contract suite, and still satisfy approved provider-specific reconciliation and evaluation gates. | Future real-adapter agent and independent reviewers | Any real provider call |

## Security and privacy review

- [x] No real provider, storage, queue, credential, URL, source content, student data, or network request was added.
- [x] Synthetic answer/artifact outputs cite only supplied synthetic evidence IDs; no outside-answer fallback exists.
- [x] Mock request IDs hash the idempotency key instead of returning it verbatim.
- [x] Timeout-after-accept is explicitly unknown and non-retryable until reconciliation.
- [x] Mocks return zero billed units, zero calculated minor amount, and unset currency.
- [x] PostgreSQL remains the future durable authority; queue/storage mock responses contain no durable business-state claim.

## Rollback/disable procedure

Revert commit `61622df`. This removes only interfaces, deterministic adapters, synthetic contract tests, file-map documentation, and task state. No database, provider, queue, storage, deployment, credential, paid call, or external state requires rollback.

## Decision

WP01-T06 passes its ordinary-task gate. Agents can now implement every provider-consuming workflow against named, deterministic, zero-network outcomes while real initialization remains blocked by the complete approved live gate. Database-dependent WP01-T04/T05 remain blocked on the recorded machine prerequisite.

| Name | Role | Decision | Date |
| --- | --- | --- | --- |
| Codex `/root` | Executor | COMPLETE | 2026-08-20 |
| Codex `/root` | Ordinary-task reviewer | PASS | 2026-08-20 |
