import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./service/CartContext";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryList from "./components/CategoryList";

const categorias = [
  "Tecnologia", "Jogos", "Educação", "Arte", "Saúde"
  // ...adicione as categorias do seu projeto
];

function App() {
  const [busca, setBusca] = useState("");

  const categoriasFiltradas = categorias.filter(cat =>
    cat.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <CartProvider>
        <Header />
        <div style={{ maxWidth: "600px", margin: "auto", padding: "40px" }}>
          <h1 style={{ textAlign: "center", color: "#4f8ef7" }}>Minha App</h1>
          <SearchBar value={busca} onChange={setBusca} />
          <CategoryList items={categoriasFiltradas} />
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes as needed */}
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;