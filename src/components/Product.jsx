import styles from "./Product.module.css";
import { useState } from "react";

export function Product({ product, addToCart }) {
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    const newQty = qty + 1;
    setQty(newQty);
    addToCart(product, newQty);
    setAdded(true);
  };

  const handleRemove = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      addToCart(product, newQty);
    } else if (qty === 1) {
      setQty(0);
      setAdded(false);
      addToCart(product, 0);
    }
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productQty}>
        <p className={styles.productPrice}>${product.price}</p>
        {added && (
          <div className={styles.productQty}>
            <button onClick={handleRemove}>-</button>
            <p>{qty}</p>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
      {!added && (
        <button
          className={styles.productButton}
          onClick={handleAdd}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}