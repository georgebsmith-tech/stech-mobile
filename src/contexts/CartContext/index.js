import React, { useState, createContext } from "react";
import { View, Text } from "react-native";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const value = {
    setCartItems,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
