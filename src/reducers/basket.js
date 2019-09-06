import { FETCHED_DATA } from "../actions/actionTypes";

const basket = (state = [], action) => {
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