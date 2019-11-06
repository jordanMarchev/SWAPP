import React, { useState } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import Input from '../common/input';
import Button from '../common/button';

import { gql } from 'apollo-boost';

import './login.scss';

const ADD_TODO = gql`
  mutation Login($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const client = useApolloClient();
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: ({ signIn }) => {
      localStorage.setItem('token', signIn.token);
      client.writeData({ data: { authenticated: true } });
    }
  });

  const onLogin = () => {
    addTodo({ variables: { email: inputEmail, password: inputPassword } });
  };

  return (
    <div className='login'>
      <div className='loginLogo'>
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
              // inputType={'password'}
            />
          </div>
          <div className='loginButton'>
            <Button text={'Login'} onClick={onLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
