import { dataContext } from "../Context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const JobsLinks = () => {
  const { handleMentoring, handleFreelancer, language } = useContext(dataContext);

  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        {language === "true" ? <h2>Mentorias & Freelancer</h2> : <h2>Mentoring & Freelancer</h2>}
        {language === "true" ? (
          <p>Ofresco Menteorias de Proyectos y trabajo como Desarrollador Web Freelancer.</p>
        ) : (
          <p>I offer Project Mentoring and I work as a freelance web developer.</p>
        )}
      </div>
      <Link to={"/Mentoring&Freelancer"} onClick={handleFreelancer} className='buttons-item'>
        {language === "true" ? "Quiero un Freelancer" : "I want a freelancer"}
      </Link>
      <Link to={"/Mentoring&Freelancer"} onClick={handleMentoring} className='buttons-item'>
        {language === "true" ? "Quiero un Mentor" : "I want a Mentor"}
      </Link>
      <a className='buttons-item' href='mailto:pab.michelini@gmail.com'>
        {language === "true" ? "Quiero enviarte un correo" : "I want to send you an Email"}
      </a>
    </div>
  );
};

export default JobsLinks;
