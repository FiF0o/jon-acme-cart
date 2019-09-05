
import React from 'react';
import { shallow } from 'enzyme';

import { ProductList } from './ProductList'
import { Product } from './Product'

describe('ProductList component', () => {
  it('should render the list of products correctly', () => {
    const basket = [
      {
        productCode: 'ABCD',
        name: 'ABC',
        price: 4,
        productImg: 'some/dummy/imgLink'
      },
      {
        productCode: 'ABC',
        name: 'ABC',
        price: 4,
        productImg: 'some/dummy/imgLink'
      }
    ]

    const wrapper = shallow(<ProductList basket={basket} />)
    expect(wrapper.find(Product).length).toBe(2)
    expect(wrapper).toMatchSnapshot()
  })
})