import { Resolver, Query, Arg } from 'type-graphql';

import { User } from '../../models';
import { UserRepository } from '../../repositories';

@Resolver(_of => User)
export class UsersResolver {
  @Query(_returns => [User])
  async users(): Promise<User[]> {
    return UserRepository.findAll();
  }

  @Query(_returns => User)
  async user(@Arg('id') id: string): Promise<User | null> {
    return UserRepository.findById(id);
  }
}
