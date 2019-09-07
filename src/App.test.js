import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { App } from './App';

import {store} from './store'

it('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.length).toBe(1)
  expect(wrapper.find('App').length).toBe(1)
});