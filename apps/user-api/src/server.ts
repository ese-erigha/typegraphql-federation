import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';

import { buildSchema } from './graphql/schema';

export const server = new ApolloServer({
  schema: buildSchema(),
  introspection: true,
  plugins: [ApolloServerPluginInlineTraceDisabled()],
});
