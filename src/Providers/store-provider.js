import React, { createContext, useState, useCallback } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [useProducts, setUseProducts] = useState([]);

  const contextValue = {
    useProducts,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
