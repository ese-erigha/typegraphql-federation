import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';

import { buildSchema } from './graphql/schema';

export const buildServer = async () => {
  const schema = await buildSchema();
  return new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginInlineTrace()],
  });
};
