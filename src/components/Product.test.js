import React from 'react'
import { mount } from 'enzyme'

import { Product } from './Product'

describe(`<Product /> component`, () => {
  it('should render correctly', () => {
    const props = {
      productCode: 'ABC',
      name: 'name',
      price: 1,
      productImg: '/some/link/to/img'
    }

    const wrapper = mount(
      <Product {...props} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})