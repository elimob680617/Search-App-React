import styles from "./productItem.module.css";
import { BiTrash } from "react-icons/bi";

const ProductItem = ({
  product,
  onIncrement,
  onChange,
  onDecrement,
  onDelete,
}) => {
  return (
    <div className={styles.product}>
      <p>product name: {product.title}</p>
      <p>price: {product.price}</p>

      <span className={styles.value}>{product.quantity}</span>

      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}

      <button
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>

      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ProductItem;
