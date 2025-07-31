import React, { useContext } from "react";
import { CartContext } from "../service/CartContext";
import { Search, X } from "lucide-react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories } = useContext(CartContext);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <Search className={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button 
            onClick={handleClearSearch}
            className={styles.clearButton}
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className={styles.categoryFilter}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="all">Todas as Categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;