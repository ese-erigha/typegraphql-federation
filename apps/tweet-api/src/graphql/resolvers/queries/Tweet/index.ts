import { Arg, Query, Resolver } from 'type-graphql';

import { Tweet } from '../../../../models';
import { TweetRepository } from '../../../../repositories';

@Resolver(_of => Tweet)
export class TweetResolver {
  @Query(_returns => Tweet, { nullable: true })
  async tweet(@Arg('id') id: string) {
    return TweetRepository.findById(id);
  }

  @Query(_returns => Array<Tweet>)
  async tweets() {
    return TweetRepository.findAll();
  }
}
