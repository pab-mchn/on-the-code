import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Mentoring = () => {
  const { language } = useContext(dataContext);
  return (
    <div className='jobs-text-container'>
      {language === "true" ? (
        <>
          <h2 className='jobs-text-title-center'>Mentoría</h2>
          <p>
            ¿Estás buscando mentoría en un proyecto? ¡Este es el lugar indicado! acá vas poder coordinar un espacio con
            migo para conversar a fondo sobre tu código.
          </p>
          <h3 className='jobs-text-title-center'>¿Como funciona?</h3>
          <h4>Parte uno:</h4>
          <p>
            Primero coordinamos una reunión de 30 minutos mediante google meet. Ahí hablaremos sobre tu proyecto y sobre
            lo que estés buscando alcanzar con el. Conversaremos de manera global sobre distintos caminos y formas de
            lograr tus objetivos, te brindare algunos consejos con el fin de orientarte sobre como seguir avanazando .
            Es una charla informal para conocernos charlar sobre tecnología y sobre tu código.
          </p>
          <p>
            🔊 Esta parte se trata de una charla general en donde voy aconsejarte, orientarte y ayudarte a despejar
            dudas generales sobre tu proyecto.
          </p>
          <p>❌ En esta parte no resolvermos bugs en el código ni se trabajará en agregar nueva funcionalidad.</p>
          <h4>Parte dos:</h4>
          <p>
            En caso de que quieras seguir avanzando en la mentoría con mayor profundidad podemos avanzar en una segunda
            etapa. Esta parte solo se va a dar en caso de que se cumplan las siguientes dos cosas:
          </p>
          <p>
            a) Que quieras una intervención técnica en el tu proyecto, con esto ya si me refiero a por ejemplo: agregar
            una funcionalidad o solucionar un bug.
          </p>
          <p>
            b) Que yo acepte proceder con esta parte, para ello voy a evaluar: disponibilidad, tiempo, complejidad del
            trabajo a realizar y distintas variables en relación a tiempo/trabajo.
          </p>
          <p>
            Si avanzamos con esto te voy a pedir envíes tu código, y dentro de un plazo de una semana trabajaré en él,
            luego de este plazo coordinaremos otra llamada con la intención de explicarte paso a paso que es lo que hice
            para que puedas comprender y seguir avanzando en tu proyecto.
          </p>
          <p>💸El valor de esta segunda etapa dependerá del tipo de trabajo a realizar.</p>
          <h3 className='jobs-text-title-center'>Importante saber:</h3>
          <p>
            Los temas a tratar en la consultoría deben estar enmarcados dentro de lo que se ve en mi canal de youtube o
            de las tecnologías que allí se aplican. Esto lo hago para tener las mentorias alineadas con mi canal.
            Ademas, esas son las tecnologías que utilizo a diario y en las que te voy a poder ayudar. De momento solo se
            aceptan mentorias en proyectos que esten hechos con{" "}
            <span className='jobs-text-important'>Javascript puro o Javascript vanilla</span>. Con el tiempo ire sumando
            mas tecnologías.
          </p>
          <h3 className='jobs-text-title-center'>Entonces, ya puedes agendar una reunion con migo!</h3>
          <p>Agenda una mentoria en este calendario: </p>
          <p>
            Para agendar un cita el calendario utiliza paypal como metodo de pago. Si queres agendar una mentoria
            utilizando otro metodo como Mercado Pago o algún otro, no dudes en contactarme mediante un correo o buscarme
            en redes para una comunicacion rapida.
          </p>
          <p>Saludos y nos vemos en la Mentoría!</p>
        </>
      ) : (
        <>
          <h2 className='jobs-text-title-center'>Mentoring</h2>
          <p>
            Are you looking for mentoring on a project? this is the right place! here you will be able to coordinate a
            space with me to talk in depth about your code.
          </p>
          <h3 className='jobs-text-title-center'>How does it work?</h3>
          <h4>Part one:</h4>
          <p>
            First we coordinate a 30 minute meeting via google meet. There we will talk about your project and what you
            are what you are looking to achieve with it. We will talk in a global way about different ways and ways to
            achieve your goals. achieve your goals, I will give you some advice in order to guide you on how to move
            forward. This is an informal chat to get to know each other, talk about technology and about your code.
          </p>
          <p>
            🔊 This part is a general talk in which I will advise you, guide you and help you to clear general doubts
            about your project.
          </p>
          <p>❌ In this part we will not resolve bugs in the code nor will we work on adding new functionality.</p>
          <h4>Part two:</h4>
          <p>
            In case you want to go further in the mentoring in more depth, we can move on to a second stage. This part
            will only take place if the following two things are met:
          </p>
          <p>
            a) you want a technical intervention in your project, with this I mean for example: add a feature or fix a
            bug.
          </p>
          <p>
            b) That I agree to proceed with this part, for this I will evaluate: availability, time, complexity of the
            work to be done and different variables in relation to time/work. work to be done and different variables in
            relation to time/work.
          </p>
          <p>
            If we move forward with this I will ask you to send your code, and within a period of one week I will work
            on it, after this period we will coordinate another call with the intention of explaining step by step what
            I did so you can understand and continue advancing in your project.
          </p>
          <p>💸The value of this second stage will depend on the type of work to be performed.</p>
          <h3 className='jobs-text-title-center'>Important to know:</h3>
          <p>
            The topics to be discussed in the consultancy must be framed within the framework of what is seen in my
            youtube channel or of the technologies the technologies that are applied there. I do this to have the
            mentoring aligned with my channel. Besides, these are the are the technologies that I use on a daily basis
            and in which I will be able to help you. De momento solo se aceptan mentoring in projects that are made with
            <span className='jobs-text-important'> Pure Javascript or Jascript vanilla </span>. Over time I will be
            adding more technologies.
          </p>
          <h3 className='jobs-text-title-center'>So, you can schedule a meeting with me now!</h3>
          <p>Schedule a mentorship on this calendar: </p>
          <p>
            To schedule an appointment the calendar uses paypal as a payment method. If you want to schedule a mentoring
            using another method another method such as Mercado Pago or any other, feel free to contact me by email or
            look for me in networks for a quick communication. for a quick communication.
          </p>
          <p>All the best and see you at the Mentoring!</p>
        </>
      )}
    </div>
  );
};

export default Mentoring;
