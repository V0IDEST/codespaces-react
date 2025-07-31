import React, { useContext } from "react";
import { CartContext } from "../service/CartContext";
import { Link } from "react-router";
import { Package, ArrowRight } from "lucide-react";
import styles from "./CategoryPage.module.css";

function CategoryPage() {
  const { categories, products, setSelectedCategory } = useContext(CartContext);

  const getCategoryProductCount = (category) => {
    return products.filter(product => product.category === category).length;
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Categorias</h1>
        <p>Explore nossos produtos por categoria</p>
      </div>

      <div className={styles.categoriesGrid}>
        <Link 
          to="/" 
          className={styles.categoryCard}
          onClick={() => handleCategoryClick("all")}
        >
          <div className={styles.categoryIcon}>
            <Package size={32} />
          </div>
          <h3>Todas as Categorias</h3>
          <p>{products.length} produtos</p>
          <ArrowRight className={styles.arrowIcon} size={20} />
        </Link>

        {categories.map((category) => (
          <Link
            key={category}
            to="/"
            className={styles.categoryCard}
            onClick={() => handleCategoryClick(category)}
          >
            <div className={styles.categoryIcon}>
              <Package size={32} />
            </div>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <p>{getCategoryProductCount(category)} produtos</p>
            <ArrowRight className={styles.arrowIcon} size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;