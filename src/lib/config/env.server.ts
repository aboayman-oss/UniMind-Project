import "server-only";

import {
  createCachedEnvironmentReader,
  parseServerEnvironment,
} from "./env.schema";

export const getServerEnvironment = createCachedEnvironmentReader(() =>
  parseServerEnvironment(process.env),
);
