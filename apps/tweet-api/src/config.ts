import { z } from 'zod';

import * as ZodHelpers from './lib/types';

const configSchema = z.object({
  GRAPHQL_PORT: ZodHelpers.number,
  LOG_LEVEL: z.string().default('debug'),
  NODE_ENV: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const config = configSchema.parse(process.env);