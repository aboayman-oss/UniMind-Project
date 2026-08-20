import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type {
  EmbeddingProvider,
  EmbeddingRequest,
  GeneratedEmbeddings,
} from "../embedding-provider";

export class DeterministicMockEmbeddingProvider implements EmbeddingProvider {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  embed(request: EmbeddingRequest, context: ProviderCallContext) {
    const value: GeneratedEmbeddings = {
      dimensions: 3,
      vectors: request.texts.map(() => [1, 0, 0]),
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-embedding-provider",
      configVersion: "mock-v1",
      unit: "tokens",
      successValue: value,
    });
  }
}
