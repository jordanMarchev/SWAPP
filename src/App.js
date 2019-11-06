import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client/client';

import StarWarsState from './context/starWars/StarWarsState';

import Screen from './Screen';

const App = () => {
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <StarWarsState>
          <Screen />
        </StarWarsState>
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
