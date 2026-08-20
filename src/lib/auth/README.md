# Auth module

- **Interface:** Authenticated-session and authorization interfaces; implementation is deferred to its named task.
- **Allowed dependencies:** Shared validation/types; application code may use domain interfaces and server adapters.
- **Prohibited dependencies:** Client-side credentials, provider SDKs in domain files, and business authorization stored only in UI state.
- **Owner:** The current auth task agent; security review is required for authorization behavior.
