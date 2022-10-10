import Koa from 'koa';
import koaPinoLogger from 'koa-pino-logger';

function getKoaMiddleware() {
  const pinoConfig = {
    level: 'debug',
    formatters: { level: (label: any, _number: any) => ({ level: String(label) }) },
    autoLogging: {
      ignorePaths: ['/health', '/check'],
    },
  };

  const koaMiddleware: Koa.Middleware & { logger: Koa.ExtendableContext['log'] } = koaPinoLogger(pinoConfig);
  return koaMiddleware;
}

export const koaMiddleware = getKoaMiddleware();
