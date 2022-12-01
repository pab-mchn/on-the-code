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
          <h4>Parte uno: charla general</h4>
          <p>
            Primero coordinamos una reunión de 30 minutos mediante google meet. Ahí hablaremos sobre tu proyecto y sobre
            lo que estés buscando alcanzar con el. Conversaremos de manera global sobre distintos caminos y formas de
            lograr tus objetivos, te brindare algunos consejos con el fin de orientarte sobre como seguir avanazando. Es
            una charla informal para conocernos, charlar sobre tecnología y sobre tu código.
          </p>
          <p>
            🔊 Esta parte se trata de una charla general en donde voy aconsejarte, orientarte y ayudarte a despejar
            dudas generales sobre tu proyecto.
          </p>
          <p>❌ En esta parte no resolvermos bugs en el código ni se trabajará en agregar nueva funcionalidad.</p>
          <h4>Parte dos: clase privada</h4>
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
            Si avanzamos con esto te voy a pedir envíes tu código, y dentro de un plazo a acordar trabajaré en él, luego
            de este plazo coordinaremos otra llamada con la intención de explicarte paso a paso que es lo que hice, se
            trata de una clase privada en relación a tu código para que puedas comprender y seguir avanzando en tu
            proyecto.
          </p>
          <p>💸El valor de esta segunda etapa dependerá del tipo de trabajo a realizar.</p>
          <h3 className='jobs-text-title-center'>Importante saber:</h3>
          <p>
            Los temas a tratar en la consultoría deben estar enmarcados dentro de lo que se ve en mi{" "}
            <a className='jobs-text-important' href='https://www.youtube.com/channel/UCrP5xPLzqW3k6ssG8C7lHVw'>
              canal de YouTube
            </a>{" "}
            o de las tecnologías que allí se aplican. Esto lo hago para tener las mentorias alineadas con mi canal.
            Ademas, esas son las tecnologías que utilizo a diario y en las que te voy a poder ayudar. De momento solo se
            aceptan mentorias en proyectos que esten hechos con{" "}
            <span className='jobs-text-important'>Javascript puro o Javascript vanilla</span>. Con el tiempo ire sumando
            mas tecnologías.
          </p>
          <h3 className='jobs-text-title-center'>Entonces, ya puedes agendar una reunion con migo!</h3>
          <p>
            El valor de la reunión de la primera etapa es de 5$ cinco dólares. Los pagos se re realizan mediante PayPal
            o Mercado Pago en tu moneda local.
          </p>
          <p>
            Si quieres agendar un mentoría envíame un{" "}
            <a className='jobs-text-important' href='mailto:onthecodenow@gmail.com'>
              correo
            </a>{" "}
            o contactarme mediante{" "}
            <a className='jobs-text-important' href='https://www.instagram.com/onthecodenow/?next=%2F'>
              redes sociales
            </a>{" "}
            . Voy a estar enviándote un link de pago junto con un calendario para que agendemos un horario para la
            mentoría.
          </p>
          <p> Por cualquier duda también podes escribirme sin ningún compromiso. </p>
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
          <h4>Part one: general talk</h4>
          <p>
            First we coordinate a 30 minute meeting via google meet. There we will talk about your project and what are
            you are looking to achieve with it. We will talk in a global way about different ways to achieve your goals.
            I will give you some advice in order to guide you on how to move forward. This is an informal chat to get to
            know each other, talk about technology and about your code.
          </p>
          <p>
            🔊 This part is a general talk where I will advise you, guide you and help you to clear up general doubts
            about your project.
          </p>
          <p>❌ In this part we will not resolve bugs in the code or work on adding new functionality.</p>
          <h4>Part two: private class</h4>
          <p>
            In case you would like to go deeper into mentoring, we can move on to a second stage. stage. This part will
            only happen if the following two things are fulfilled:
          </p>
          <p>
            a) You want a technical intervention in your project, with this I mean for example: add a functionality or
            fix a bug.
          </p>
          <p>
            b) That I agree to proceed with this part, for this I will evaluate: availability, time, complexity of the
            work to be done and different variables in relation to time/work.
          </p>
          <p>
            If we move forward with this I will ask you to send your code, and within a term to be agreed I will work on
            it. after this deadline we will coordinate another call with the intention of explaining you step by step
            what I did, this is a private private class in relation to your code so that you can understand and continue
            advancing in your project.
          </p>
          <p>💸The value of this second stage will depend on the type of work to be performed.</p>
          <h3 className='jobs-text-title-center'>Important to know:</h3>
          <p>
            The topics to be discussed in the consultancy must be framed within the framework of what is seen in my{" "}
            <a className='jobs-text-important' href='https://www.youtube.com/channel/UCrP5xPLzqW3k6ssG8C7lHVw'>
              Youtube chanel
            </a>{" "}
            or the technologies that are applied there. I do this to have the mentorships aligned with my channel.
            Besides, these are the technologies that I use on a daily basis and in which I will be able to help you. At
            the moment I only accept only accept mentorships in projects that are made with
            <span className='jobs-text-important'> Pure Javascript or Jascript vanilla </span>. Over time I will be
            adding more technologies.
          </p>
          <h3 className='jobs-text-title-center'>So, you can schedule a meeting with me now!</h3>
          <p>The value of the first stage meeting is $5 five dollars. Payments are made through PayPal.</p>
          <p>
            If you would like to schedule a mentoring session send me a{" "}
            <a className='jobs-text-important' href='mailto:onthecodenow@gmail.com'>
              email
            </a>{" "}
            or contact me through{" "}
            <a className='jobs-text-important' href='https://www.instagram.com/onthecodenow/?next=%2F'>
              soacial media
            </a>{" "}
            . I will be sending you a payment link along with a calendar so we can schedule a mentoring schedule a time
            for mentoring.
          </p>
          <p> For any questions you can also write me without any commitment. </p>
          <p>Greetings and see you at the Mentoring!</p>
        </>
      )}
    </div>
  );
};

export default Mentoring;
