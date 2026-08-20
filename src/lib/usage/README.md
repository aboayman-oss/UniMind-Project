# Usage module

- **Interface:** Reservation, quota, cost-ledger, settlement, alert, and kill-switch contracts.
- **Allowed dependencies:** Pure domain rules, shared validation/types, and injected persistence/provider-meter adapters.
- **Prohibited dependencies:** Floating-point money, guessed nonzero budgets, provider calls before reservation, and browser-authoritative usage state.
- **Owner:** The current usage task agent; budget changes require their named owners and independent review.
