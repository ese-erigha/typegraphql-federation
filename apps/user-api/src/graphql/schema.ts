import { GraphQLSchema } from 'graphql';
import { buildFederatedSchema } from 'common';

import { User } from '../models';
import { resolveUserReference } from './references';
import resolvers from './resolvers';

export default async function build(): Promise<GraphQLSchema> {
  const schema = await buildFederatedSchema(
    {
      resolvers,
      orphanedTypes: [User],
    },
    {
      User: { __resolveReference: resolveUserReference },
    },
  );
  return schema;
}
