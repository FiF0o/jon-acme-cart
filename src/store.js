import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { logger } from './middlewares'

import reducers from './reducers';
import { initialState } from './initialState';

export const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)