import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData, clearBasket, checkDiscount } from '../actions/basket'
import { BasketComponent } from '../components/BasketComponent'
import { sumAmount } from '../rules/prices';

// TODO Refactor later, maybe move totalPrice in basket reducer, we wanted to share the totalPrice across the app for now
const mapStateToProps = ({ basket, isLoading, hasError }) => ({
  basket,
  isLoading,
  totalPrice: sumAmount(basket),
  hasError
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
      getData: (endpoint) => getData(endpoint),
      clearBasket: () => clearBasket(),
      checkDiscount: (list) => checkDiscount(list)
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);