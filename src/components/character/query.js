import { gql } from 'apollo-boost';

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!, $first: Int, $after: String) {
    person(id: $id) {
      name
      height
      image
      mass
      species {
        name
      }
      homeworld {
        name
      }
      starships(first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            image
            name
          }
        }
      }
    }
  }
`;
