import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();


  return (
    <button className={classes.button} onClick={() => dispatch(cartAction.toggleCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
