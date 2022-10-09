import { User } from '../../models';
import { users } from '../../data';

export class UserRepository {
  static async findById(id: string): Promise<User | null> {
    const user = users.find(user => user.id === id);
    return Promise.resolve(user || null);
  }

  static async findAll(): Promise<Array<User>> {
    return Promise.resolve(users);
  }
}
