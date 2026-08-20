import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type { GeneratedOcr, OcrProvider, OcrRequest } from "../ocr-provider";

export class DeterministicMockOcrProvider implements OcrProvider {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  recognize(request: OcrRequest, context: ProviderCallContext) {
    const value: GeneratedOcr = {
      pages: request.pageNumbers.map((pageNumber) => ({
        pageNumber,
        text: "Synthetic OCR page.",
        confidence: 1,
      })),
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-ocr-provider",
      configVersion: "mock-v1",
      unit: "pages",
      successValue: value,
    });
  }
}
