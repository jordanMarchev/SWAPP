import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';

import CharacterCard from '../common/characterCard';
import Button from '../common/button';
import { GET_EPISODE } from './query';

import './episode.scss';

const Episode = ({ history, match }) => {
  const { data, loading, error, fetchMore } = useQuery(GET_EPISODE, {
    variables: { id: match.params.episodeId, first: 5 }
  });
  const client = useApolloClient();

  if (loading) return <div>Loading</div>;
  if (error) {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });

    return <div>Error</div>;
  }
  const { title, image, director, releaseDate, openingCrawl } = data.episode;

  let allPeople = data.episode.people.edges;
  const onLoadMore = () => {
    const cursor = allPeople[allPeople.length - 1].cursor;

    fetchMore({
      variables: { first: 5, after: cursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        return {
          episode: {
            ...episode,
            people: {
              ...episode.people,
              edges: [...prev.episode.people.edges, ...episode.people.edges]
            }
          }
        };
      }
    });
  };

  return (
    <div className='episodeContainer'>
      <div className='filmTitle'>
        <CharacterCard name={title} img={image} />
      </div>
      <div className='filmInfo'>
        <div>
          <p className='openingCrawl'>{openingCrawl}</p>
          <p>
            Director: <span>{director} </span>
          </p>
          <p>
            Release Data: <span>{releaseDate} </span>
          </p>
        </div>
      </div>
      <div className='filmActors'>
        {allPeople.map(characterData => {
          const { id, name, image } = characterData.node;

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
      <div className='loadMore'>
        <Button onClick={onLoadMore} text={'Load More'} />
      </div>
    </div>
  );
};

export default Episode;
