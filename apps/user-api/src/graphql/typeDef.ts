import { gql } from 'graphql-tag';

// export const typeDefs = gql`
//   extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key"])

//   type Query {
//     users: [User]
//     user(id: ID!): User
//   }

//   type Mutation {
//     createUser(userPayload: UserPayload): User
//   }

//   type User @key(fields: "id") {
//     id: ID!
//     username: String!
//     name: String!
//   }

//   input UserPayload {
//     username: String!
//     name: String!
//   }
// `;

export const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput): User
  }

  type User @key(fields: "id") {
    id: ID!
    username: String!
    name: String!
  }

  input CreateUserInput {
    username: String!
    name: String!
  }
`;
