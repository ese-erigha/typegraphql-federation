import { Resolver, FieldResolver, Root } from 'type-graphql';

import { Tweet, User } from '../../models';
import { TweetRepository } from '../../repositories';

@Resolver(_of => User)
export class UserTweetsResolver {
  @FieldResolver(() => [Tweet])
  async tweets(@Root() user: User): Promise<Tweet[]> {
    return TweetRepository.findUserTweets(user.id);
  }
}
