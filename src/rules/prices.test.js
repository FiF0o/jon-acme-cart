import { isPromoStrawberries, applyDiscount, sumAmount } from './prices';

describe('rules for prices', () => {
  let baseBasket;

  beforeEach(() => {
    baseBasket = [
      {
        productCode: 'SR1',
        name: 'Strawberries',
        price: 5
      },
      {
        productCode: 'SR1',
        name: 'Strawberries',
        price: 5
      }
    ]
  })
  describe('isPromoStrawberries', () => {
    it(`should return false when the basket has less than 3 'SR1' productCode`, () => {
      expect(isPromoStrawberries(baseBasket)).toBe(false)
    })

    it(`should return true when the basket contains 3 or more 'SR1' strawberries`, () => {
      const strawberriesBasket = [
        ...baseBasket,
        {
          productCode: 'SR1',
          name: 'Strawberries',
          price: 5
        }
      ]
      expect(isPromoStrawberries(strawberriesBasket)).toBe(true)
    })
  })

  describe('applyDiscount', () => {
    it('should apply the given reduction on the given product code for a list of items', () => {
      const expectedDiscount = 1
      const discountOnStrawberries = applyDiscount('SR1', expectedDiscount)
      const expectedItems = [
        {
          productCode: 'SR1',
          name: 'Strawberries',
          price: 4
        },
        {
          productCode: 'SR1',
          name: 'Strawberries',
          price: 4
        }
      ]
      const reducedBasket = discountOnStrawberries(baseBasket)
      expect(reducedBasket.length).toEqual(2)
      expect(reducedBasket).toEqual(expectedItems)
      expect(reducedBasket[0].price).toEqual(baseBasket[0].price - expectedDiscount)
      expect(reducedBasket[1].price).toEqual(baseBasket[1].price - expectedDiscount)
    })
  })

  describe('sumAmount', () => {
    it('should sum all the item prices together', () => {
      const listOfItems = [
        {
          productCode: 'SR1',
          name: 'Strawberries',
          price: 4
        },
        {
          productCode: 'SR1',
          name: 'Strawberries',
          price: 4
        }
      ]

      expect(sumAmount(listOfItems)).toEqual(8)
    })
  })
  
})