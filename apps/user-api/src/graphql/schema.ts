import { buildFederatedSchema } from 'common';
import { UsersResolver } from './resolvers';
import { resolveUserReference } from './references/user';
import { User } from '../models';

export const buildSchema = async () => {
  const schema = await buildFederatedSchema(
    {
      resolvers: [UsersResolver],
      orphanedTypes: [User],
    },
    {
      User: { __resolveReference: resolveUserReference },
    },
  );
  return schema;
};
