import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type {
  GeneratedStructuredArtifact,
  StructuredArtifactGenerator,
  StructuredArtifactRequest,
} from "../structured-artifact-generator";

export class DeterministicMockStructuredArtifactGenerator implements StructuredArtifactGenerator {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  generateArtifact(
    request: StructuredArtifactRequest,
    context: ProviderCallContext,
  ) {
    const value: GeneratedStructuredArtifact = {
      schemaVersion: request.schemaVersion,
      content: { synthetic: true, artifactType: request.artifactType },
      citedSegmentIds: request.evidence.map((segment) => segment.segmentId),
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-structured-artifact-generator",
      configVersion: "mock-v1",
      unit: "tokens",
      successValue: value,
    });
  }
}
