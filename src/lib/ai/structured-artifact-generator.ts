import type { ProviderCallContext, ProviderResult } from "../../types/provider";
import type { AnswerEvidenceSegment } from "./answer-generator";

export type StructuredArtifactRequest = Readonly<{
  artifactType: string;
  schemaVersion: string;
  instruction: string;
  evidence: readonly AnswerEvidenceSegment[];
}>;

export type GeneratedStructuredArtifact = Readonly<{
  schemaVersion: string;
  content: Readonly<Record<string, unknown>>;
  citedSegmentIds: readonly string[];
}>;

export interface StructuredArtifactGenerator {
  generateArtifact(
    request: StructuredArtifactRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<GeneratedStructuredArtifact>>;
}
