# Ingestion worker

- **Interface:** Claims and advances durable ingestion jobs through idempotent processing steps.
- **Allowed dependencies:** Ingestion/jobs application interfaces, concrete server adapters, and `workers/shared` runtime helpers.
- **Prohibited dependencies:** UI code, browser state, unleased work, real-provider initialization without gates, and business rules embedded in workflow nodes.
- **Owner:** The current ingestion-worker task agent.
