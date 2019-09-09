import basket from './basket'
import { initialState } from '../initialState'
import { FETCHED_DATA, CLEAR, DISCOUNT } from "../actions/actionTypes";
import {CONSTANTS} from '../constants'

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

  it(`should handle ${CLEAR} case`, () => {
    const expectedState = []
    const expectedAction = {
      type: CLEAR,
    }
    expect(basket([{}], expectedAction)).toEqual(expectedState)
  })

  it(`should handle ${DISCOUNT} case`, () => {
    const expectedAction = {
      type: DISCOUNT,
      data: [{
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 5,
        productImg:"some/img"
      },
      {
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 5,
        productImg:"some/img"
      },
      {
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 5,
        productImg:"some/img"
      }]
    }

    const expectedState = [
      {
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 4.5,
        productImg:"some/img"
      },
      {
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 4.5,
        productImg:"some/img"
      },
      {
        productCode: CONSTANTS.Strawberries,
        name: "name",
        price: 4.5,
        productImg:"some/img"
      },
    ]

    expect(basket([{}], expectedAction)).toEqual(expectedState)
  })
})