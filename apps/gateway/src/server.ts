import { ApolloServer } from '@apollo/server';

import { gateway } from './graphql/gateway';

export const buildServer = () => {
  return new ApolloServer({
    gateway,
    introspection: true,
  });
};
