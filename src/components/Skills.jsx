import React from 'react';

import HTML from '../assets/img/html.png';
import CSS from '../assets/img/css.png';
import JavaScript from '../assets/img/javascript.png';
import ReactImg from '../assets/img/react.png';
import Node from '../assets/img/node.png';;
import GitHub from '../assets/img/github.png';
import Tailwind from '../assets/img/tailwind.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-r from-[#1F1D28] to-[#262837] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-red-500 '>Habilidades</p>
              <p className='py-4'>// Estas son algunas tecnologias con las que trabajo.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' rounded-xl shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-[#861A1A] duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='rounded-xl shadow-md shadow-[#040c16] hover:shadow-[#861A1A] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;