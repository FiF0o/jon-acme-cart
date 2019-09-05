import React from 'react';
import ReactDOM from 'react-dom';
import BasketContainer from './containers/BasketContainer'

import { Provider } from 'react-redux'
import { store } from './store'

import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

// require('dotenv').config();

console.log('running application in:', process.env.NODE_ENV)

ReactDOM.render(
  <Provider store={store}>
    <BasketContainer />
  </Provider>,
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
