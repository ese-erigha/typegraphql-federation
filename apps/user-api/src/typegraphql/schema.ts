import { buildFederatedSchema } from './buildFederatedSchema';
import { UsersResolver } from './resolver';
import { resolveUserReference } from './user-reference';
import { User } from './user';

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
