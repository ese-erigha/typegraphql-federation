import { UserRepository } from '../../../repositories';
import type { User } from '../../../models';

export const resolveUserReference = async (reference: Pick<User, 'id'>) => UserRepository.findById(reference.id);
