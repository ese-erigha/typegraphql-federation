import { GraphQLSchema } from 'graphql';
import { buildFederatedSchema } from '@ese-erigha/common';

import { Tweet, User } from '../models';
import resolvers from './resolvers';

export default async function build(): Promise<GraphQLSchema> {
  const schema = await buildFederatedSchema({
    resolvers,
    orphanedTypes: [Tweet, User],
  });
  return schema;
}
