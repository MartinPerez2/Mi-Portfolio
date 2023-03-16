import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-[#1F1D28] to-[#262837] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-500'>
              Acerca de Mi
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola. Soy Martín Pérez. Conóceme un poco más.</p>
            </div>
            <div>
              <p>Me apasiona crear proyectos de excelente calidad y que estos ayude a que mejore la 
                 vida de quienes me rodean. Me especializo en la creación de paginas y aplicaciones web
                 para clientes que van desde individuos, proyectos personales y espero que en muy poco tiempo para
                 pequeñas y grandes empresas. Me gusta capacitarme y aprender siempre lo último para estar adecuado
                 a todas las actualizaciones, soy comprometido, responsable, colaborativo, y siempre doy lo mejor
                 en todo lo que hago.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;