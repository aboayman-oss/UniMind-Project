# Generation worker

- **Interface:** Claims and advances durable chat/Studio generation jobs with reservations and validation.
- **Allowed dependencies:** Studio/RAG/usage/jobs application interfaces, concrete server adapters, and worker runtime helpers.
- **Prohibited dependencies:** UI code, unreserved paid calls, outside-knowledge branches, and in-memory durable authority.
- **Owner:** The current generation-worker task agent.
