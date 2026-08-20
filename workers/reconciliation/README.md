# Reconciliation worker

- **Interface:** Recovers stale leases and uncertain provider/cost states without duplicate work or settlement.
- **Allowed dependencies:** Jobs/usage application interfaces, concrete server adapters, and worker runtime helpers.
- **Prohibited dependencies:** UI code, silent deletion of audit state, duplicate charges, and guessed settlement outcomes.
- **Owner:** The current recovery/reconciliation task agent.
