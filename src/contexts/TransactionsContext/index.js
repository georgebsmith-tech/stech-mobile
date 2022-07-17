import React, { useState, createContext } from "react";
import { View, Text } from "react-native";

export const TransactionsContext = createContext();

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const value = {
    transactions,
    setTransactions,
  };
  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
