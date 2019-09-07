import { FETCHED_DATA } from "../actions/actionTypes";
import { initialState } from '../initialState'

const basket = (state = initialState.basket, action) => {
  const { type, data } = action;

  switch (type) {
    case FETCHED_DATA:
      return [
        ...data
      ]
    default:
      return state
  }
}

export default basket