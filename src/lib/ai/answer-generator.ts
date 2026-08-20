import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type AnswerEvidenceSegment = Readonly<{
  segmentId: string;
  sourceVersionId: string;
  text: string;
}>;

export type AnswerGenerationRequest = Readonly<{
  question: string;
  responseLanguage: string;
  evidence: readonly AnswerEvidenceSegment[];
}>;

export type GeneratedAnswer = Readonly<{
  text: string;
  citedSegmentIds: readonly string[];
}>;

export interface AnswerGenerator {
  generateAnswer(
    request: AnswerGenerationRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<GeneratedAnswer>>;
}
