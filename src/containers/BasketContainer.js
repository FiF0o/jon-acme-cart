import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData, clearBasket } from '../actions/basket'
import { BasketComponent } from '../components/BasketComponent'
import { sumAmount } from '../rules/prices';


const mapStateToProps = ({ basket, totalPrice, isLoading, isPromo, hasError }) => ({
  basket,
  isLoading,
  totalPrice: sumAmount(basket),
  isPromo,
  hasError
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
      getData: (endpoint) => getData(endpoint),
      clearBasket: () => clearBasket()
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);