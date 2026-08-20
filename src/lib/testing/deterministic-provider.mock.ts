import type {
  ProviderCallContext,
  ProviderError,
  ProviderErrorCode,
  ProviderFailure,
  ProviderResult,
  ProviderStatus,
  ProviderUnit,
} from "../../types/provider";

export const deterministicProviderCaseIds = [
  "success",
  "latency",
  "rate-limit",
  "timeout-before-accept",
  "timeout-after-accept",
  "malformed-output",
  "terminal-rejection",
  "invalid-input",
  "unauthorized",
  "rights-blocked",
  "budget-blocked",
  "provider-unavailable",
] as const;

export type DeterministicProviderCaseId =
  (typeof deterministicProviderCaseIds)[number];

type ScenarioOptions<T> = Readonly<{
  caseId: DeterministicProviderCaseId;
  provider: string;
  configVersion: string;
  unit: ProviderUnit;
  successValue: T;
}>;

type FailureDefinition = Readonly<{
  status: Exclude<ProviderStatus, "SUCCEEDED">;
  code: ProviderErrorCode;
  message: string;
  retryable: boolean;
  acceptance: ProviderError["acceptance"];
  retryAfterMs?: number;
  accepted?: boolean;
}>;

const failureCases: Readonly<
  Partial<Record<DeterministicProviderCaseId, FailureDefinition>>
> = {
  "rate-limit": {
    status: "RETRYABLE_FAILURE",
    code: "RATE_LIMITED",
    message: "Synthetic provider rate limit.",
    retryable: true,
    acceptance: "NOT_ACCEPTED",
    retryAfterMs: 1_000,
  },
  "timeout-before-accept": {
    status: "RETRYABLE_FAILURE",
    code: "TIMEOUT_BEFORE_ACCEPT",
    message: "Synthetic timeout before acceptance.",
    retryable: true,
    acceptance: "NOT_ACCEPTED",
  },
  "timeout-after-accept": {
    status: "OUTCOME_UNKNOWN",
    code: "TIMEOUT_UNKNOWN",
    message: "Synthetic timeout after acceptance; reconcile before retry.",
    retryable: false,
    acceptance: "UNKNOWN",
    accepted: true,
  },
  "malformed-output": {
    status: "TERMINAL_FAILURE",
    code: "MALFORMED_OUTPUT",
    message: "Synthetic malformed provider output.",
    retryable: false,
    acceptance: "REJECTED",
  },
  "terminal-rejection": {
    status: "TERMINAL_FAILURE",
    code: "CONTENT_REJECTED",
    message: "Synthetic terminal content rejection.",
    retryable: false,
    acceptance: "REJECTED",
  },
  "invalid-input": {
    status: "TERMINAL_FAILURE",
    code: "INVALID_INPUT",
    message: "Synthetic invalid input.",
    retryable: false,
    acceptance: "NOT_ACCEPTED",
  },
  unauthorized: {
    status: "TERMINAL_FAILURE",
    code: "UNAUTHORIZED",
    message: "Synthetic unauthorized provider call.",
    retryable: false,
    acceptance: "NOT_ACCEPTED",
  },
  "rights-blocked": {
    status: "TERMINAL_FAILURE",
    code: "RIGHTS_BLOCKED",
    message: "Synthetic rights denial.",
    retryable: false,
    acceptance: "NOT_ACCEPTED",
  },
  "budget-blocked": {
    status: "TERMINAL_FAILURE",
    code: "BUDGET_BLOCKED",
    message: "Synthetic zero-budget denial.",
    retryable: false,
    acceptance: "NOT_ACCEPTED",
  },
  "provider-unavailable": {
    status: "RETRYABLE_FAILURE",
    code: "PROVIDER_UNAVAILABLE",
    message: "Synthetic provider unavailable.",
    retryable: true,
    acceptance: "NOT_ACCEPTED",
  },
};

function stableId(value: string): string {
  let hash = 2_166_136_261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16_777_619);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

async function waitForSyntheticLatency(
  signal: AbortSignal | undefined,
): Promise<boolean> {
  if (signal?.aborted === true) {
    return false;
  }

  return new Promise((resolve) => {
    const finish = (completed: boolean) => {
      clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
      resolve(completed);
    };
    const onAbort = () => finish(false);
    const timer = setTimeout(() => finish(true), 5);
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export async function runDeterministicProviderCase<T>(
  context: ProviderCallContext,
  options: ScenarioOptions<T>,
): Promise<ProviderResult<T>> {
  const requestId = `mock-${stableId(`${options.provider}:${context.idempotencyKey}`)}`;
  const usage = {
    unit: options.unit,
    inputUnits: 0,
    outputUnits: 0,
    calculatedCost: { amountMinor: 0, currency: null },
  } as const;
  const base = {
    provider: options.provider,
    configVersion: options.configVersion,
    usage,
    attempt: context.attempt,
  } as const;

  if (
    context.correlationId.trim() === "" ||
    context.idempotencyKey.trim() === "" ||
    !Number.isInteger(context.timeoutMs) ||
    context.timeoutMs <= 0 ||
    !Number.isInteger(context.attempt) ||
    context.attempt <= 0
  ) {
    return failureResult(base, null, 0, {
      status: "TERMINAL_FAILURE",
      code: "INVALID_INPUT",
      message: "Provider call context is invalid.",
      retryable: false,
      acceptance: "NOT_ACCEPTED",
    });
  }

  if (context.signal?.aborted === true) {
    return failureResult(base, null, 0, {
      status: "RETRYABLE_FAILURE",
      code: "PROVIDER_UNAVAILABLE",
      message: "Provider call aborted before acceptance.",
      retryable: true,
      acceptance: "NOT_ACCEPTED",
    });
  }

  if (options.caseId === "latency") {
    const completed = await waitForSyntheticLatency(context.signal);
    if (!completed) {
      return failureResult(base, null, 0, {
        status: "RETRYABLE_FAILURE",
        code: "PROVIDER_UNAVAILABLE",
        message: "Provider call aborted during synthetic latency.",
        retryable: true,
        acceptance: "NOT_ACCEPTED",
      });
    }
    return {
      ...base,
      providerRequestId: requestId,
      durationMs: 750,
      status: "SUCCEEDED",
      value: options.successValue,
      error: null,
    };
  }

  const failure = failureCases[options.caseId];
  if (failure !== undefined) {
    const durationMs = options.caseId.startsWith("timeout-")
      ? context.timeoutMs
      : 12;
    return failureResult(
      base,
      failure.accepted === true ? requestId : null,
      durationMs,
      failure,
    );
  }

  return {
    ...base,
    providerRequestId: requestId,
    durationMs: 12,
    status: "SUCCEEDED",
    value: options.successValue,
    error: null,
  };
}

function failureResult(
  base: Readonly<{
    provider: string;
    configVersion: string;
    usage: ProviderFailure["usage"];
    attempt: number;
  }>,
  providerRequestId: string | null,
  durationMs: number,
  definition: FailureDefinition,
): ProviderFailure {
  return {
    ...base,
    providerRequestId,
    durationMs,
    status: definition.status,
    value: null,
    error: {
      code: definition.code,
      message: definition.message,
      retryable: definition.retryable,
      acceptance: definition.acceptance,
      retryAfterMs: definition.retryAfterMs ?? null,
    },
  };
}
