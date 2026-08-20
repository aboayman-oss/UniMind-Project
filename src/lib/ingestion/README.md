# Ingestion module

- **Interface:** Source-processing contracts from accepted source version to verified processed representation.
- **Allowed dependencies:** Domain/application interfaces, jobs, storage interfaces, shared validation/types, and concrete providers only in adapters.
- **Prohibited dependencies:** UI authority, source-format-specific knowledge modes, real source content in fixtures/logs, and provider SDKs in domain code.
- **Owner:** The current ingestion task agent; academic/security reviewers retain their named gates.
