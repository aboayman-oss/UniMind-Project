import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type EnqueueJobRequest = Readonly<{
  jobId: string;
  jobType: string;
  availableAt: string;
}>;

export type EnqueuedJob = Readonly<{
  jobId: string;
  deliveryId: string;
}>;

export interface JobQueueProvider {
  enqueue(
    request: EnqueueJobRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<EnqueuedJob>>;
}
