import styles from "./Product.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../service/CartContext";
import { Plus, Minus, ShoppingCart, Star } from "lucide-react";

export function Product({ product }) {
  const { addToCart, updateQtyCart, cart } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = useState(false);

  // Verifica se o produto está no carrinho e sua quantidade
  const cartItem = cart.find(item => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleUpdateQuantity = (newQuantity) => {
    updateQtyCart(product.id, newQuantity);
  };

  // Função para truncar texto longo
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
        {product.discountPercentage && (
          <div className={styles.discountBadge}>
            -{Math.round(product.discountPercentage)}%
          </div>
        )}
        {quantityInCart > 0 && (
          <div className={styles.cartQuantityBadge}>
            {quantityInCart}
          </div>
        )}
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle} title={product.title}>
          {truncateText(product.title, 50)}
        </h3>

        <p className={styles.productDescription}>
          {truncateText(product.description, 80)}
        </p>

        {product.rating && (
          <div className={styles.rating}>
            <Star size={16} fill="currentColor" />
            <span>{product.rating.toFixed(1)}</span>
          </div>
        )}

        <div className={styles.priceSection}>
          <span className={styles.productPrice}>
            ${product.price.toFixed(2)}
          </span>
          {product.discountPercentage && (
            <span className={styles.originalPrice}>
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        <div className={styles.actionSection}>
          {quantityInCart > 0 ? (
            <div className={styles.quantityControls}>
              <button 
                className={styles.quantityBtn}
                onClick={() => handleUpdateQuantity(quantityInCart - 1)}
                disabled={quantityInCart <= 1}
              >
                <Minus size={16} />
              </button>
              <span className={styles.quantity}>{quantityInCart}</span>
              <button 
                className={styles.quantityBtn}
                onClick={() => handleUpdateQuantity(quantityInCart + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button 
              className={`${styles.addToCartBtn} ${isAnimating ? styles.animating : ''}`}
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} />
              Adicionar ao Carrinho
            </button>
          )}
        </div>
      </div>
    </div>
  );
}