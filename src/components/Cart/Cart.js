import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import Modal from '../UI/modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartProducts = useSelector(state => state.cart.cartItems)



  return (
    <Modal>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
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
