# HTTP module

- **Interface:** Shared request/response envelopes, correlation, error mapping, and bounded transport helpers.
- **Allowed dependencies:** Shared validation/types and application result interfaces.
- **Prohibited dependencies:** Business-state authority, provider-specific payload leakage, secret/error detail exposure, and durable work owned by a request lifetime.
- **Owner:** The current route/transport task agent.
