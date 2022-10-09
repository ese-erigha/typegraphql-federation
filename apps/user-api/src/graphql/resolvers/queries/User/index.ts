import { Arg, Query, Resolver } from 'type-graphql';

import { User } from '../../../../models';
import { UserRepository } from '../../../../repositories';

@Resolver(_of => User)
export class UserResolver {
  @Query(_returns => User, { nullable: true })
  async user(@Arg('id') id: string) {
    return UserRepository.findById(id);
  }

  @Query(_returns => Array<User>)
  async users() {
    return UserRepository.findAll();
  }
}
