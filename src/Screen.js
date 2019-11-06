import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/header';
import Login from './components/login';
import Episodes from './components/episodes';
import Characters from './components/characters';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './css/App.scss';

const AUTH_QUERY = gql`
  query AuthQuery {
    authenticated @client
  }
`;

const Screen = () => {
  const { data } = useQuery(AUTH_QUERY);

  return (
    <React.Fragment>
      <div className='App'>
        <Router>
          <Switch>
            {!data.authenticated ? (
              <div className='loginContainer'>
                <Route exact path='/login' component={Login} />
                <Redirect from='/' to='/login' />
              </div>
            ) : (
              <React.Fragment>
                <div className='headerContainer'>
                  <Header />
                </div>
                <div className={`container`}>
                  <Route exact path='/episodes' component={Episodes} />
                  <Route exact path='/characters' component={Characters} />
                  <Redirect from='/' to='/episodes' />
                </div>
              </React.Fragment>
            )}
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default Screen;
