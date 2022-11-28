import { dataContext } from "../Context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const JobsLinks = () => {
  const { handleMentoring, handleFreelancer } = useContext(dataContext);

  return (
    <div className='links-section-container'>
      <div className='links-section-text-container'>
        <h2>Consulting & Freelancer</h2>
        <p>I offer project consultations and I work as a freelance web developer.</p>
      </div>
      <Link to={"/Mentoring&Freelancer"} onClick={handleFreelancer} className='buttons-item'>
        Get me as a Freelancer
      </Link>
      <Link to={"/Mentoring&Freelancer"} onClick={handleMentoring} className='buttons-item'>
        Get Mentoring and Consulting
      </Link>
      <a className='buttons-item' href='mailto:pab.michelini@gmail.com'>
        Send me an email
      </a>
    </div>
  );
};

export default JobsLinks;
