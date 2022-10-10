import cors from '@koa/cors';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-koa';
import http from 'http';
import Koa from 'koa';
import { logger } from 'logger';
import { AddressInfo } from 'net';

import { router } from './routes';
import { name, version } from '../package.json';
import { config } from './config';
import { Context } from './context';
import gateway from './graphql/gateway';
import { koaMiddleware as loggerMiddleware } from './middleware/logger';

export type AppState = Koa.DefaultState;

export interface AppContext extends Koa.DefaultContext {
  state: AppState;
}

export async function startApolloServer() {
  const httpServer = http.createServer();
  const server = new ApolloServer({
    gateway,
    introspection: true,
    csrfPrevention: true,
    cache: 'bounded',
    context: ctx => Context.forKoa(ctx),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();

  const app = new Koa();
  server.applyMiddleware({ app });

  httpServer.on('request', app.callback());

  app.context.state = {} as AppState;

  app.use(cors());
  app.use(loggerMiddleware);
  app.use(router.routes()).use(router.allowedMethods());

  app.use(ctx => {
    ctx.status = 404;
  });

  app.on('error', err => {
    logger.error(err);
  });

  await new Promise<void>(resolve => httpServer.listen({ port: config.GRAPHQL_PORT }, resolve));

  const { address, port } = httpServer.address() as AddressInfo;
  logger.info('🚀 Started %s:%s @ %s:%d', name, version, address, port);

  return { server, app };
}
