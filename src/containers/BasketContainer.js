import { connect } from 'react-redux';

// actions import
import App from '../App'


const mapStateToProps = ({newItem, basket, totalPrice}) => ({
  newItem,
  basket,
  totalPrice
});

export default connect(mapStateToProps, undefined)(App);