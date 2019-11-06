import { ADD_TOKEN } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
};
