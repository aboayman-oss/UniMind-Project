export type RealProviderAuthorization = Readonly<{
  providerMode: "mock" | "real";
  providerEnabled: boolean;
  approvedBudgetMinor: number;
  environmentProfileApproved: boolean;
  providerConfigApproved: boolean;
  budgetPolicyApproved: boolean;
  credentialsPresent: boolean;
  rightsApproved: boolean;
  evaluationPassed: boolean;
  budgetPreflightApproved: boolean;
  liveCommandConfirmed: boolean;
  twoPersonApprovalRecorded: boolean;
}>;

export type RealProviderBlockReason =
  | "MOCK_MODE"
  | "PROVIDER_DISABLED"
  | "ZERO_BUDGET"
  | "ENVIRONMENT_NOT_APPROVED"
  | "PROVIDER_CONFIG_NOT_APPROVED"
  | "BUDGET_POLICY_NOT_APPROVED"
  | "CREDENTIALS_MISSING"
  | "RIGHTS_NOT_APPROVED"
  | "EVALUATION_NOT_PASSED"
  | "BUDGET_PREFLIGHT_NOT_APPROVED"
  | "LIVE_COMMAND_NOT_CONFIRMED"
  | "TWO_PERSON_APPROVAL_MISSING";

export class RealProviderInitializationBlockedError extends Error {
  constructor(readonly reason: RealProviderBlockReason) {
    super(`Real provider initialization blocked: ${reason}`);
    this.name = "RealProviderInitializationBlockedError";
  }
}

export function initializeRealProvider<T>(
  authorization: RealProviderAuthorization,
  initialize: () => T,
): T {
  if (authorization.providerMode !== "real") {
    throw new RealProviderInitializationBlockedError("MOCK_MODE");
  }
  if (!authorization.providerEnabled) {
    throw new RealProviderInitializationBlockedError("PROVIDER_DISABLED");
  }
  if (
    !Number.isInteger(authorization.approvedBudgetMinor) ||
    authorization.approvedBudgetMinor <= 0
  ) {
    throw new RealProviderInitializationBlockedError("ZERO_BUDGET");
  }
  if (!authorization.environmentProfileApproved) {
    throw new RealProviderInitializationBlockedError(
      "ENVIRONMENT_NOT_APPROVED",
    );
  }
  if (!authorization.providerConfigApproved) {
    throw new RealProviderInitializationBlockedError(
      "PROVIDER_CONFIG_NOT_APPROVED",
    );
  }
  if (!authorization.budgetPolicyApproved) {
    throw new RealProviderInitializationBlockedError(
      "BUDGET_POLICY_NOT_APPROVED",
    );
  }
  if (!authorization.credentialsPresent) {
    throw new RealProviderInitializationBlockedError("CREDENTIALS_MISSING");
  }
  if (!authorization.rightsApproved) {
    throw new RealProviderInitializationBlockedError("RIGHTS_NOT_APPROVED");
  }
  if (!authorization.evaluationPassed) {
    throw new RealProviderInitializationBlockedError("EVALUATION_NOT_PASSED");
  }
  if (!authorization.budgetPreflightApproved) {
    throw new RealProviderInitializationBlockedError(
      "BUDGET_PREFLIGHT_NOT_APPROVED",
    );
  }
  if (!authorization.liveCommandConfirmed) {
    throw new RealProviderInitializationBlockedError(
      "LIVE_COMMAND_NOT_CONFIRMED",
    );
  }
  if (!authorization.twoPersonApprovalRecorded) {
    throw new RealProviderInitializationBlockedError(
      "TWO_PERSON_APPROVAL_MISSING",
    );
  }
  return initialize();
}
