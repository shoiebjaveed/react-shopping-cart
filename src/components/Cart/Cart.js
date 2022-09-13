import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import Modal from '../UI/modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cartSlice';

const Cart = (props) => {
  const cartProducts = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const deleteItemHandler = () => {
    dispatch(cartAction.deleteItem())
  }

  return (
    <Modal>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <button onClick={deleteItemHandler}>Clear Cart</button>
        <ul>
          {cartProducts.map((product) => (
            <CartItem key={product.id}
            item={{ id:product.id, title: product.name, quantity: product.quantity, total: product.totalPrice, price: product.price }}
          />
          ))}
        </ul>
      </Card>
    </Modal>
  );
};

export default Cart;
