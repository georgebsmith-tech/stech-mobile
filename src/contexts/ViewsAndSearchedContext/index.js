import React, { useState, createContext } from "react";
import { View, Text } from "react-native";

export const ViewsAndSearchedContext = createContext();

const ViewsAndSearchedContextProvider = ({ children }) => {
  const [recentViews, setRecentViews] = useState([]);
  const [recentSearched, setRecentSearched] = useState([]);

  const value = {
    recentViews,
    setRecentViews,
    recentSearched,
    setRecentSearched,
  };
  return (
    <ViewsAndSearchedContext.Provider value={value}>
      {children}
    </ViewsAndSearchedContext.Provider>
  );
};

export default ViewsAndSearchedContextProvider;
