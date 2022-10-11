import { GraphQLSchema } from 'graphql';
import { buildSubgraphSchema } from '@apollo/federation';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDef';

export const buildSchema = (): GraphQLSchema => {
  return buildSubgraphSchema([{ resolvers, typeDefs }]);
};

export default function build(): GraphQLSchema {
  return buildSubgraphSchema([{ resolvers, typeDefs }]);
}
