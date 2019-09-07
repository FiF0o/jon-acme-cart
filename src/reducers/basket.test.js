import basket from './basket'
import { initialState } from '../initialState'
import { FETCHED_DATA } from "../actions/actionTypes";


describe('BasketReducer', () => {
  it('should return default state', () => {
    expect(basket(undefined, [])).toEqual(initialState.basket)
  })
  
  it(`should handle ${FETCHED_DATA} case`, () => {
    const expectedAction = {
      type: FETCHED_DATA,
      data: [{}]
    }
    const expectedState = expectedAction.data
    expect(basket([], expectedAction)).toEqual(expectedState)
  })
})