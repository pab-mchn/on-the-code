import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const SocialLinks = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='links-section-container'>
      {language === "true" ? <h2>Mis redes sociales</h2> : <h2> My Social Media</h2>}
      <a
        className='buttons-item'
        href='https://www.youtube.com/channel/UCrP5xPLzqW3k6ssG8C7lHVw'
        target='_blank'
        rel='noreferrer'>
        Youtube
      </a>
      <a
        className='buttons-item'
        href='https://www.instagram.com/onthecodenow/?next=%2F'
        target='_blank'
        rel='noreferrer'>
        Instagram
      </a>
      <a className='buttons-item' href='https://github.com/pab-mchn' target='_blank' rel='noreferrer'>
        Github
      </a>
    </div>
  );
};

export default SocialLinks;
