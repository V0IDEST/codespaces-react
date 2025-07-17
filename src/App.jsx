import "./styles/theme.css";
import "./styles/global.css";
// import { MyTextList } from "./components/MyTextList";
import { MyGrid } from "./components/MyGrid";
 import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";


export default function App() {
const [cart , setCart] = useState([]);

function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }
  
  return (
    // React Fragment
    <>
      <Header cart={cart} />
      <ProductList />
    </>
  );
}