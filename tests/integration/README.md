# Integration tests

- **Interface:** Tests across application interfaces and local adapters, including the reset local PostgreSQL/Supabase stack when required.
- **Allowed dependencies:** Synthetic seed data, local services, and deterministic provider mocks.
- **Prohibited dependencies:** Beta/production endpoints, real private data, paid providers, and order-dependent state.
- **Owner:** The current integration task agent.
