import { z } from 'zod';

const configSchema = z.object({
  GRAPHQL_PORT: z.string(),
  LOG_LEVEL: z.string().default('debug'),
  NODE_ENV: z.string(),
});

export type Config = z.infer<typeof configSchema>;

export const config = configSchema.parse(process.env);
