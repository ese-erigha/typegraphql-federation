import { buildFederatedSchema } from 'common';
import { TweetsResolver, UserTweetsResolver } from './resolvers';
import { User, Tweet } from '../models';

export const buildSchema = async () => {
  const schema = await buildFederatedSchema({
    resolvers: [TweetsResolver, UserTweetsResolver],
    orphanedTypes: [User, Tweet],
  });
  return schema;
};
