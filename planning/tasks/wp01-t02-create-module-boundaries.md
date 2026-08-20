# Task record: WP01-T02 create module boundaries

**Task ID:** WP01-T02

**Status:** [~]

**Outcome:** Future agents have a named module map and an automated check that rejects forbidden UI, application, domain, adapter, and server/client dependencies.

**Owner:** Codex `/root`

**Reviewer:** Codex `/root` — ordinary-task review planned

**Branch:** main (no delivery branch requested)

**Updated (UTC):** 2026-08-20T16:55:00Z

## Execution contract

**Dependencies:** WP01-T01 PASS with evidence `evidence/wp01-foundation/2026-08-20_runtime-foundation_local_3c98584.md`; runbook WP01-T02; approved architecture and domain glossary.

**Inputs:** Runbook section 4.2 directory map; codebase-design seam vocabulary; strict TypeScript/Vitest foundation; derived-availability definition from `CONTEXT.md`.

**Files:** Required `src/`, `workers/`, `supabase/`, `evals/`, `tests/`, and `docs/adr/` directories with short ownership READMEs; a boundary checker and tests; one pure domain seam; package scripts; runbook/task state; WP01 evidence.

**Verify:** `pnpm check:boundaries`; focused Vitest boundary/domain tests; `pnpm verify`; readiness and handoff checks; diff/credential review.

**Pass:** Repository scan reports no violation; synthetic forbidden imports produce actionable violations; the pure domain rule executes in Vitest without Next.js; future untracked directories have clear ownership and dependency rules.

**Evidence:** `evidence/wp01-foundation/2026-08-20_module-boundaries_local_<short-sha>.md`

**Rollback:** Revert the WP01-T02 commits; no migration, provider, deployment, or external state is changed.

**Hard stop:** Do not add framework or provider imports to domain modules, concrete adapter imports to application modules, domain/adapter imports to UI, server-only imports to Client Components, real data, credentials, paid calls, or unapproved architecture choices.

## Steps

- [x] Materialize the required directory map with concise module READMEs.
- [x] Define the file/folder seam convention and automated import-direction checker.
- [x] Add a pure domain module and behavior tests that do not boot Next.js.
- [x] Add negative tests for domain, application, UI, and client/server violations.
- [~] Run full verification, assemble evidence, and complete ordinary-task review.

## Handoff

**Changed:** Added the complete persistent directory map, per-module ownership/dependency contracts, central seam convention, automated boundary checker, pure availability domain interface, focused positive/negative tests, and a handoff rehearsal that copies the full tracked snapshot instead of a stale manual subset.

**Commands:** `pnpm check:boundaries` passes. The first focused test run correctly exposed alias-resolution and extensionless-classification gaps; both were fixed, and 14 focused unit tests now pass.

**Remaining:** Full `pnpm verify`, readiness/handoff rehearsal, candidate diff/secret review, evidence, and ordinary-task reviewer disposition.

**Next safe action:** Run the full zero-cost gate and committed-snapshot agent handoff rehearsal.

**Reviewer action:** Confirm the checker enforces the documented directions without coupling modules to Next.js or provider SDKs.
