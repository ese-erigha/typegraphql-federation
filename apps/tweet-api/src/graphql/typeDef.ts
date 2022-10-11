import { gql } from 'apollo-server-core';

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
