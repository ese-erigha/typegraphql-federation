import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    username: String!
    name: String!
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation {
    createUser(userPayload: UserPayload): User
  }
  input UserPayload {
    username: String!
    name: String!
  }
`;
