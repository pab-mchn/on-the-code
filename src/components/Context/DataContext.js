import React, { createContext } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};

export default DataProvider;
