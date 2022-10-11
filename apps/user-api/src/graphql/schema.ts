import { buildSubgraphSchema } from '@apollo/subgraph';

import { resolvers } from './resolvers';
import { typeDefs } from './typeDef';

// eslint-disable-next-line no-console
console.log(typeDefs);

export const buildSchema = () => {
  return buildSubgraphSchema([{ resolvers, typeDefs }]);
};
