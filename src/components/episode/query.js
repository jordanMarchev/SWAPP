import { gql } from 'apollo-boost';

export const GET_EPISODE = gql`
  query getEpisode($id: ID!, $first: Int, $after: String) {
    episode(id: $id) {
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $after) {
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
