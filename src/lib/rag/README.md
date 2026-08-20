# RAG module

- **Interface:** Authorized retrieval, evidence-packet, evidence-class, and groundedness contracts.
- **Allowed dependencies:** Auth scope interfaces, pure domain code, shared validation/types, and injected retrieval adapters.
- **Prohibited dependencies:** Web-search fallback, outside-answer knowledge, direct UI state, and provider SDKs outside adapters.
- **Owner:** The current retrieval task agent; academic reviewers own quality gates.
