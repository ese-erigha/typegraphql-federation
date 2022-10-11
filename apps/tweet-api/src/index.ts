import 'reflect-metadata';
import { logger } from 'logger';

import { server } from './server';
import { config } from './config';

server
  .listen({ port: config.GRAPHQL_PORT })
  .then(({ url }: { url: string }) => {
    logger.info(`Tweet service ready at url: ${url}`);
    return;
  })
  .catch(err => {
    logger.error(err);
  });
