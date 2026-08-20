import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type EmbeddingRequest = Readonly<{
  texts: readonly string[];
}>;

export type GeneratedEmbeddings = Readonly<{
  dimensions: number;
  vectors: readonly (readonly number[])[];
}>;

export interface EmbeddingProvider {
  embed(
    request: EmbeddingRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<GeneratedEmbeddings>>;
}
