import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Header from './components/header';
import Login from './components/login';
import Episodes from './components/episodes';
import Characters from './components/characters';
import Episode from './components/episode';
import Character from './components/character';
import StarWarsContext from './context/starWars/starWarsContext';

import { AUTH_QUERY } from './client/query';

import './css/App.scss';

const Screen = () => {
  const starWarsContext = useContext(StarWarsContext);
  const { data } = useQuery(AUTH_QUERY);
  const { isLightTheme } = starWarsContext;
  const theme = isLightTheme ? '' : 'dark';

  return (
    <React.Fragment>
      <div className={`App ${theme}`}>
        <Router>
          {!data.authenticated ? (
            <div className='loginContainer'>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Redirect from='/' to='/login' />
              </Switch>
            </div>
          ) : (
            <React.Fragment>
              <div className='headerContainer'>
                <Header />
              </div>
              <div className={`container`}>
                <Switch>
                  <Route exact path='/episodes' component={Episodes} />
                  <Route
                    exact
                    path='/episodes/:episodeId'
                    component={Episode}
                  />

                  <Route exact path='/characters' component={Characters} />
                  <Route
                    exact
                    path='/characters/:characterId'
                    component={Character}
                  />

                  <Redirect from='/' to='/episodes' />
                </Switch>
              </div>
            </React.Fragment>
          )}
        </Router>
      </div>
    </React.Fragment>
  );
};

export default Screen;
