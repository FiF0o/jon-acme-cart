import React from 'react'
import { mount, shallow } from 'enzyme'

import { BasketComponent } from './BasketComponent'



describe('<BasketComponent /> component', () => {
  let wrapper, props;

  describe('without items', () => {
    beforeEach(() => {
      props = {
        basket: [],
        getData: jest.fn(),
        isLoading: false,
        hasError: false,
      }

      wrapper = mount(
        <BasketComponent {...props} />
      )
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a spinner when isLoading is true', () => {
      expect(wrapper.find('.mdc-linear-progress').length).toEqual(0)
      wrapper.setProps({ isLoading: true })
      expect(wrapper.find('.mdc-linear-progress').length).toEqual(1)
    })

    it('should render an error when hasError is true', () => {
      expect(wrapper.find('.has-error').length).toEqual(0)
      wrapper.setProps({ hasError: true })
      expect(wrapper.find('.has-error').length).toEqual(1)
    })


    it('should call getData() when the button is clicked', () => {
      const mock = props.getData
      expect(mock).not.toHaveBeenCalled()
      // getData() is the only button present on the page when the cart is empty
      wrapper.find('button').simulate('click')
      expect(mock).toHaveBeenCalled()
    })
  })

  describe('with items', () => {
    it('should render a list of items when baskt contains items', () => {
      const props = {
        basket: [{}, {}],
        getData: () => {},
        isLoading: false,
        hasError: false
      }
      const wrapper = shallow(<BasketComponent {...props} />)
      expect(wrapper.find('ProductList').length).toBe(1)
    })
  })

})