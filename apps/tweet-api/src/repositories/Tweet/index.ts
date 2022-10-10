import { Tweet } from '../../models';
import { tweets } from '../../data';

export class TweetRepository {
  static async findById(id: string): Promise<Tweet | null> {
    const tweet = tweets.find(tweet => tweet.id === id);
    return Promise.resolve((tweet as unknown as Tweet) || null);
  }

  static async findAll(): Promise<Array<Tweet>> {
    return Promise.resolve(tweets as unknown as Tweet[]);
  }

  static async findUserTweets(userId: string): Promise<Array<Tweet>> {
    const userTweets = tweets.filter(tweet => tweet.userId === userId);
    return Promise.resolve(userTweets as unknown as Tweet[]);
  }
}
