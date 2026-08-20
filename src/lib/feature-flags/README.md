# Feature flags module

- **Interface:** Typed, validated release/experiment flag reads that fail closed.
- **Allowed dependencies:** Validated configuration, authorized server context, and injected flag adapters.
- **Prohibited dependencies:** Editable availability, authorization, budget, deletion, or other business-state replacement flags.
- **Owner:** The current release-controls task agent; release/unlock remains a human governance gate.
