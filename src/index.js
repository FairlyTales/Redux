import './styles.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  increment,
  decrement,
  asyncIncrement,
  changeTheme,
} from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
  rootReducer,
  // composeWithDevTools() applies Redux dev tools
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  store.dispatch(changeTheme(newTheme));
});

// when we are subscribing we are basically telling that subscriber function (function which
// we pass a callback to store.subscribe()) should be executed after the store is changed
store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;

  [addBtn, subBtn, asyncBtn].forEach(
    btn => (btn.disabled = state.theme.disabled),
  );
});

// initial dispatch to set the initial store state
store.dispatch({ type: '__INIT__' });
