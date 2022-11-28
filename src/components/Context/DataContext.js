import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedMentoring, setclickedMentoring] = useState("false");
  const [clickedFreelancer, setclickedFreelancer] = useState("false");

  const handleMentoring = () => {
    setclickedMentoring("true");
    setclickedFreelancer("false");
  };

  const handleFreelancer = () => {
    setclickedMentoring("false");
    setclickedFreelancer("true");
  };
  return (
    <dataContext.Provider
      value={{
        clickedMentoring,
        setclickedMentoring,
        handleMentoring,
        clickedFreelancer,
        setclickedFreelancer,
        handleFreelancer,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
