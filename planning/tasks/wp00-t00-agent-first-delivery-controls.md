# Task record: WP00-T00 agent-first delivery controls

**Task ID:** WP00-T00

**Status:** [?]

**Outcome:** A fresh coding agent can select, execute, verify, and hand off UniMind work from repository state without relying on prior chat.

**Owner:** Codex `/root`

**Reviewer:** UNASSIGNED — GATE BLOCKED

**Branch:** `main` (no delivery branch requested)

**Updated (UTC):** 2026-08-20

## Execution contract

**Dependencies:** None.

**Inputs:** Ahmed's agent-first repository goal; `AGENTS.md`; the PoC master plan; the execution runbook; `CONTEXT.md`; the `writing-for-agents` skill.

**Files:** `AGENTS.md`, `README.md`, `docs/README.md`, `docs/agents/agent-workflow.md`, `docs/runbooks/poc-execution-runbook.md`, `docs/templates/README.md`, `docs/templates/task-record.md`, `planning/README.md`, `planning/decision-register.md`, this task record, `scripts/show-work-state.ps1`, `scripts/test-agent-handoff.ps1`, and `scripts/verify-agent-readiness.ps1`.

**Verify:** Run `scripts/show-work-state.ps1` in text and JSON modes; run `scripts/verify-agent-readiness.ps1`; run `scripts/test-agent-handoff.ps1`; run `git diff --check`; inspect `git diff --stat`, the full diff, and changed files for secrets.

**Pass:** The readiness script exits 0; one deterministic rule selects the next task; agent and human responsibilities are explicit; task state and handoff fields are durable; local documentation links resolve; governed names are consistent.

**Evidence:** Create `evidence/wp00-pilot/YYYY-MM-DD_agent-readiness_local_<short-sha>.md` from `docs/templates/gate-report.md` after the candidate commit exists.

**Rollback:** Revert this documentation-and-script slice; it changes no application, database, provider, environment, or external state.

**Hard stop:** A reviewer must not mark the task or WP00 gate complete without independently inspecting the workflow, running the readiness script, and confirming that agent-first execution does not weaken human governance or the two-person rule.

## Steps

- [~] Audit entry points, task selection, naming, verification, and handoff coverage; implementation is ready for review.
- [~] Add the agent-first operating workflow and task-selection rule; implementation is ready for review.
- [~] Add the task-record template and planning location; implementation is ready for review.
- [~] Add the readiness verifier and make its focused checks pass; implementation is ready for review.
- [~] Add and machine-check the read-only work-state recommendation; implementation is ready for review.
- [~] Rehearse the repository-only handoff in an isolated committed snapshot; implementation is ready for review.
- [?] Complete independent review and create commit-specific evidence; reviewer is unassigned.

## Handoff

**Changed:** Added the short agent workflow, deterministic and machine-readable task selection, agent/human role split, task record template, planning map, naming rules, `WP00-T00`, zero-cost work-state/readiness commands, and an isolated handoff rehearsal.

**Commands:** Work-state, readiness, and isolated-handoff checks passed at handoff. The current recommendation is intentionally computed from live decision and task records; run `scripts/show-work-state.ps1` rather than relying on this historical command note.

**Remaining:** Create commit-specific evidence after a candidate commit exists and obtain independent review.

**Next safe action:** An independent reviewer can verify this task while the executor advances WP00-T01, which does not depend on that review outcome.

**Reviewer action:** Verify the fresh-agent flow from `README.md`, run the readiness script, inspect naming and authority boundaries, and confirm the human governance gates remain intact.
