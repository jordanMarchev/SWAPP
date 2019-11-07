import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import CharacterCard from '../common/characterCard';
import { GET_CHARACTER } from './query';

import './character.scss';

const Character = ({ history, match }) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id: match.params.characterId, first: 5 }
  });

  if (loading) return <div>Loading</div>;
  if (error) {
    return <div>Error</div>;
  }
  const {
    height,
    image,
    mass,
    name,
    homeworld,
    species,
    starships
  } = data.person;

  return (
    <div className='character'>
      <div className='characterTitle'>
        <span>{name}</span>{' '}
      </div>
      <div className='characterInfo'>
        <div className='actorInfo'>
          <div className='actorInfoContainer'>
            <div className='actorName'>
              {' '}
              <span>{name}</span>
            </div>
            <div className='actorImage'>
              <img src={image} width={'100%'} alt={name} />
            </div>
            <div className='actorThings'>
              <p>
                Height: <span>{height}</span>
              </p>
              <p>
                Weight: <span>{mass}</span>
              </p>
              <p>
                Species: <span>{species.name}</span>
              </p>
              <p>
                Home World: <span>{homeworld.name}</span>
              </p>
            </div>
          </div>
        </div>
        <div className='actorStarships'>
          <div className='pilotedStarships'>
            <span>Piloted Starships</span>
          </div>
          <div className='starships'>
            {starships.edges.map(starshipsData => {
              const { id, name, image } = starshipsData.node;

              return (
                <React.Fragment key={id}>
                  <CharacterCard
                    id={id}
                    img={image}
                    name={name}
                    history={history}
                    nav={'starships'}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
