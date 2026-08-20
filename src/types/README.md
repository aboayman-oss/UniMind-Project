# Shared types

- **Interface:** Framework-neutral generated schema types and cross-module transport types that have no runtime behavior.
- **Allowed dependencies:** Type-only standard-library or generated declarations.
- **Prohibited dependencies:** React, Next.js, provider SDKs, database clients, configuration reads, and business-rule implementations.
- **Owner:** The agent executing the schema or contract task; generated database types are owned by migrations.

`provider.ts` is the cross-module result, usage, cost, status, call-context, and error contract used by AI, storage, and queue interfaces.
