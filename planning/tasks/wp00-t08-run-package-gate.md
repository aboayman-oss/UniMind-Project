# Task record: WP00-T08 run package gate

**Task ID:** WP00-T08

**Status:** [?]

**Outcome:** WP00 establishes reviewed implementation constraints: approved directions are usable, unresolved real choices are blocked behind named mocks, and WP01 may build without enabling real data or paid providers.

**Owner:** Codex `/root`

**Reviewer:** Ahmed — REVIEW REQUESTED

**Branch:** `main` (no delivery branch requested)

**Updated (UTC):** 2026-08-20

## Execution contract

**Dependencies:** WP00 preparation records exist; open decisions have exact resolution paths, safe placeholders, and downstream blocks. The gate reviews constraints and blocker completeness, not the unresolved decision outcomes.

**Inputs:** Master-plan decision log and architecture baseline; runbook WP00 outcome/T08; decision register; WP00 task records; controlled planning inputs; readiness and isolated-handoff scripts.

**Files:** WP00 governing/planning artifacts, `evidence/wp00-pilot/`, this record, and any narrow correction required by gate inspection.

**Verify:** Run work-state text/JSON, agent readiness, isolated handoff, controlled-input checks, diff hygiene, changed-file secret scan, and a full review of every open decision's mock and downstream blocking effects.

**Pass:** Every real-data/provider/budget/retention/cohort assumption is approved or explicitly blocked; WP01 has deterministic mocks; no prohibited external action occurred; candidate-SHA evidence exists; Ahmed independently records PASS.

**Evidence:** `evidence/wp00-pilot/YYYY-MM-DD_agent-readiness_local_<short-sha>.md` after the candidate commit exists.

**Rollback:** Revert only the gate-routing correction and evidence/task-state changes; preserve open decisions and all live-data/provider blocks.

**Hard stop:** The gate cannot approve an open cohort, right, provider, budget, retention value, raw-deletion behavior, or beta release. It only approves the mock-only implementation constraints.

## Steps

- [~] Remove the circular rule that made open decisions block their own blocker-completeness gate.
- [~] Inspect WP00 artifacts and run zero-cost structural/handoff checks.
- [ ] Create a coherent candidate commit and commit-specific evidence report.
- [?] Obtain Ahmed's independent constraints-only gate decision.

## Handoff

**Changed:** Corrected WP00-T08 routing and made the distinction between approving constraints and approving unresolved real choices explicit.

**Commands:** Work-state validation reports WP00-T08 review-blocked with 21 decision-blocked downstream tasks. Agent readiness passed with 56 governed names, 28 local links, 20 synchronized decisions, and 102 task contracts. The isolated committed-snapshot handoff passed with seven durable active records and no unsafe recommendation. Diff/secret/input integrity checks and candidate-SHA evidence remain before review.

**Remaining:** Full diff review, candidate commit, evidence report, and Ahmed's gate decision.

**Next safe action:** Finish the candidate-SHA checks and present the evidence to Ahmed for PASS or required changes.

**Reviewer action:** Confirm WP01 can use only synthetic data, deterministic provider/storage/queue/notification mocks, and zero paid capacity; confirm every real path remains blocked by its named decision.
