import { ADD_TOKEN } from '../types';

export const addToken = token => {
  return {
    type: ADD_TOKEN,
    payload: token
  };
};
