import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const DonateLinks = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        <h2>Ko-fi & Cafecito</h2>
        {language === "true" ? (
          <p>Si lo deseas, puedes invitarme a un cafecito para apoyudarme a seguir creando contenido ☕😍</p>
        ) : (
          <p>If you want, you can invite me for a coffee to help me to continue creating content ☕😍</p>
        )}
      </div>
      <a className='buttons-item' href='https://ko-fi.com/onthecode' target='_blank' rel='noreferrer'>
        Ko-fi app - Paypal
      </a>
      <a className='buttons-item' href='https://cafecito.app/onthecode' target='_blank' rel='noreferrer'>
        Cafecito app - Mercado Pago
      </a>
    </div>
  );
};

export default DonateLinks;
