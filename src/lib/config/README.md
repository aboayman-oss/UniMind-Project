# Configuration module

- **Interface:** Validated public/server environment and explicit feature/provider enablement contracts.
- **Allowed dependencies:** Zod and server-only enforcement where privileged configuration is read.
- **Prohibited dependencies:** Secret values in browser bundles, unvalidated process-environment reads outside this module, and implicit real-provider defaults.
- **Owner:** The current environment-contract task agent; secret owners control external values.
