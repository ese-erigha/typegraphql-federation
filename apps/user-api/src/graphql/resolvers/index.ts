import { UserRepository } from '../../repositories';

export const resolvers = {
  Query: {
    users: async () => {
      return UserRepository.findAll();
    },
    user: async (_: unknown, { id }: { id: number }) => {
      return UserRepository.findById(id);
    },
  },
  User: {
    __resolveReference: async (ref: { id: number }) => {
      return UserRepository.findById(ref.id);
    },
  },
  Mutation: {
    createUser: async (_: unknown, { userPayload }: { userPayload: { username: string; name: string } }) => {
      return UserRepository.createUser(userPayload);
    },
  },
};
