import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext("null");
const StoreContextProvider = (props) => {
  // implementing cart functionality
  const [cartItems, setCartItems] = useState({});
  // add to cart functionality
  const addToCart = (itemId) => {
    // cart item previously does not exist
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else // cart item previously exists
    {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  // remove from cart functionality
  removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
