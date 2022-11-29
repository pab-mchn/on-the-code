import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Mentoring from "../Jobs/Mentoring";
import Freelancer from "../Jobs/Freelancer";
import Banner from "../Banner/Banner";
import FooterLinks from "../Links/FooterLinks";
import LanguageButtons from "../LanguageButtons/LanguageButtons";

import "./Jobs.css";

const Jobs = () => {
  const { clickedMentoring, clickedFreelancer, handleMentoring, handleFreelancer, optionChosed, language } = useContext(
    dataContext
  );
  return (
    <>
      <Banner />
      <LanguageButtons />
      {optionChosed === "true" && (
        <div className='jobs-text-container'>
          <h2 className='jobs-text-title-center'>Mentor 🤹 Freelancer</h2>
        </div>
      )}
      <div className='container-buttons'>
        <button
          onClick={handleMentoring}
          className={clickedMentoring === "true" ? "pressed-jobs-buttons" : "container-buttons-btn-gradient"}>
          {language === "true" ? "Quiero un Mentor" : "I want a Mentor"}
        </button>
        <button
          onClick={handleFreelancer}
          className={clickedFreelancer === "true" ? "pressed-jobs-buttons" : "container-buttons-btn-gradient"}>
          {language === "true" ? "Quiero un Freelancer" : "I want a Freelancer"}
        </button>
      </div>
      {clickedMentoring === "true" && <Mentoring />}
      {clickedFreelancer === "true" && <Freelancer />}
      <FooterLinks />
    </>
  );
};

export default Jobs;
