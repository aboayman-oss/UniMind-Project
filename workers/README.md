# Workers

Workers are Node.js composition roots for durable jobs. They may connect application interfaces to concrete adapters, but business rules remain in `src/lib/*` domain/application modules and PostgreSQL remains authoritative for durable state.

Shared worker rules live in `docs/agents/module-boundaries.md`.
