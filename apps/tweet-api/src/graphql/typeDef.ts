import { gql } from 'apollo-server';

// export const typeDefs = gql`
//   extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])
//   type Tweet {
//     id: ID!
//     text: String!
//     creator: User
//   }
//   extend type User @key(fields: "id") {
//     id: ID! @external
//     tweets: [Tweet]
//   }
//   extend type Query {
//     tweet(id: ID!): Tweet
//     tweets: [Tweet]
//   }
// `;

export const typeDefs = gql`
  type Tweet {
    id: ID!
    text: String!
    creator: User
  }
  extend type User @key(fields: "id") {
    id: ID! @external
    tweets: [Tweet]
  }
  extend type Query {
    tweet(id: ID!): Tweet
    tweets: [Tweet]
  }
`;
