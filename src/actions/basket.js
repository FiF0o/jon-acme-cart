import { FETCHING_DATA, FETCHED_DATA, ERROR, CLEAR } from './actionTypes'
import getAllItems from '../api/getAllItems';


export const fetchingData = () => ({
  type: FETCHING_DATA
})

export const fetchedData = data => ({
  type: FETCHED_DATA,
  data
})

export const getData = () => (dispatch) => {
  dispatch(fetchingData())
  return getAllItems('Normal')
    .then(data =>
      dispatch(fetchedData(data))
    )
    .catch(_ => dispatch({type: ERROR}))
}

export const clearBasket = () => ({
  type: CLEAR
})