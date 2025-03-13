import { productionConfig } from "../productionConfig";
import Product from "./Product";

function Products() {
  return (
    <div>
      {productionConfig.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default Products;
