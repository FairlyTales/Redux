// importing constant types
import {
  CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
  INCREMENT,
} from './types';

// here we create functions which will create actions so that we wouldn't
// have to write actions from scratch each time
// it will also improve code readability since when we would want to dispatch
// something we will simply
export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function asyncIncrement() {
  return dispatch => {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch({ type: INCREMENT });
      dispatch(enableButtons());
    }, 2000);
  };
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS,
  };
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS,
  };
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}
