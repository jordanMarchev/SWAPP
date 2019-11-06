import React, { useReducer } from 'react';
import StarWarsContext from './starWarsContext';
import StarWarsReducer from './starWarsReducer';
import { addToken } from './actions';

const StarWarsState = props => {
  const initialState = {
    base: 'ETH',
    token: ''
  };

  const [state, dispatch] = useReducer(StarWarsReducer, initialState);

  const newToken = token => dispatch(addToken(token));

  return (
    <StarWarsContext.Provider
      value={{
        base: state.base,
        token: state.token,

        //actions
        newToken
      }}
    >
      {props.children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsState;
