import React from 'react';
import PropTypes from 'prop-types';

import { Product } from './Product'

// for simplicity of the exercise we say ee receive the basket directly
export const ProductList = ({ basket }) =>
  <div dataattribute="product-list">
    {
      basket.map((item, i) =>
        <Product
          key={`${item.productCode}-${i}`}
          productCode={item.productCode}
          productImg={item.productImg}
          name={item.name}
          price={item.price}
        />
      )
    }
  </div>

Product.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.instanceOf(Product)),
}