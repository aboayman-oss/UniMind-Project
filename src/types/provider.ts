export const providerErrorCodes = [
  "INVALID_INPUT",
  "UNAUTHORIZED",
  "RIGHTS_BLOCKED",
  "RATE_LIMITED",
  "TIMEOUT_BEFORE_ACCEPT",
  "TIMEOUT_UNKNOWN",
  "PROVIDER_UNAVAILABLE",
  "CONTENT_REJECTED",
  "MALFORMED_OUTPUT",
  "BUDGET_BLOCKED",
] as const;

export type ProviderErrorCode = (typeof providerErrorCodes)[number];

export type ProviderStatus =
  "SUCCEEDED" | "RETRYABLE_FAILURE" | "TERMINAL_FAILURE" | "OUTCOME_UNKNOWN";

export type ProviderUnit =
  "bytes" | "characters" | "operations" | "pages" | "seconds" | "tokens";

export type ProviderCallContext = Readonly<{
  correlationId: string;
  idempotencyKey: string;
  timeoutMs: number;
  attempt: number;
  signal?: AbortSignal;
}>;

export type ProviderUsage = Readonly<{
  unit: ProviderUnit;
  inputUnits: number;
  outputUnits: number;
  calculatedCost: Readonly<{
    amountMinor: number;
    currency: string | null;
  }>;
}>;

export type ProviderError = Readonly<{
  code: ProviderErrorCode;
  message: string;
  retryable: boolean;
  acceptance: "NOT_ACCEPTED" | "REJECTED" | "UNKNOWN";
  retryAfterMs: number | null;
}>;

type ProviderResultMetadata = Readonly<{
  provider: string;
  configVersion: string;
  providerRequestId: string | null;
  usage: ProviderUsage;
  durationMs: number;
  attempt: number;
}>;

export type ProviderSuccess<T> = ProviderResultMetadata &
  Readonly<{
    status: "SUCCEEDED";
    value: T;
    error: null;
  }>;

export type ProviderFailure = ProviderResultMetadata &
  Readonly<{
    status: Exclude<ProviderStatus, "SUCCEEDED">;
    value: null;
    error: ProviderError;
  }>;

export type ProviderResult<T> = ProviderSuccess<T> | ProviderFailure;
