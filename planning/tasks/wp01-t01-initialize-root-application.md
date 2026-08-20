# Task record: WP01-T01 initialize root application

**Task ID:** WP01-T01

**Status:** [~]

**Outcome:** A clean checkout installs an exact Node 24/pnpm 10 dependency graph and passes lint, strict type checking, and a production Next.js build.

**Owner:** Codex

**Reviewer:** Codex `/root` — ORDINARY-TASK REVIEW IN PROGRESS

**Branch:** main (no delivery branch requested)

**Updated (UTC):** 2026-08-20T16:24:06Z

## Execution contract

**Dependencies:** WP00-T08 PASS under mock-only constraints; `evidence/wp00-pilot/2026-08-20_agent-readiness_local_da9f07f.md`; runbook WP01-T01.

**Inputs:** Official Node 24 release status; current Next.js App Router and ESLint guidance; exact npm registry versions; approved architecture and mock-only gate.

**Files:** `.nvmrc`, `.npmrc`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`, `next-env.d.ts`, `PRODUCT.md`, `src/app/*` including segment/global error boundaries, this task record, and WP01 foundation evidence.

**Verify:** `pnpm lint`; `pnpm typecheck`; `pnpm build`; frozen clean install; `git diff --check`; changed-file credential scan.

**Pass:** Every required command exits 0 under Node 24.19.0 and pnpm 10.34.5; dependencies contain exact versions; `.next` is ignored; a clean frozen install reproduces the lockfile.

**Evidence:** `evidence/wp01-foundation/2026-08-20_runtime-foundation_local_<short-sha>.md`

**Rollback:** Revert the WP01-T01 commit; no database, provider, deployment, or external state is changed.

**Hard stop:** Do not introduce real data, credentials, paid calls, live adapters, deployment, release controls, or an invented product/visual decision. Stop if the exact supported runtime cannot execute the required checks.

## Steps

- [x] Confirm WP00 passed for mock-only implementation and inspect the clean starting worktree.
- [x] Resolve the official Node 24 LTS patch and exact package versions.
- [x] Resolve the package graph without unsupported peer combinations and generate the lockfile.
- [x] Run formatting, lint, strict type checking, and production build checks under Node 24.19.0.
- [x] Reproduce the graph from the frozen lockfile in an isolated clean copy.
- [~] Assemble sanitized evidence and complete the ordinary-task review.

## Handoff

**Changed:** Added the exact Node 24/pnpm 10 runtime contract, project-managed execution runtime, version-scoped dependency build allowlist with fail-closed handling for new scripts, strict dependency graph and checks, minimal App Router shell, durable product context, engine enforcement, and task record.

**Commands:** Under Node 24.19.0 and pnpm 10.34.5, frozen install and `pnpm verify` passed. A second install from only the lockfile/config/source files in a new temporary directory also passed `pnpm verify`. The initial latest TypeScript 7/ESLint 10 peer mismatch was corrected to compatible exact releases before evidence.

**Remaining:** Candidate commit, commit-specific evidence, diff/secret review, and ordinary-task reviewer disposition.

**Next safe action:** Commit the review candidate, create commit-specific evidence, and rerun the handoff checks.

**Reviewer action:** Confirm exact compatible pins, inspect the minimal Server Component foundation, review the clean-snapshot proof, and rerun the verification commands before marking the task complete.
