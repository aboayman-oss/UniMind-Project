# Testing module

- **Interface:** Synthetic factories, deterministic clocks/IDs, mock adapters, and assertion helpers shared by tests.
- **Allowed dependencies:** Public module interfaces and synthetic-only test libraries.
- **Prohibited dependencies:** Production secrets, real student/source content, paid providers, private fixtures, and tests that bypass public seams.
- **Owner:** The agent executing the current verification task.

`deterministic-provider.mock.ts` owns the shared synthetic provider case IDs and normalized scenario runner. Concrete mock adapters stay beside the interface they implement.
