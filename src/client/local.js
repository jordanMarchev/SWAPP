import { loader } from 'graphql.macro';

// const STAR_FRAGMENT = {};

export const typeDefs = loader('./local-schema.gql');

// const getStarId = (id, getCacheKey) =>
//   getCacheKey({
// __typename: 'Star'
//   });
//
// export const resolver = {};
