import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import { startStandaloneServer } from '@apollo/server/standalone';
import { logger } from 'logger';

import { buildServer } from './server';
import { config } from './config';

void (async function start() {
  try {
    const server = buildServer();
    const { url } = await startStandaloneServer(server, { listen: { port: config.GRAPHQL_PORT } });
    logger.info(`🚀 Gateway service ready at url: ${url}`);
  } catch (err) {
    logger.error(err);
  }
})();
