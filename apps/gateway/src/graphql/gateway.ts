import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

import { config } from '../config';

export const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'users', url: `http://localhost:${config.USER_API_PORT}` },
      { name: 'tweets', url: `http://localhost:${config.TWEET_API_PORT}` },
    ],
  }),
});
