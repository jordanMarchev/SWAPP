import React, { useState, useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { LOGIN } from './query';
import StarWarsContext from '../../context/starWars/starWarsContext';
import LoginView from './LoginView';

import './login.scss';

const Login = () => {
  const starWarsContext = useContext(StarWarsContext);
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const client = useApolloClient();
  const [addTodo] = useMutation(LOGIN, {
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
      <LoginView
        inputEmail={inputEmail}
        setEmail={setEmail}
        inputPassword={inputPassword}
        setPassword={setPassword}
        onLogin={onLogin}
        starWarsContext={starWarsContext}
      />
    </div>
  );
};

export default Login;
