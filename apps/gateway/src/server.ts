import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';

import gateway from './graphql/gateway';

export const server = new ApolloServer({
  gateway,
  introspection: true,
  plugins: [ApolloServerPluginInlineTraceDisabled()],
});
