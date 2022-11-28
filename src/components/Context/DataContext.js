import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedMentoring, setclickedMentoring] = useState("false");

  const handleMentoring = () => {
    setclickedMentoring("true");
  };
  return (
    <dataContext.Provider value={{ clickedMentoring, setclickedMentoring, handleMentoring }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
