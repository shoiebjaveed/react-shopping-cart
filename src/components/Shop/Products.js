import { fakeData } from './fakeData';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {fakeData.map((product) => (
          <ProductItem
          key = {product.id}
          id = {product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          quantity={product.quantity}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
