import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Freelancer from "../Jobs/Freelancer";
import Banner from "../Banner/Banner";
import FooterLinks from "../Links/FooterLinks";
import Projects from "./Projects";
import LanguageButtons from "../LanguageButtons/LanguageButtons";

import "./Jobs.css";

const Jobs = () => {
  const { clickedProjects, clickedFreelancer, handleProjects, handleFreelancer, optionChosed, language } = useContext(
    dataContext
  );
  return (
    <>
      <Banner />
      <LanguageButtons />
      {optionChosed === "true" && (
        <div className='jobs-text-container'>
          <h2 className='jobs-text-title-center'>Freelancer</h2>
        </div>
      )}
      <div className='container-buttons'>
        <button
          onClick={handleFreelancer}
          className={clickedFreelancer === "true" ? "pressed-jobs-buttons" : "container-buttons-btn-gradient"}>
          {language === "true" ? "Quiero un Freelancer" : "I want a Freelancer"}
        </button>
        <button
          onClick={handleProjects}
          className={clickedProjects === "true" ? "pressed-jobs-buttons" : "container-buttons-btn-gradient"}>
          {language === "true" ? "Quiero ver tus proyectos" : "I want to see your projects"}
        </button>
      </div>
      {clickedProjects === "true" && <Projects />}
      {clickedFreelancer === "true" && <Freelancer />}
      <FooterLinks />
    </>
  );
};

export default Jobs;
