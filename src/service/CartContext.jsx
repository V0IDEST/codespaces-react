import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  // Products and loading/error states
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  searchTerm: "",
  selectedCategory: "all",
  categories: [],
  // Cart management functions
  cart: [],
  addToCart: () => {},
  updateQtyCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  getTotalItems: () => {},
  getTotalPrice: () => {},
  // Search and filter functions
  setSearchTerm: () => {},
  setSelectedCategory: () => {},
});

export function CartProvider({ children }) {
  // Fetch products from the API
  const apiUrl = "https://dummyjson.com/products?limit=50";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Falha ao carregar produtos");
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);

        // Extract unique categories
        const uniqueCategories = [...new Set(data.products.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products based on search term and category
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  // Cart state management with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("shopping-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Erro ao carregar carrinho do localStorage:", error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("shopping-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Erro ao salvar carrinho no localStorage:", error);
    }
  }, [cart]);

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      updateQtyCart(product.id, existingProduct.quantity + 1);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  function updateQtyCart(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  const context = {
    // Products and loading/error states
    products: products,
    filteredProducts: filteredProducts,
    loading: loading,
    error: error,
    searchTerm: searchTerm,
    selectedCategory: selectedCategory,
    categories: categories,
    // Cart management functions
    cart: cart,
    addToCart: addToCart,
    updateQtyCart: updateQtyCart,
    clearCart: clearCart,
    removeFromCart: removeFromCart,
    getTotalItems: getTotalItems,
    getTotalPrice: getTotalPrice,
    // Search and filter functions
    setSearchTerm: setSearchTerm,
    setSelectedCategory: setSelectedCategory,
  };

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}