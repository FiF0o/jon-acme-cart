
const fs = require('fs')
const path = require('path')

const getAllItemsMock = jest.fn()
  .mockImplementation(expectedPayload =>
    new Promise((resolve, reject) =>
      expectedPayload ? resolve(expectedPayload) : reject(new Error('api error'))
    )
  )


describe('Web API', () => {
  describe('getAllItems', () => {
    it('should', (done) => {
      const apiData = [
        fs.readFileSync(
          path.resolve(__dirname, '../../server/api/db.json'),
          'utf-8'
        )
      ]
      const expectedBasket = [...JSON.parse(apiData).basket]

      getAllItemsMock(expectedBasket)
        .then(data =>
          expect(data).toContain(expectedBasket)
        )
      done()
    })
  })
})