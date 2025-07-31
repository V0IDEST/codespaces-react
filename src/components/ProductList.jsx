import styles from "./ProductList.module.css";
import { Product } from "./Product";
import { useContext } from "react";
import { CartContext } from "../service/CartContext";
import SearchBar from "./SearchBar";
import { Package, AlertCircle } from "lucide-react";

export function ProductList() {
  const { filteredProducts, loading, error, searchTerm, selectedCategory } = useContext(CartContext);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Carregando produtos incríveis...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorContainer}>
          <AlertCircle size={48} className={styles.errorIcon} />
          <h2>Ops! Algo deu errado</h2>
          <p>Erro ao carregar produtos: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className={styles.retryButton}
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Nossos Produtos</h1>
        <p>Descubra produtos incríveis com os melhores preços</p>
      </div>

      <SearchBar />

      {searchTerm || selectedCategory !== "all" ? (
        <div className={styles.filterInfo}>
          <p>
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            {searchTerm && ` para "${searchTerm}"`}
            {selectedCategory !== "all" && ` na categoria "${selectedCategory}"`}
          </p>
        </div>
      ) : null}

      {filteredProducts.length === 0 ? (
        <div className={styles.noProducts}>
          <Package size={64} className={styles.noProductsIcon} />
          <h2>Nenhum produto encontrado</h2>
          <p>
            {searchTerm || selectedCategory !== "all" 
              ? "Tente ajustar seus filtros de busca" 
              : "Não há produtos disponíveis no momento"
            }
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}