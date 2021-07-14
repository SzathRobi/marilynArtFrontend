import MarilynContext from "../contexts/MarilynContext";
import { useState } from "react";

function ContextWrapper({ children }) {
  const [cartTotal, setCartTotal] = useState(0);
  const incrementCartTotal = (product) => {
    setCartTotal(cartTotal + product.price);
  };
  const decrementCartTotal = (product) => {
    setCartTotal(cartTotal - product.price);
  };

  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
    incrementCartTotal(product);
  };

  const [categories, setCategories] = useState([]);
  const [categoryTab, setCategoryTab] = useState("Összes");

  return (
    <MarilynContext.Provider
      value={{
        cart,
        addToCart,
        cartTotal,
        incrementCartTotal,
        decrementCartTotal,
        categories,
        setCategories,
        categoryTab,
        setCategoryTab,
      }}
    >
      {children}
    </MarilynContext.Provider>
  );
}

export default ContextWrapper;
