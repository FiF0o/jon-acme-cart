import React from 'react';
import BasketContainer from './containers/BasketContainer';
 /**
  // could use the constructor here to initialise the rules(s)) but we will use a non OOP approach
  constructor(pricingRules = []) {
    this.pricingRules = pricingRules
    // fetch items here
    this.items = []
  }

  someMethod() {
    return this.pricingRules
      .map(rule => [someInitialItem, ...this.items])
      .reduce(rule => ...)
  }
 */

export const App = () =>
  <BasketContainer />