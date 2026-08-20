# Storage module

- **Interface:** Private raw and durable processed-object interfaces; adapters are deferred until their decision gate.
- **Allowed dependencies:** Domain/application contracts and provider SDKs only inside `*.adapter.ts` or `adapters/`.
- **Prohibited dependencies:** Public raw objects, signed-URL persistence, provider SDKs in domain/application files, and real deletion before its two-person gate.
- **Owner:** The current storage task agent; the security/data owner reviews real storage and deletion behavior.
