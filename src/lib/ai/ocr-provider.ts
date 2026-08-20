import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type OcrRequest = Readonly<{
  documentObjectKey: string;
  pageNumbers: readonly number[];
  languageHints: readonly string[];
}>;

export type OcrPage = Readonly<{
  pageNumber: number;
  text: string;
  confidence: number;
}>;

export type GeneratedOcr = Readonly<{
  pages: readonly OcrPage[];
}>;

export interface OcrProvider {
  recognize(
    request: OcrRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<GeneratedOcr>>;
}
