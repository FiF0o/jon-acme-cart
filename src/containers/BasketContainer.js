import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData, clearBasket } from '../actions/basket'
import { BasketComponent } from '../components/BasketComponent'


const mapStateToProps = ({ basket, totalPrice, isLoading, isPromo, hasError }) => ({
  basket,
  totalPrice,
  isLoading,
  isPromo,
  hasError
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
      getData: (endpoint) => getData(endpoint),
      clearBasket: () => dispatch(clearBasket())
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);