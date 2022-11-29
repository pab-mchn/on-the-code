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
        <p>Hola, en este lugar podes encontrar todos mis links!</p>
      ) : (
        <p>Hi, you can find here all my links!</p>
      )}
    </div>
  );
};

export default HeaderLinks;
