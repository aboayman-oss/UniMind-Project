import {
  runDeterministicProviderCase,
  type DeterministicProviderCaseId,
} from "../../testing/deterministic-provider.mock";
import type { ProviderCallContext } from "../../../types/provider";
import type {
  EnqueuedJob,
  EnqueueJobRequest,
  JobQueueProvider,
} from "../job-queue-provider";

export class DeterministicMockJobQueueProvider implements JobQueueProvider {
  constructor(
    private readonly caseId: DeterministicProviderCaseId = "success",
  ) {}

  enqueue(request: EnqueueJobRequest, context: ProviderCallContext) {
    const value: EnqueuedJob = {
      jobId: request.jobId,
      deliveryId: "synthetic-delivery",
    };
    return runDeterministicProviderCase(context, {
      caseId: this.caseId,
      provider: "mock-job-queue-provider",
      configVersion: "mock-v1",
      unit: "operations",
      successValue: value,
    });
  }
}
