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
      <h3>Consulting & Freelancer</h3>
      <p>I offer project consultations and I work as a freelance web developer.</p>
      {jobsLink.map((link) => (
        <a className='buttons-item' key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default JobsLinks;
