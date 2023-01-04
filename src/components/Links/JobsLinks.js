import { dataContext } from "../Context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const JobsLinks = () => {
  const { handleFreelancer, language } = useContext(dataContext);

  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        <h2>Freelancer</h2>
        {language === "true" ? <p>Soy desarrollador web Freelancer</p> : <p>I am a Freelancer web developer</p>}
      </div>
      <Link to={"/Mentoring&Freelancer"} onClick={handleFreelancer} className='buttons-item'>
        {language === "true" ? "Quiero un Freelancer" : "I want a freelancer"}
      </Link>

      <a className='buttons-item' href='mailto:onthecodenow@gmail.com'>
        {language === "true" ? "Quiero enviarte un correo" : "I want to send you an Email"}
      </a>
    </div>
  );
};

export default JobsLinks;
