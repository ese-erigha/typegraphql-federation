import { buildSubgraphSchema } from '@apollo/subgraph';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDef';

export const buildSchema = () => {
  return buildSubgraphSchema({ resolvers, typeDefs });
};
