import React from 'react';

import Input from '../common/input';
import Button from '../common/button';

import './login.scss';

const LoginView = ({
  inputEmail,
  setEmail,
  inputPassword,
  setPassword,
  onLogin,
  starWarsContext
}) => {
  return (
    <>
      <div className='loginLogo' onClick={starWarsContext.changeTheme}>
        <div>SWAPP</div>
      </div>
      <div className='loginForm'>
        <div className='loginGrid'>
          <div className='email'>
            <Input
              placeholder={'Email'}
              value={inputEmail}
              onChange={setEmail}
              inputType={'email'}
            />
          </div>
          <div className='password'>
            <Input
              placeholder={'Password'}
              value={inputPassword}
              onChange={setPassword}
              inputType={'password'}
            />
          </div>
          <div className='loginButton'>
            <Button text={'Login'} onClick={onLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginView;
