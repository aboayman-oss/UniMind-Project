# AI module

- **Interface:** Generation, embedding, transcription, and OCR adapter interfaces plus deterministic mocks.
- **Allowed dependencies:** Shared contracts; provider SDKs only inside named adapter files/folders.
- **Prohibited dependencies:** Direct provider calls from UI/domain/application modules, browser credentials, or paid initialization without enablement and budget gates.
- **Owner:** The current provider-adapter task agent; provider/budget owners approve real enablement.

## File map

- `answer-generator.ts`, `structured-artifact-generator.ts`, `embedding-provider.ts`, `transcription-provider.ts`, and `ocr-provider.ts` are the stable AI interfaces.
- `mocks/*.mock.adapter.ts` are deterministic, zero-network implementations keyed by a synthetic case ID.
- `initialize-real-provider.application.ts` keeps real initialization lazy and rejects mock mode, a disabled provider flag, or zero budget before the initializer can run.
- Shared normalized result, usage, cost, status, and error types live in `src/types/provider.ts`; storage and queue own their interfaces in their respective modules.
