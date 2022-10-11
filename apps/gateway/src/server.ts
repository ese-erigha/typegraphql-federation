import { ApolloServer } from 'apollo-server';

import { gateway } from './graphql/gateway';

// eslint-disable-next-line no-console
console.log({ gateway });

export const server = new ApolloServer({
  gateway,
  introspection: true,
});
