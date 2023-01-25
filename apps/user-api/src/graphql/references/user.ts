import { User } from '../../models';
import { UserRepository } from '../../repositories';

export function resolveUserReference(id: string): Promise<User | null> {
  return UserRepository.findById(id);
}
