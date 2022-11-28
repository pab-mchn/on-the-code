import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const DonateLinks = () => {
  const [donateLink, setDonateLink] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "donateLinks"), (querySnapshot) => {
      const donateLinks = [];
      querySnapshot.forEach((doc) => {
        donateLinks.push({ ...doc.data() });

        setDonateLink(donateLinks);
      });
    });
  }, []);
  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        <h2>Ko-fi & Cafecito</h2>
        <p>If you want, you can invite me to a coffee ☕😍</p>
      </div>
      {donateLink.map((link) => (
        <a className='buttons-item' href={link.link} key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DonateLinks;
