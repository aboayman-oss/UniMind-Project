# Task record: WP01-T02 create module boundaries

**Task ID:** WP01-T02

**Status:** [x]

**Outcome:** Future agents have a named module map and an automated check that rejects forbidden UI, application, domain, adapter, and server/client dependencies.

**Owner:** Codex `/root`

**Reviewer:** Codex `/root` — PASS (ordinary task)

**Branch:** main (no delivery branch requested)

**Updated (UTC):** 2026-08-20T16:55:00Z

## Execution contract

**Dependencies:** WP01-T01 PASS with evidence `evidence/wp01-foundation/2026-08-20_runtime-foundation_local_3c98584.md`; runbook WP01-T02; approved architecture and domain glossary.

**Inputs:** Runbook section 4.2 directory map; codebase-design seam vocabulary; strict TypeScript/Vitest foundation; derived-availability definition from `CONTEXT.md`.

**Files:** Required `src/`, `workers/`, `supabase/`, `evals/`, `tests/`, and `docs/adr/` directories with short ownership READMEs; a boundary checker and tests; one pure domain seam; package scripts; runbook/task state; WP01 evidence.

**Verify:** `pnpm check:boundaries`; focused Vitest boundary/domain tests; `pnpm verify`; readiness and handoff checks; diff/credential review.

**Pass:** Repository scan reports no violation; synthetic forbidden imports produce actionable violations; the pure domain rule executes in Vitest without Next.js; future untracked directories have clear ownership and dependency rules.

**Evidence:** `evidence/wp01-foundation/2026-08-20_module-boundaries_local_0e1b0c8.md`

**Rollback:** Revert the WP01-T02 commits; no migration, provider, deployment, or external state is changed.

**Hard stop:** Do not add framework or provider imports to domain modules, concrete adapter imports to application modules, domain/adapter imports to UI, server-only imports to Client Components, real data, credentials, paid calls, or unapproved architecture choices.

## Steps

- [x] Materialize the required directory map with concise module READMEs.
- [x] Define the file/folder seam convention and automated import-direction checker.
- [x] Add a pure domain module and behavior tests that do not boot Next.js.
- [x] Add negative tests for domain, application, UI, and client/server violations.
- [x] Run full verification, assemble evidence, and complete ordinary-task review.

## Handoff

**Changed:** Added the complete persistent directory map, per-module ownership/dependency contracts, central seam convention, automated boundary checker, pure availability domain interface, focused positive/negative tests, and a handoff rehearsal that copies the full tracked snapshot instead of a stale manual subset.

**Commands:** `pnpm verify` passes format, lint, strict typing, boundary scan, 14 unit tests, and production build. The first focused test run correctly exposed alias-resolution and extensionless-classification gaps; both were fixed. The first handoff rehearsal exposed a stale manual snapshot list; the full tracked-snapshot rerun passes.

**Remaining:** NONE for WP01-T02.

**Next safe action:** Claim WP01-T03 and implement the fail-fast public/server environment contract.

**Reviewer action:** PASS — module map, seam conventions, negative import tests, pure domain execution, complete snapshot rehearsal, and zero-cost verification reviewed.
