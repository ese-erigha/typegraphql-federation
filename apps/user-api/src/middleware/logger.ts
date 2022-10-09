import Koa from 'koa';
import koaPinoLogger from 'koa-pino-logger';

import { config } from '../config';

function getKoaMiddleware() {
  const pinoConfig = {
    level: config.LOG_LEVEL,
    formatters: { level: (label: any, _number: any) => ({ level: String(label) }) },
    autoLogging: {
      ignorePaths: ['/health', '/check'],
    },
  };

  const koaMiddleware: Koa.Middleware & { logger: Koa.ExtendableContext['log'] } = koaPinoLogger(pinoConfig);
  return koaMiddleware;
}

export const koaMiddleware = getKoaMiddleware();
