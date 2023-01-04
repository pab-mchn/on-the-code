import React, { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [clickedProjects, setclickedProjects] = useState("false");
  const [clickedFreelancer, setclickedFreelancer] = useState("false");
  const [optionChosed, setoptionChosed] = useState("true");
  const [language, setLanguage] = useState("true");

  const handleProjects = () => {
    setoptionChosed("false");
    setclickedProjects("true");
    setclickedFreelancer("false");
  };

  const handleFreelancer = () => {
    setoptionChosed("false");
    setclickedProjects("false");
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
        clickedProjects,
        setclickedProjects,
        handleProjects,
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
