// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-floating-promises */
import 'reflect-metadata';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { logger } from 'logger';

import { server } from './server';
// import { config } from './config';

(async function start() {
  const { url } = await startStandaloneServer(server);
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
})();

// server
//   .listen({ port: config.GRAPHQL_PORT })
//   .then(({ url }: { url: string }) => {
//     logger.info(`User service ready at url: ${url}`);
//     return;
//   })
//   .catch(err => {
//     logger.error(err);
//   });
