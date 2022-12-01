import { useState, useContext } from "react";
import { dataContext } from "../Context/DataContext";

const HeaderLinks = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='header-container'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/on-the-code.appspot.com/o/profilepic.jpg?alt=media&token=79fc4df4-7b5e-4c6d-a906-c691540f7809'
        alt='profile-image'
      />
      <h1>on the code</h1>
      {language === "true" ? (
        <div className='links-section-header-container'>
          <p>Hola! me llamo Pablo, soy desarrollador web y creador de contenido </p>
          <p>En este lugar puedes encontrar todos mis links!</p>
        </div>
      ) : (
        <div className='links-section-header-container'>
          <p>Hi! my name is Pablo, I am Web Developer and Content Creator</p>
          <p>Here you can find all my links!</p>
        </div>
      )}
    </div>
  );
};

export default HeaderLinks;
