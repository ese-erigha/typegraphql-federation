import { User } from './user';
import { UserRepository } from '../repositories';

export function resolveUserReference(id: number): Promise<User | null> {
  return UserRepository.findById(id);
}
