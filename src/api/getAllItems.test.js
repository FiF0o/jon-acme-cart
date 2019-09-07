import getAllItems from './getAllItems'
import {expectedData} from './__mocks__/axios'

  describe('Web API', () => {
    describe('getAllItems', () => {
    it('should', async () => {
      const basket = await getAllItems('')
      expect(basket).toEqual(expectedData)
    })
  })
})