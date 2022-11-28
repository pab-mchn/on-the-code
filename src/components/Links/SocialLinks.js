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
        <div className='activitiesItem' key={link.id}>
          <a className='buttons-item' href={link.link}>
            {link.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
