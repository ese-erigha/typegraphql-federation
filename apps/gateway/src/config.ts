import { z } from 'zod';
import { ZodHelpers } from 'common';

const configSchema = z.object({
  GRAPHQL_PORT: ZodHelpers.number,
  LOG_LEVEL: z.string().default('debug'),
  NODE_ENV: z.string(),
  TWEET_API_PORT: ZodHelpers.number,
  USER_API_PORT: ZodHelpers.number,
  GITHUB_TOKEN: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const config = configSchema.parse(process.env);
