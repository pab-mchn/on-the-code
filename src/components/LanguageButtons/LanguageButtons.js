import { useState, useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./LanguageButtons.css";

const LanguageButtons = () => {
  const { handleLanguageEn, handleLanguageEs } = useContext(dataContext);
  return (
    <div className='language-buttons-container'>
      <span onClick={handleLanguageEs}>Es</span>
      <span onClick={handleLanguageEn}>En</span>
    </div>
  );
};

export default LanguageButtons;
