import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type {
  GeneratedTranscription,
  TranscriptionProvider,
  TranscriptionRequest,
} from "../transcription-provider";

export class DeterministicMockTranscriptionProvider implements TranscriptionProvider {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  transcribe(_request: TranscriptionRequest, context: ProviderCallContext) {
    const value: GeneratedTranscription = {
      language: "en",
      segments: [
        {
          startMs: 0,
          endMs: 1_000,
          text: "Synthetic transcription segment.",
          confidence: 1,
        },
      ],
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-transcription-provider",
      configVersion: "mock-v1",
      unit: "seconds",
      successValue: value,
    });
  }
}
