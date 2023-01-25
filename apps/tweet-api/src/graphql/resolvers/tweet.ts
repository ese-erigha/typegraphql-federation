import { Resolver, Query, Arg } from 'type-graphql';

import { TweetRepository } from '../../repositories';
import { Tweet } from '../../models';

@Resolver(_of => Tweet)
export class TweetsResolver {
  @Query(_returns => [Tweet])
  async tweets(): Promise<Tweet[]> {
    return TweetRepository.findAll();
  }

  @Query(_returns => Tweet)
  async tweet(@Arg('id') id: string): Promise<Tweet | null> {
    return TweetRepository.findById(id);
  }
}
