import { gql } from 'apollo-boost';

export const GET_EPISODES = gql`
  query getEpisods($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          openingCrawl
          image
        }
      }
    }
  }
`;
