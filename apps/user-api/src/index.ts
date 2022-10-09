import 'reflect-metadata';
import { logger } from 'logger';

import { startApolloServer } from './server';

startApolloServer().catch(err => {
  logger.error(err);
});
