import React, { Component } from 'react';
import getAllItems from './api/getAllItems'
import { ProductList } from './components/ProductList'
// Making it a stateful component so we can use the react lifecyles to trigger async events for now

class App extends Component {

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
  constructor() {
    super()
    this.state = {
      basket: []
    }
  }

  loadBasket() {
    return getAllItems()
      .then(data => this.setState({ basket: data }))
  }

  render() {
    const { basket } = this.state
    const hasBasket = basket.length > 1

    return (
      <div>
        <div className="mdc-layout-grid mdc-layout-grid">
          <div className="mdc-layout-grid__cell--span-12">
            <h1>{`Your basket contains ${basket.length} item(s)`}</h1>

          </div>
          <div className="mdc-layout-grid__inner">
            <div className={`mdc-layout-grid__cell--span-${!hasBasket ? '12' : '6'}`}>
              {
                basket.length > 1 ?
                  <ProductList basket={basket} /> :
                  <div className="expand-full">
                    <h2 className="sub-heading-title">
                      Buy mooar it is empty <span role="img" aria-label="ouch emoji">🤯</span>
                    </h2>
                    &nbsp;
                    <button
                      className="mdc-button mdc-button--outlined"
                      onClick={() => this.loadBasket()}
                    >
                      Load cart
                    </button>
                  </div>
              }
            </div>
            {
              hasBasket &&
              <div className="mdc-layout-grid__cell--span-6">

                <button
                  className="mdc-button mdc-button--raised"
                >
                  Go to checkout
                </button>
                &nbsp;
                <button
                      className="mdc-button mdc-button--outlined"
                      onClick={() => this.setState({basket: []})}
                    >
                      Emty basket
                    </button>
              </div>

            }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
