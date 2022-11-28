import { useState, useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Mentoring from "../Jobs/Mentoring";
import Freelancer from "../Jobs/Freelancer";
import Banner from "../Banner/Banner";

import "./Jobs.css";

const Jobs = () => {
  const { clickedMentoring, clickedFreelancer, handleMentoring, handleFreelancer } = useContext(dataContext);
  return (
    <>
      <Banner />
      <div className='container-buttons'>
        <button
          onClick={handleMentoring}
          className={clickedMentoring === "true" ? "pressed-buttons" : "container-buttons-btn-gradient"}>
          Get Consulting & Mentoring
        </button>
        <button
          onClick={handleFreelancer}
          className={clickedFreelancer === "true" ? "pressed-buttons" : "container-buttons-btn-gradient"}>
          Get me as a Freelancer
        </button>
      </div>
      {clickedMentoring === "true" ? <Mentoring /> : <Freelancer />}
    </>
  );
};

export default Jobs;
