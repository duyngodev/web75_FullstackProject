import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import { addToCart, resetQuantity, toggleAddedToCart } from './actions';

const mapStateToProps = (state) => ({
  quantity: state.singleProduct.quantity,
  isAddedToCart: state.singleProduct.isAddedToCart,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (productToStore) => dispatch(addToCart(productToStore)),
  resetQuantity: () => dispatch(resetQuantity()),
  toggleAddedToCart: () => dispatch(toggleAddedToCart()),
});

const SingleProductContainer = connect(mapStateToProps, mapDispatchToProps)(SingleProduct);

export default SingleProductContainer;