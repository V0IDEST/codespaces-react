import styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";
import { Plus, Minus, Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function Cart() {
  const { 
    cart, 
    updateQtyCart, 
    clearCart, 
    removeFromCart, 
    getTotalPrice, 
    getTotalItems 
  } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const handleCheckout = () => {
    alert(`Checkout realizado! Total: ${formatPrice(getTotalPrice())}`);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.emptyCart}>
          <ShoppingCart size={64} className={styles.emptyCartIcon} />
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione alguns produtos incríveis ao seu carrinho!</p>
          <Link to="/" className={styles.continueShopping}>
            <ArrowLeft size={20} />
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHeader}>
        <h1>Seu Carrinho</h1>
        <p>{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'}</p>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <div className={styles.productImage}>
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>
                  {product.description.length > 60 
                    ? product.description.substring(0, 60) + "..."
                    : product.description
                  }
                </p>
                <span className={styles.productPrice}>
                  {formatPrice(product.price)}
                </span>
              </div>

              <div className={styles.quantitySection}>
                <div className={styles.quantityControls}>
                  <button 
                    className={styles.quantityBtn}
                    onClick={() => updateQtyCart(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className={styles.quantity}>{product.quantity}</span>
                  <button 
                    className={styles.quantityBtn}
                    onClick={() => updateQtyCart(product.id, product.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  <span>Total: {formatPrice(product.price * product.quantity)}</span>
                </div>
              </div>

              <button 
                className={styles.removeBtn}
                onClick={() => removeFromCart(product.id)}
                title="Remover item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <div className={styles.summaryCard}>
            <h3>Resumo do Pedido</h3>

            <div className={styles.summaryRow}>
              <span>Subtotal ({getTotalItems()} itens):</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Frete:</span>
              <span className={styles.freeShipping}>Grátis</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.summaryRow + ' ' + styles.total}>
              <span>Total:</span>
              <span className={styles.totalPrice}>{formatPrice(getTotalPrice())}</span>
            </div>

            <div className={styles.actionButtons}>
              <button 
                className={styles.checkoutBtn}
                onClick={handleCheckout}
              >
                Finalizar Compra
              </button>

              <button 
                className={styles.clearBtn}
                onClick={clearCart}
              >
                Limpar Carrinho
              </button>

              <Link to="/" className={styles.continueBtn}>
                <ArrowLeft size={16} />
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}