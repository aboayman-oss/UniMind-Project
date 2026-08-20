# Jobs module

- **Interface:** Durable-job state, idempotency, lease, enqueue, retry, and reconciliation contracts.
- **Allowed dependencies:** Pure domain rules, shared validation/types, and injected queue/persistence interfaces.
- **Prohibited dependencies:** Browser-lifetime jobs, request-lifetime long work, provider SDKs outside adapters, and in-memory durable state.
- **Owner:** The current durable-work task agent.

`job-queue-provider.ts` owns the enqueue interface. `mocks/job-queue.mock.adapter.ts` is only a deterministic delivery adapter; PostgreSQL remains authoritative for durable job state.
