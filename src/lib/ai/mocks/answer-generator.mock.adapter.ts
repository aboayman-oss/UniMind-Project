import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type {
  AnswerGenerationRequest,
  AnswerGenerator,
  GeneratedAnswer,
} from "../answer-generator";

export class DeterministicMockAnswerGenerator implements AnswerGenerator {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  generateAnswer(
    request: AnswerGenerationRequest,
    context: ProviderCallContext,
  ) {
    const value: GeneratedAnswer = {
      text: "Synthetic grounded answer.",
      citedSegmentIds: request.evidence.map((segment) => segment.segmentId),
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-answer-generator",
      configVersion: "mock-v1",
      unit: "tokens",
      successValue: value,
    });
  }
}
