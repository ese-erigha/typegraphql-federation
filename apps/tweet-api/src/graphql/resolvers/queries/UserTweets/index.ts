import { Resolver, FieldResolver, Root } from 'type-graphql';

import { User, Tweet } from '../../../../models';
import { TweetRepository } from '../../../../repositories';

@Resolver(_of => User)
export class UserTweetsResolver {
  @FieldResolver(_type => [Tweet])
  async tweets(@Root() user: User) {
    return TweetRepository.findUserTweets(user.id);
  }
}
