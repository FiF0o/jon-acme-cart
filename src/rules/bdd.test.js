import { sumAmount } from './prices';
import { DISCOUNT } from '../actions/actionTypes';
import { createStore } from 'redux';
import reducers from '../reducers';
import { initialState } from '../initialState';


describe('Test data', () => {
  let state, store;
  describe('Basket behaviour', () => {
    beforeEach(() => {
      state = {
        ...initialState
      }
      store = createStore(reducers, state)
    })

    describe('CASE 1 & 2: NO DISCOUNT', () => {
      it(`should not apply a discount when 'DISCOUNT' action is dispatched with a list of items containing less than 3 strawberries and return the correct price`, () => {
        const basket1 = [
          {
            productCode: "FR1",
            name: "FruitTea",
            price: 3.11,
            productImg: "/some/link"
          },
          {
            productCode: "FR1",
            name: "FruitTea",
            price: 3.11,
            productImg: "/some/link"
          }
        ]
        const expectedBasket1Price = 6.22

        expect(store.getState()).toEqual(state)
        store.dispatch({ type: DISCOUNT, data: basket1 })
        expect(store.getState().basket).toEqual([...basket1])
        expect(sumAmount(store.getState().basket)).toEqual(expectedBasket1Price)

        const basket2 = [{
          productCode: "FR1",
          name: "FruitTea",
          price: 3.11,
          productImg: "/some/link"
        },
        {
          productCode: "SR1",
          name: "Strawberries",
          price: 5.00,
          productImg: "/somelink"
        },
        {
          productCode: "FR1",
          name: "FruitTea",
          price: 3.11,
          productImg: "/some/link"
        },
        {
          productCode: "CF1",
          name: "Coffee",
          price: 11.23,
          productImg: "/some/link"
        }]

        const expectedBasket2Price = 22.45

        expect(store.getState()).toEqual({
          basket: [...basket1],
          hasError: false,
          isLoading: false
        })
        store.dispatch({ type: DISCOUNT, data: basket2 })
        expect(store.getState().basket).toEqual([...basket2])
        expect(sumAmount(store.getState().basket)).toEqual(expectedBasket2Price)


      })
    })

    describe('CASE 3: DISCOUNT', () => {
      it(`should apply a strawberry discount when 'DISCOUNT' action is dispatched with a list of items contains 3 or more strwaberries and return the correct price`, () => {
        const data = [
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 5.00,
            productImg: "/some/link"
          },
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 5.00,
            productImg: "/some/link"
          },
          {
            productCode: "FR1",
            name: "FruitTea",
            price: 3.11,
            productImg: "/some/link"
          },
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 5.00,
            productImg: "/some/link"
          }
        ]

        const expectedData = [
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 4.5,
            productImg: "/some/link"
          },
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 4.5,
            productImg: "/some/link"
          },
          {
            productCode: "FR1",
            name: "FruitTea",
            price: 3.11,
            productImg: "/some/link"
          },
          {
            productCode: "SR1",
            name: "Strawberries",
            price: 4.5,
            productImg: "/some/link"
          }
        ]
        expect(store.getState()).toEqual(state)
        store.dispatch({ type: DISCOUNT, data })
        expect(store.getState()).toEqual({
          basket: [...expectedData],
          isLoading: false,
          hasError: false
        })
        const expectedPrice = 16.61
        expect(sumAmount(store.getState().basket)).toEqual(expectedPrice)
      })
    })

  })

})