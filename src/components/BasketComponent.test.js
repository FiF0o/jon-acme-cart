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
        clearBasket: jest.fn(),
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
      wrapper.find('[dataattribute="normal"]').simulate('click')
      expect(mock).toHaveBeenCalled()
    })
  })

  describe('with items', () => {
    let props, wrapper
    beforeEach(() => {
      props = {
        basket: [{}, {}],
        getData: jest.fn(),
        clearBasket: jest.fn(),
        isLoading: false,
        hasError: false
      }

      wrapper = shallow(<BasketComponent {...props} />)
    })

    it('should render a list of items when baskt contains items', () => {
      expect(wrapper.find('ProductList').length).toBe(1)
    })

    it('should call clearBasket() when the button is clicked', () => {
      const mock = props.clearBasket
      expect(mock).not.toHaveBeenCalled()
      wrapper.find('button.mdc-button.mdc-button--outlined').simulate('click')
      expect(mock).toHaveBeenCalled()
    })
  })

})