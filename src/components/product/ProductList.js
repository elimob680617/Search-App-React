import { useProduct, useProductAction } from "../providers/ProductsProvider";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const products = useProduct();
  const dispatch = useProductAction();

  return (
    <>
      {!products.length && <p>Go to Shopping!</p>}
      {products.length ? (
        products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={() => dispatch({ type: "remove", id: product.id })}
            onIncrement={() => dispatch({ type: "increment", id: product.id })}
            onDecrement={() => dispatch({ type: "decrement", id: product.id })}
            onChange={(e) =>
              dispatch({ type: "edit", id: product.id, event: e })
            }
          />
        ))
      ) : (
        <div>
          <h3>There is no product in the Cart!!!</h3>
        </div>
      )}
    </>
  );
};

export default ProductList;
