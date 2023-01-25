import { User } from '../../models';
import { UserRepository } from '../../repositories';

export function resolveUserReference(id: number): Promise<User | null> {
  return UserRepository.findById(id);
}
