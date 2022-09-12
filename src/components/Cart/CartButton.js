import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.cart.cartItems)
  const cartToggleHandler = () => {
    dispatch(cartAction.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemList.length}</span>
    </button>
  );
};

export default CartButton;
