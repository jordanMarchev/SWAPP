import gql from 'graphql-tag';

export const AUTH_QUERY = gql`
  query AuthQuery {
    authenticated @client
  }
`;
