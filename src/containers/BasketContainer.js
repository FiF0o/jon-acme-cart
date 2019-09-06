import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from '../actions/basket'
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
      getData,
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);