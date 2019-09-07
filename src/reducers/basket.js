import { FETCHED_DATA, CLEAR } from "../actions/actionTypes";
import { initialState } from '../initialState'

const basket = (state = initialState.basket, action) => {
  const { type, data } = action;

  switch (type) {
    case FETCHED_DATA:
      return [
        ...data
      ]
    case CLEAR:
        return []
    default:
      return state
  }
}

export default basket