import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedMentoring, setclickedMentoring] = useState("false");
  const [clickedFreelancer, setclickedFreelancer] = useState("false");
  const [optionChosed, setoptionChosed] = useState("true");
  const [language, setLanguage] = useState("true");

  const handleMentoring = () => {
    setoptionChosed("false");
    setclickedMentoring("true");
    setclickedFreelancer("false");
  };

  const handleFreelancer = () => {
    setoptionChosed("false");
    setclickedMentoring("false");
    setclickedFreelancer("true");
  };

  const handleLanguageEn = () => {
    setLanguage("false");
  };

  const handleLanguageEs = () => {
    setLanguage("true");
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
        optionChosed,
        language,
        handleLanguageEn,
        handleLanguageEs,
      }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
