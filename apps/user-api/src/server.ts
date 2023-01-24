import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';

import { buildSchema } from './graphql/schema';

export const server = new ApolloServer({
  schema: buildSchema(),
  introspection: true,
  plugins: [ApolloServerPluginInlineTrace()],
});
