import React, { useState, createContext } from "react";
import { View, Text } from "react-native";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ userIsAuth: false });

  const value = {
    auth,
    setAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
