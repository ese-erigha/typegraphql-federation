import { Context as KoaContext } from 'koa';
import { logger } from 'logger';

export class Context {
  /*
   * Build GraphQLContext for a Koa request.
   */
  static forKoa(_input: { ctx: KoaContext }) {
    try {
      return new Context();
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}
