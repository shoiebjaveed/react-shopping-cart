import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const visible = useSelector(state => state.cart.visible)
  
  return (
    <Layout>
      {visible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
