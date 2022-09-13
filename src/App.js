import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from '../src/components/UI/notification/Notification'
import { fetchCartData, sendCartData } from './store/cart-action';

let initial = true;

function App() {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.notification.visible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(stata => stata.notification.notification)
  const check = useSelector(stata => stata.notification.visible)

  useEffect(() => {
    dispatch(fetchCartData())
  },[dispatch, check]);

  useEffect(() => {
    if(initial) {
      initial = false
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch]);



  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message} />}
      <Layout>
        {visible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
