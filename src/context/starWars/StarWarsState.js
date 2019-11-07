import React, { useReducer } from 'react';
import StarWarsContext from './starWarsContext';
import StarWarsReducer from './starWarsReducer';
import { toggleTheme } from './actions';

const StarWarsState = props => {
  const initialState = {
    isLightTheme: true
  };

  const [state, dispatch] = useReducer(StarWarsReducer, initialState);

  const changeTheme = () => dispatch(toggleTheme());

  return (
    <StarWarsContext.Provider
      value={{
        isLightTheme: state.isLightTheme,

        //actions
        changeTheme
      }}
    >
      {props.children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsState;
