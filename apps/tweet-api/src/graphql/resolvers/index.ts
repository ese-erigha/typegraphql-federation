import { BuildSchemaOptions } from 'type-graphql';

import { TweetResolver } from './queries/Tweet';
import { UserTweetsResolver } from './queries/UserTweets';

const resolvers: BuildSchemaOptions['resolvers'] = [TweetResolver, UserTweetsResolver];

export default resolvers;
