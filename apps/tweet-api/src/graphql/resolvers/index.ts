import { TweetRepository } from '../../repositories';
import { Tweet, User } from '../../models';

export const resolvers = {
  Query: {
    tweets: async () => {
      return TweetRepository.findAll();
    },
    tweet: async (_: unknown, { id }: { id: string }) => {
      return TweetRepository.findById(id);
    },
  },
  Tweet: {
    creator: (tweet: Tweet) => ({ __typename: 'User', id: tweet.userId }),
  },
  User: {
    tweets: async (user: User) => {
      return TweetRepository.findUserTweets(user.id);
    },
  },
};
