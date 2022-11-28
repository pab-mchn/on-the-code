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
      <h3>Ko-fi & Cafecito</h3>
      <p>If you want, you can invite me to a coffee ☕😍</p>
      {donateLink.map((link) => (
        <a className='buttons-item' href={link.link} key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default DonateLinks;
