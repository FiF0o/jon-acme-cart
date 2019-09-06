import { fetchedData, fetchingData } from './basket'

import { FETCHING_DATA, FETCHED_DATA } from './actionTypes'



describe('basket actions', () => {

  it('should create an action when fetching the data', () => {
    const expectedAction = {
      type: FETCHING_DATA
    }
    expect(fetchingData()).toEqual(expectedAction)
  })

  it('should create an action when the data has been fetched', () => {
    const data = {
      foo: 'bar'
    }
    const expectedPayload = {
      type: FETCHED_DATA,
      data
    }
    expect(fetchedData(data)).toEqual(expectedPayload)
  })

})