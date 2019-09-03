import { createStore, applyMiddleware } from 'redux';

import { logger } from './middlewares'

import reducers from './reducers';
import { initialState } from './initialState';

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger)
)