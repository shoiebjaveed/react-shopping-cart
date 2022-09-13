import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { notificationActions } from '../../store/notificationSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const total = useSelector(state => state.cart.totalQuantity)

  const cartToggleHandler = () => {
    dispatch(notificationActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
