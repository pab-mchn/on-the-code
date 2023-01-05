import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Freelancer = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='jobs-text-container'>
      {language === "true" ? (
        <>
          <h3>Como desarrollador Freelancer me voy a encargar de cumplir tus objetivos al Máximo</h3>
          <div className='jobs-text-freelancer-container'>
            <h4>Para contactarme puedes:</h4>
            <p>
              Agendar una reunion directamente en este{" "}
              <a
                className='jobs-text-important'
                href='https://calendly.com/on-the-code/freelancer'
                target='_blank'
                rel='noreferrer'>
                Calendario
              </a>
            </p>
            <p>
              Enviarme un{" "}
              <a className='jobs-text-important' href='mailto:pab.michelini@gmail.com'>
                Correo
              </a>
            </p>
          </div>
          <p className='jobs-text-title-center'>Esta seccion se encuentra en construcción</p>
        </>
      ) : (
        <>
          <h3>As a Freelancer developer I will take care of meeting your goals to the maximum</h3>
          <div className='jobs-text-freelancer-container'>
            <h4>To contact me you can:</h4>
            <p>
              Schedule a meeting directly on this{" "}
              <a
                className='jobs-text-important'
                href='https://calendly.com/on-the-code/freelancer'
                target='_blank'
                rel='noreferrer'>
                Calendar
              </a>
            </p>
            <p>
              Send me a{" "}
              <a className='jobs-text-important' href='mailto:pab.michelini@gmail.com'>
                Email
              </a>
            </p>
          </div>
          <p className='jobs-text-title-center'>This section is currently under construction</p>
        </>
      )}
    </div>
  );
};

export default Freelancer;
