import { gql } from 'apollo-boost';

export const GET_CHARACTERS = gql`
  query getPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          name
          image
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
