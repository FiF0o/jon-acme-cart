import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { fetchedData, fetchingData, getData, clearBasket } from './basket'
import { FETCHING_DATA, FETCHED_DATA, CLEAR } from './actionTypes'

import axios, { expectedData } from '../api/__mocks__/axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

  it('should create an action returning the correct object when clearBasket() is called', () => {
    const expectedAction = {
      type: CLEAR
    }
    expect(clearBasket()).toEqual(expectedAction)
  })

  it('dispatches the correct actions on successful getData()', () => {

    fetch.mockResponse(
      // we use the axios mock
      axios.get()
        // response.data from axios that we pass through
        .then(({ data }) =>
          ({ data })
        )
    )
    const expectedActions = [
      { type: FETCHING_DATA },
      { type: FETCHED_DATA, data: expectedData }
    ]
    const store = mockStore({ basket: [{}] })

    return (
      store.dispatch(getData())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    )
  })

})