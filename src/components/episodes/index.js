import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import EpisodeCard from '../common/episodeCard';
import './episodes.scss';

const GET_DOG_PHOTO = gql`
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

const Episodes = ({ history }) => {
  const { data, loading, error } = useQuery(GET_DOG_PHOTO, {
    variables: { first: 8 }
  });

  if (loading) return <div>Loading</div>;
  if (error) {
    localStorage.removeItem('token');
    history.push('/login');

    return <div>Error</div>;
  }

  return (
    <div className='episodesContaner'>
      {Object.values(data).map((network, i) => {
        return Object.values(network.edges).map((movieData, i) => {
          const { id, title, openingCrawl, image } = movieData.node;
          const newOpening = openingCrawl.substring(0, 170) + '...';

          return (
            <React.Fragment key={id}>
              <EpisodeCard title={title} p={newOpening} img={image} />
            </React.Fragment>
          );
        });
      })}
    </div>
  );
};

export default Episodes;
