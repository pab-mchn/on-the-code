import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Projects = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='jobs-text-container'>
      {language === "true" ? (
        <>
          <div className='jobs-text-freelancer-title'>
            <h3>Pronto vas a poder encontrar aquí todos mis proyectos</h3>
          </div>
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
          <h3>Soon you will be able to find all my projects here</h3>
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

export default Projects;
