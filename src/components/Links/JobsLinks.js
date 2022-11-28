import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/Firebase";

const JobsLinks = () => {
  const [jobsLink, setJobsLink] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "jobsLinks"), (querySnapshot) => {
      const jobsLinks = [];
      querySnapshot.forEach((doc) => {
        jobsLinks.push({ ...doc.data() });

        setJobsLink(jobsLinks);
      });
    });
  }, []);
  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        <h2>Consulting & Freelancer</h2>
        <p>I offer project consultations and I work as a freelance web developer.</p>
      </div>
      {jobsLink.map((link) => (
        <a className='buttons-item' key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default JobsLinks;
