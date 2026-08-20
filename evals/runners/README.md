# Evaluation runners

- **Interface:** Deterministic readers/validators that consume versioned evaluation datasets and emit machine-readable plus Markdown reports.
- **Allowed dependencies:** Dataset schemas, public RAG/Studio interfaces, and deterministic mocks by default.
- **Prohibited dependencies:** Dataset mutation, paid calls in `pnpm verify`, private content in committed output, and hidden score thresholds.
- **Owner:** The current evaluation task agent; academic reviewers own quality judgments.
