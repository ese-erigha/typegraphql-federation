import { z } from 'zod';

const configSchema = z.object({
  LOG_LEVEL: z.string().default('debug'),
});

export type LoggerConfig = z.infer<typeof configSchema>;

export const config = configSchema.parse(process.env);
