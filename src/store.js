import { createStore } from 'redux';

import reducers from './reducers';
import {initialState} from './initialState';

export const store = createStore(
  reducers,
  initialState
)