# Shared worker runtime

- **Interface:** Process lifecycle, lease heartbeat, shutdown, correlation, and deterministic worker-runtime helpers.
- **Allowed dependencies:** Node.js runtime and public application/observability interfaces.
- **Prohibited dependencies:** Product-specific business decisions, provider SDKs not owned by an adapter, and durable state held only in memory.
- **Owner:** The current worker-platform task agent.
