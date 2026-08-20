# Availability module

- **Interface:** `deriveAvailability` returns an available result or exact unmet predicates from approved availability facts.
- **Allowed dependencies:** Pure same-module domain code and shared types.
- **Prohibited dependencies:** Editable availability flags, React, Next.js, database clients, provider SDKs, or authorization inferred from browser state.
- **Owner:** The current availability task agent; database enforcement later requires security review.
