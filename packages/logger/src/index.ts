import pino from 'pino';

import { config } from './config';

export function getLogger() {
  const pinoConfig = {
    level: config.LOG_LEVEL,
    formatters: { level: (label: any, _number: any) => ({ level: String(label) }) },
  };

  return pino(pinoConfig);
}

export const logger = getLogger();
