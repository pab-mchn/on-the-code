import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const SocialLinks = () => {
  const [socialLink, setsocialLink] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "socialLinks"), (querySnapshot) => {
      const socialLinks = [];
      querySnapshot.forEach((doc) => {
        socialLinks.push({ ...doc.data() });

        setsocialLink(socialLinks);
      });
    });
  }, []);
  return (
    <div className='links-section-container'>
      <h3>Social Media</h3>
      {socialLink.map((link) => (
        <a className='buttons-item' href={link.link} key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
