import React from 'react'
import PropTypes from 'prop-types';

export const Product = ({ productCode, name, price, productImg }) => (
  <div className="mdc-card demo-basic-with-header">
    <div className="demo-card__primary">
      <h2 className="demo-card__title mdc-typography mdc-typography--headline6">{ name }</h2>
      <h3 className="demo-card__subtitle mdc-typography mdc-typography--subtitle2">{ productCode }</h3>
    </div>
    <div className="mdc-card__primary-action demo-card__primary-action" tabIndex="0">
      <div 
        className="mdc-card__media mdc-card__media--16-9 demo-card__media"
        style={{
          backgroundImage: `url(${productImg})`
        }}
        ></div>
      <div className="demo-card__secondary mdc-typography mdc-typography--body2">£{ price }</div>
    </div>
  </div>
)

Product.propTypes = {
  productCode: PropTypes.string.isRequired,
  productImg: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}