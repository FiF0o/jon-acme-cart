import { combineReducers } from 'redux';

const reducers = combineReducers({
  newItem: function addNewItem(state = {}, action) { return state },
  basket: function basket(state = [], action) { return state},
  totalPrice: function totalPrice(state = 0, action) { return state }

});

export default reducers