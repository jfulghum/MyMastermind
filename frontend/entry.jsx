import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchMoves} from './actions/move_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.fetchMoves = fetchMoves;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

});
