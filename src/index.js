import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'

import { Provider } from 'react-redux'
import { store } from './store'

import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

console.log('running application in:', process.env.NODE_ENV)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );

if (window.Cypress) {
  window.store = store
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
