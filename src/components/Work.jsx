import React from 'react';
import { data } from "../data/data.jsx";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-r from-[#1F1D28] to-[#262837]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-500'>
           Proyectos
          </p>
          <p className='py-6 '>// Mira algunos de mis proyectos!  </p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-2xl 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
      <span className="text-2xl font-bold text-white">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-full hover:bg-red-300 px-4 py-3 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-full hover:bg-red-300 px-4 py-3 m-2
                       bg-gray-300 text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;