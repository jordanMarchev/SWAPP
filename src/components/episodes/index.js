import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import EpisodeCard from '../common/episodeCard';
import { GET_EPISODES } from './query';

import './episodes.scss';

const Episodes = ({ history }) => {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { first: 8 }
  });
  const client = useApolloClient();

  if (loading) return <div>Loading</div>;
  if (error) {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });

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
              <EpisodeCard
                id={id}
                title={title}
                p={newOpening}
                img={image}
                history={history}
              />
            </React.Fragment>
          );
        });
      })}
    </div>
  );
};

export default Episodes;
