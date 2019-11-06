import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = ({ history }) => {
  const onLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <div className='header'>
      <div className='logo'>
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
