import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { notificationActions } from './store/notificationSlice';
import Notification from '../src/components/UI/notification/Notification'

let initial = true;

function App() {
  const dispatch = useDispatch()
  const visible = useSelector(state => state.cart.visible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(stata => stata.notification.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(notificationActions.addNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'sending cart data!'
      }))
      const response = await fetch('https://react-cart-3f398-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('Failed...')
      }
      dispatch(notificationActions.addNotification({
        status: 'success',
        title: 'Success..',
        message: 'sent cart data sucessfully!'
      }))


    }

    if(initial) {
      initial = false
      return;
    }
    sendCartData().catch(err => {
      dispatch(notificationActions.addNotification({
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed'
      }))
    })
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
