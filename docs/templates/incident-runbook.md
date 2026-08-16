# Incident runbook: <incident type>

**Owner:** <name/role>

**Backup/escalation:** <name/role>

**Severity:** <rules>

**Alerts/detection:** <links/signals>

**Last exercised:** <YYYY-MM-DD and evidence>

## Trigger and impact

Define the observable condition, affected users/data/components, and what is explicitly not inferred yet.

## First 5 minutes: contain

1. <exact flag/source/cohort/provider/job-claim disable action>
2. <preserve evidence without private-data sprawl>
3. <confirm containment using a safe query/test>

## Evidence to preserve

- Correlation/job/provider/source IDs, release/config, audit/job events, safe logs, affected scope, and timestamps.
- Never copy secrets or unnecessary raw/chat content into the incident record.

## Diagnosis

| Check | Command/dashboard/query | Safe expected result | Escalate when |
| --- | --- | --- | --- |
|  |  |  |  |

## Repair and replay

State preconditions, forward migration/code/config fix, idempotent replay method, usage/cost reconciliation, and actions that require two-person approval.

## Validate recovery

- [ ] Original failure no longer reproduces.
- [ ] Negative/security regression passes.
- [ ] No duplicate/lost state or unsettled accounting exists.
- [ ] Alerts recover and backlog returns below threshold.
- [ ] Disabled source/feature is re-enabled only after approval.

## Communications decision

Define who decides whether/how to notify students, contributors, institutions, providers, or regulators; include templates/targets where approved.

## Close and learn

Record timeline, root cause, contributing controls, measured detection/containment/recovery, permanent actions, owners/dates, and next exercise.

