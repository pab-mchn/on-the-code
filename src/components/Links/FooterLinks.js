import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const FooterLinks = () => {
  const { language } = useContext(dataContext);
  return (
    <>
      {language === "true" ? (
        <footer>Hecho con todo mi ❤️ Pablo - on the code</footer>
      ) : (
        <footer>Made with all my ❤️ Pablo - on the code</footer>
      )}
    </>
  );
};

export default FooterLinks;
