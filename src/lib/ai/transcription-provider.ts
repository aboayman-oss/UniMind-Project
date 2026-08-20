import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type TranscriptionRequest = Readonly<{
  audioObjectKey: string;
  languageHint: string | null;
}>;

export type TranscriptionSegment = Readonly<{
  startMs: number;
  endMs: number;
  text: string;
  confidence: number;
}>;

export type GeneratedTranscription = Readonly<{
  language: string;
  segments: readonly TranscriptionSegment[];
}>;

export interface TranscriptionProvider {
  transcribe(
    request: TranscriptionRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<GeneratedTranscription>>;
}
