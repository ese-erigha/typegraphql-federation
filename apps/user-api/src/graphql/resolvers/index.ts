import { UserRepository } from '../../repositories';
import { User } from '../../models';

export const resolvers = {
  Query: {
    users: async () => {
      return UserRepository.findAll();
    },
    user: async (_: unknown, { id }: any) => {
      return UserRepository.findById(parseInt(id));
    },
  },
  User: {
    __resolveReference: async (user: User) => {
      return UserRepository.findById(user.id);
    },
  },
  Mutation: {
    createUser: async (_: unknown, { userPayload }: any) => {
      return UserRepository.createUser(userPayload);
    },
  },
};
