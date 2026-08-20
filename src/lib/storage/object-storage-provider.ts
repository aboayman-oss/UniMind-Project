import type { ProviderCallContext, ProviderResult } from "../../types/provider";

export type StorageNamespace = "processed" | "raw" | "temporary";

export type PutObjectRequest = Readonly<{
  namespace: StorageNamespace;
  objectKey: string;
  bytes: Uint8Array;
  contentType: string;
}>;

export type StoredObject = Readonly<{
  namespace: StorageNamespace;
  objectKey: string;
  checksum: string;
  byteLength: number;
}>;

export type GetObjectRequest = Readonly<{
  namespace: StorageNamespace;
  objectKey: string;
}>;

export type RetrievedObject = StoredObject &
  Readonly<{
    bytes: Uint8Array;
    contentType: string;
  }>;

export type DeleteObjectRequest = GetObjectRequest;

export type DeletedObject = Readonly<{
  namespace: StorageNamespace;
  objectKey: string;
  absent: boolean;
}>;

export interface ObjectStorageProvider {
  putObject(
    request: PutObjectRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<StoredObject>>;

  getObject(
    request: GetObjectRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<RetrievedObject>>;

  deleteObject(
    request: DeleteObjectRequest,
    context: ProviderCallContext,
  ): Promise<ProviderResult<DeletedObject>>;
}
