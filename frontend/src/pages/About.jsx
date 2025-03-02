import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            vero mollitia minus commodi nobis totam deleniti? Odio voluptatibus
            suscipit unde, nulla harum mollitia exercitationem velit impedit aut
            incidunt, deleniti ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            vero mollitia minus commodi nobis totam deleniti? Odio voluptatibus
            suscipit unde, nulla harum mollitia exercitationem velit impedit aut
            incidunt, deleniti ea.
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit porro impedit omnis maiores a id cupiditate sunt esse
            ut aperiam ipsam rem nisi neque ab deserunt, aspernatur temporibus
            laborum!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600' >
            Nos aseguramos de que cada producto pase por un riguroso control de
            calidad antes de llegar a nuestros clientes. Desde la selección de
            materiales hasta la fabricación y empaquetado, seguimos estrictos
            estándares para garantizar durabilidad, comodidad y satisfacción.
            Nuestro compromiso con la excelencia nos permite ofrecer productos
            que cumplen y superan las expectativas de nuestros clientes.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600' >
            Diseñamos nuestra plataforma y procesos para que la experiencia de
            compra sea rápida y sencilla. Ofrecemos múltiples métodos de pago,
            envíos rápidos y una interfaz intuitiva que permite a los usuarios
            encontrar lo que necesitan con facilidad. Además, nuestra política
            de devoluciones flexible brinda tranquilidad a nuestros clientes en
            cada compra.
          </p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Excepcional Customer Service:</b>
          <p className='text-gray-600' >
            Nuestro equipo de atención al cliente está siempre disponible para
            resolver cualquier duda o inconveniente. Nos esforzamos por brindar
            respuestas rápidas y soluciones efectivas, asegurando que cada
            cliente reciba una atención personalizada. Creemos en la importancia
            de la comunicación y la confianza, por lo que ofrecemos soporte en
            múltiples canales para garantizar una experiencia excepcional en
            todo momento.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
