import basket from './basket'
import { combineReducers } from 'redux';
import { FETCHING_DATA, ERROR } from "../actions/actionTypes";



// TODO move basket thing reducers into one perhaps, would make more sense and defer computation logic in the container
// with selector functions
const reducers = combineReducers({
  basket,
  isLoading: (state=false, action) => action.type === FETCHING_DATA ? true : false,
  hasError: (state=false, action) => action.type === ERROR ? true : false
});

export default reducers