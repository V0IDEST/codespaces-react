import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../service/CartContext";

export function Cart() {
  const { uniqueProducts, removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Shopping Cart</h2>
      {uniqueProducts.length === 0 ? (
        <div className={styles.emptyContainer} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
          <p className={styles.empty}>Your cart is empty</p>
          <p className={styles.emptyMessage}>Adicione produtos ao carrinho para continuar.</p>
        </div>
      ) : (
        <>
          <ul className={styles.cartList}>
            {uniqueProducts.map((product) => (
              <li key={product.id}>
                <div className={styles.cartItem}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <div className={styles.qtyControls}>
                    <button
                      onClick={() => removeFromCart(product)}
                      disabled={product.qty === 1}
                    >
                      -
                    </button>
                    <span className={styles.qty}>{product.qty}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                  <p className={styles.price}>
                    ${(product.price * product.qty).toFixed(2)}
                  </p>
                  <button
                    className={styles.removeBtn}
                    onClick={() => {
                      for (let i = 0; i < product.qty; i++) {
                        removeFromCart(product);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.checkout}>
            <h1>Resumo:</h1>
            <ul>
              {uniqueProducts.map((product) => (
                <li key={product.id} className={styles.summaryItem}>
                  <strong>{product.title}</strong> — {product.qty}x — $
                  {(product.price * product.qty).toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>
              Total: $
              {uniqueProducts
                .reduce(
                  (total, product) => total + product.price * product.qty,
                  0
                )
                .toFixed(2)}
            </h3>
            <button className={styles.continueBtn}>Continuar</button>
          </div>
        </>
      )}
    </div>
  );
}
