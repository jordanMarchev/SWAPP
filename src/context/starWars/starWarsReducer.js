import { TOGGLE_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme
      };

    default:
      return state;
  }
};
