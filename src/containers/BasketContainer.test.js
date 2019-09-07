import React from 'react'
import { createMockStore } from 'redux-test-utils'
import {shallow} from 'enzyme'
import BasketContainer from './BasketContainer'
import { Provider } from "react-redux"


describe('BasketContainer', () => {
  let state, store;

  beforeEach(() => {
    state = {
       basket: [{}],
       totalPrice: 0,
       isLoading: false,
       isPromo: false,
       hasError: false
     }
     store = createMockStore(state);
    }
  )


  it('should have a default state when it is initialised', () => {
    expect(store.getState()).toBe(state)
  })

  it('should render the connected component in the container', () => {
    const wrapper = shallow(
      <Provider store={store}> 
        <BasketContainer />
      </Provider>
      )
    // we are already unit testing BasketComponent (and its props)
    // so we just want to make sure that the connected component (wrapper container) node is present
    // as we don't intent to unit test connect itself
    expect(wrapper.length).toBe(1);
  })
})