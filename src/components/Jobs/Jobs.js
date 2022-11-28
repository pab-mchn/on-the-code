import React, { useState } from "react";
import Mentoring from "../Jobs/Mentoring";
import Banner from "../Banner/Banner";

import "./Jobs.css";

const Jobs = () => {
  return (
    <>
      <Banner />
      <div className='container-buttons'>
        <button>Consulting & Mentoring</button>
        <button>Freelancer</button>
      </div>
    </>
  );
};

export default Jobs;
