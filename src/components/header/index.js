import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import StarWarsContext from '../../context/starWars/starWarsContext';

import './header.scss';

const Header = () => {
  const starWarsContext = useContext(StarWarsContext);
  const client = useApolloClient();

  const onLogout = () => {
    localStorage.removeItem('token');
    client.writeData({ data: { authenticated: false } });
  };
  return (
    <div className='header'>
      <div className='logo' onClick={starWarsContext.changeTheme}>
        <div>SWAPP</div>
      </div>
      <div className='rightHeader'>
        <Link to='/episodes'>
          <span className='episodes'>Episodes</span>
        </Link>
        <Link to='/characters'>
          <span className='characters'>Characters</span>
        </Link>
        <Link to='/episodes'>
          <span onClick={onLogout} className='logout'>
            Exit
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
