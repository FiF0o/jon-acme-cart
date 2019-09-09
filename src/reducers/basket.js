import { FETCHED_DATA, CLEAR, DISCOUNT } from "../actions/actionTypes";
import { initialState } from '../initialState'
import { isPromoStrawberries, applyDiscount } from "../rules/prices";
import {CONSTANTS} from '../constants'



const basket = (state = initialState.basket, action) => {
  const { type, data } = action;

  switch (type) {
    case FETCHED_DATA:
      return [
        ...data
      ]
    case CLEAR:
      return []
    // We may want to apply this at the container level and use state selectors instead in the future
    // We assume that the data is normalized already
    case DISCOUNT:
      return isPromoStrawberries(data) ? [...applyDiscount(CONSTANTS.Strawberries, 0.5)(data)] : [...data]
    default:
      return state
  }
}

export default basket