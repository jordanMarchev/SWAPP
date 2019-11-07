import React from 'react';

import { useQuery, useApolloClient } from '@apollo/react-hooks';

import CharacterCard from '../common/characterCard';
import Button from '../common/button';
import { GET_CHARACTERS } from './query';

import './characters.scss';

const Characters = ({ history }) => {
  const { data, loading, error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { first: 12 }
  });
  const client = useApolloClient();

  if (loading) return <div>Loading</div>;
  if (error) {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });

    return <div>Error</div>;
  }

  const hasNextPage = data.allPeople.pageInfo.hasNextPage;
  let allPeople = data.allPeople.edges;
  const onLoadMore = () => {
    const cursor = allPeople[allPeople.length - 1].cursor;

    fetchMore({
      variables: { first: 12, after: cursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges]
          }
        };
      }
    });
  };

  return (
    <React.Fragment>
      <div className='characterCards'>
        {allPeople.map((movieData, i) => {
          const { id, name, image } = movieData.node;

          return (
            <React.Fragment key={id}>
              <CharacterCard
                id={id}
                img={image}
                name={name}
                history={history}
                nav={'characters'}
              />
            </React.Fragment>
          );
        })}
      </div>
      {hasNextPage && (
        <div className='loadMore'>
          <Button onClick={onLoadMore} text={'Load More'} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Characters;
