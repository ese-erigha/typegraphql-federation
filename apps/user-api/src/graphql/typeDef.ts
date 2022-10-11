import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(userPayload: UserPayload): User
  }

  type User @key(fields: "id") {
    id: ID!
    username: String!
    name: String!
  }

  input UserPayload {
    username: String!
    name: String!
  }
`;
