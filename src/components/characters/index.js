import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CharacterCard from '../common/characterCard';
import Button from '../common/button';

import './characters.scss';

const GET_DOG_PHOTO = gql`
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
    }
  }
`;

const Characters = ({ history }) => {
  const { data, loading, error, fetchMore } = useQuery(GET_DOG_PHOTO, {
    variables: { first: 12 }
  });

  let allPeople = data ? data.allPeople.edges : [];
  const onLoadMore = () => {
    const cursor = allPeople[allPeople.length - 1].cursor;

    fetchMore({
      // TODO: 2 to be a constant
      variables: { first: 2, after: cursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        console.log(allPeople.edges, '     people');
        console.log(prev.allPeople.edges);

        console.log([...allPeople.edges, ...prev.allPeople.edges]);
        return {
          allPeople: {
            ...allPeople,
            edges: [...allPeople.edges, ...prev.allPeople.edges]
          }
        };
      }
    });
  };

  if (loading) return <div>Loading</div>;
  if (error) {
    localStorage.removeItem('token');
    history.push('/episodes');
    return <div>Error</div>;
  }

  console.log(data, '   data2');

  return (
    <>
      <div className='characterCards'>
        {allPeople.map((movieData, i) => {
          const { id, name, image } = movieData.node;

          return (
            <React.Fragment key={id}>
              <CharacterCard img={image} name={name} />
            </React.Fragment>
          );
        })}
      </div>
      <div className='loadMore'>
        <Button onClick={onLoadMore} text={'Load More'} />
      </div>
    </>
  );
};

export default Characters;
