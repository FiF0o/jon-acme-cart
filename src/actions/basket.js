import { FETCHING_DATA, FETCHED_DATA, ERROR, CLEAR, DISCOUNT } from './actionTypes'
import getAllItems from '../api/getAllItems';


export const fetchingData = () => ({
  type: FETCHING_DATA
})

export const fetchedData = data => ({
  type: FETCHED_DATA,
  data
})

export const getData = (endPoint) => (dispatch) => {
  dispatch(fetchingData())
  return getAllItems(endPoint)
    .then(data =>
      dispatch(fetchedData(data))
    )
    .catch(_ => dispatch({type: ERROR}))
}

export const clearBasket = () => ({
  type: CLEAR
})

export const checkDiscount = (data) => ({
  type: DISCOUNT,
  data
})