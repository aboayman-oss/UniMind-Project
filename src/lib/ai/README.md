# AI module

- **Interface:** Generation, embedding, transcription, and OCR adapter interfaces plus deterministic mocks.
- **Allowed dependencies:** Shared contracts; provider SDKs only inside named adapter files/folders.
- **Prohibited dependencies:** Direct provider calls from UI/domain/application modules, browser credentials, or paid initialization without enablement and budget gates.
- **Owner:** The current provider-adapter task agent; provider/budget owners approve real enablement.
