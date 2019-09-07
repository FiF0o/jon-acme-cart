const fs = require('fs')
const path = require('path')

const apiData = [
  fs.readFileSync(
    path.resolve(__dirname, '../../../server/api/db.json'),
    'utf-8'
  )
]

export const expectedData = [...JSON.parse(apiData).basketNormal]

export default {
  get: jest.fn(() => Promise.resolve({data: expectedData}))
}