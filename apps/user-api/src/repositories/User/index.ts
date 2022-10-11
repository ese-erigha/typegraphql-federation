import { User } from '../../models';
import { users } from '../../data';

export class UserRepository {
  static async findById(id: number): Promise<User | null> {
    const user = users.find(user => user.id === id);
    return await Promise.resolve(user || null);
  }

  static async findAll(): Promise<Array<User>> {
    return await Promise.resolve(users);
  }

  static async createUser({ name, username }: { name: string; username: string }): Promise<User> {
    const lastId = users[users.length - 1]?.id || 0;
    const newUser = { id: lastId + 1, name, username };
    users.push(newUser);
    return await Promise.resolve(newUser);
  }
}
