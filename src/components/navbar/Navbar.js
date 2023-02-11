import { useProduct } from "../providers/ProductsProvider";
import styles from "./navbar.module.css";

const Navbar = () => {
  const products = useProduct();
  const totalItem = products.length;
  return (
    <header className={styles.navbar}>
      <h1>Shopping App</h1>
      <span className={styles.badge}>{totalItem}</span>
    </header>
  );
};

export default Navbar;
