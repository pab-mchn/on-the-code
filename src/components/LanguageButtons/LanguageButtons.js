import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./LanguageButtons.css";

const LanguageButtons = () => {
  const { handleLanguageEn, handleLanguageEs, language } = useContext(dataContext);
  return (
    <div className='language-buttons-container'>
      <span
        onClick={handleLanguageEs}
        className={language === "true" ? "pressed-language-buttons" : "language-buttons-items"}>
        Es
      </span>
      <span
        className={language === "false" ? "pressed-language-buttons" : "language-buttons-items "}
        onClick={handleLanguageEn}>
        En
      </span>
    </div>
  );
};

export default LanguageButtons;
