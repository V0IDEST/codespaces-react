import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/etapa2/ProductList";
import { Cart } from "./components/etapa2/Cart";
import { Route, Routes, useNavigate } from "react-router";
import { CartProvider } from "./service/CartContext";
import React from "react";
import { Estoque } from "./components/etapa2/Estoque";
import { Header } from "./components/Header";
import { Login } from "./components/etapa2/Login";
import { Signup } from "./components/etapa2/Signup";

function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <nav className="nav-menu">
      <button onClick={() => navigate("/")}>Produtos</button>
      <button onClick={() => navigate("/cart")}>Carrinho</button>
      <button onClick={() => navigate("/stock")}>Estoque</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/signup")}>Cadastro</button>
    </nav>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Header />
      <NavigationMenu />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/stock" element={<Estoque />} />
        </Routes>
      </main>
    </CartProvider>
  );
}