import React from 'react';
import PropTypes from 'prop-types';

import { ProductList } from './ProductList'


const BasketComponent = ({ basket, getData, isLoading, hasError }) =>
  <div className="mdc-layout-grid mdc-layout-grid">
    <div className="mdc-layout-grid__cell--span-12">
      <h1>{`Your basket contains ${basket.length} item(s)`}</h1>

    </div>
    <div className="mdc-layout-grid__inner">
      <div className={`mdc-layout-grid__cell--span-${!basket.length > 1 ? '12' : '6'}`}>
        { hasError &&
          <h3 className="mdc-typography--headline3 has-error">It seems that something went wrong <span role="img" aria-label="explosion">💥</span></h3> }
        {
          isLoading &&
            <div role="progressbar" className="mdc-linear-progress">
              <div className="mdc-linear-progress__buffering-dots"></div>
            </div>
        }
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
                onClick={getData}
              >
                Load cart
              </button>
            </div>
        }
      </div>
      {
        basket.length > 1 &&
        <div className="mdc-layout-grid__cell--span-6">
          <button
            className="mdc-button mdc-button--raised"
          >
            Go to checkout
          </button>
          &nbsp;
          <button
            disabled={true}
            className="mdc-button mdc-button--outlined"
          >
            Emty basket
          </button>
        </div>
      }
    </div>
  </div>

BasketComponent.propTypes = {
  basket: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired
}

export {
  BasketComponent
}