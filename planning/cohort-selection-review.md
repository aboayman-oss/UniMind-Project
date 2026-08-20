# Cohort selection review

**Status:** BLOCKED — OWNER INPUT REQUIRED

This packet isolates the facts and governance actions required for D-01, D-02, and D-03. Agents own validation, calculation, document updates, catalog-code generation, and handoff evidence after the inputs below are supplied.

## Inputs required from Ahmed and Ziad

| Input | Required format | Owner action |
| --- | --- | --- |
| Decision deadline | One `YYYY-MM-DD` date for D-01, D-02, and D-03 | Set dates in the decision register and records. |
| Candidate list | Every Human and Veterinary candidate before scoring | Add or authorize one row per candidate in `planning/cohort-candidates.csv`. |
| Catalog path | Stage, institution/system, program, level, term, cohort label, curriculum edition, and unit label type | Supply facts and labels; the agent generates stable codes. |
| Accountable people | Expected testers, Batch Leader, and academic reviewer for each candidate | Name the responsible people; the agent records roles without adding personal data to filenames. |
| Evidence | Reachable approved references for sources, permissions, reviewer availability, exam/audio material, demand, and evaluation questions | Supply opaque links or sanitized references; private contents remain outside Git. |
| Independent scores | One score per dimension from Ahmed and one from Ziad | Score separately before seeing the reconciled result. |
| Final governance action | Reconcile score differences of two or more and sign the selected decisions | Approve, reject, or keep the decision open. |

## Scoring anchors

Use the same meaning for every scored dimension:

| Score | Meaning | Required follow-up |
| --- | --- | --- |
| 0 | Absent or blocking | Candidate is rejected while the blocker remains. |
| 1 | Very weak; evidence or capability is mostly missing | Record major remediation. |
| 2 | Weak; material remediation is required before pilot use | Record remediation and owner. |
| 3 | Adequate for the constrained PoC | Record the supporting basis. |
| 4 | Strong; only minor remediation remains | Link `score_evidence`. |
| 5 | Complete and verified for the PoC | Link `score_evidence` and verifier/date. |

Score `source_completeness`, `permission_clarity`, `batch_leader_reliability`, `reviewer_availability`, `exam_material`, `audio_quality`, `student_demand`, and `evaluation_question` independently. The agent calculates totals only after every candidate row exists.

## Mandatory rejection rules

Reject a candidate regardless of total score when any required provider-processing or student-use right is denied, no accountable academic reviewer exists, or complete-enough source material is unavailable. `UNKNOWN` rights remain blocking; they are not neutral scores.

## Agent completion after input

1. Validate row completeness, stable IDs, score ranges, evidence/remediation requirements, and absence of late candidates without an audit note.
2. Calculate totals deterministically and identify score differences of two or more.
3. Apply mandatory rejection rules before ranking.
4. Generate stable ASCII `lower_snake_case` catalog codes and preserve Arabic/English labels separately.
5. Update D-01/D-02/D-03 to `PROPOSED` only when one evidence-backed option is ready for review.
6. Preserve owner/reviewer sign-off and gate evidence; never infer approval from a completed spreadsheet.
