import styles from "./Header.module.css";
import { Link } from "react-router";
import { ShoppingBasket, Search, Home } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";

export function Header() {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logo}>
          <Home size={24} />
          <span>ShopFácil</span>
        </Link>
      </div>

      <nav className={styles.navigation}>
        <Link to="/" className={styles.navLink}>
          Produtos
        </Link>
        <Link to="/categorias" className={styles.navLink}>
          Categorias
        </Link>
      </nav>

      <div className={styles.cartSection}>
        <Link to="/cart" className={styles.cartLink}>
          <div className={styles.cartIcon}>
            <ShoppingBasket size={24} />
            {itemCount > 0 && (
              <span className={styles.cartBadge}>{itemCount}</span>
            )}
          </div>
          <span className={styles.cartText}>Carrinho</span>
        </Link>
      </div>
    </header>
  );
}