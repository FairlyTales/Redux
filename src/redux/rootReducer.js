// importing our constants
import { combineReducers } from 'redux';
import { CHANGE_THEME, DECREMENT, ENABLE_BUTTONS, DISABLE_BUTTONS, INCREMENT } from './types';

// reducer decides how to change state depending on the action.type
// given to him
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case '__INIT__':
      return state;
    default:
      return state;
  }
}

const initialThemeState = {
  value: 'light',
  disabled: false,
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    case ENABLE_BUTTONS:
      return { ...state, disabled: false }
    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
    default:
      return state;
  }
}

// combining 2 reducers in one because createStore() can take only one reducer
// combineReducers() returns an object with all reducers
export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
