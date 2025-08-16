import styles from "./Product.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../service/CartContext";

export function Product({ product }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const handleQtyChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQty(value);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, qty });
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productDetails}>
          <span className={styles.productPrice}>${product.price}</span>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={handleQtyChange}
            className={styles.productQtyInput}
          />
        </div>
        <button
          className={styles.productButton}
          onClick={handleAddToCart}
        >
          Add {qty} to Cart
        </button>
      </div>
    </div>
  );
}