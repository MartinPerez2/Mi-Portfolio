import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/img/logo4.png';
import MartinCv from'../assets/img/martincv.pdf';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800/50 text-gray-300 shadow-sm'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '70px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:text-red-500'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-red-500'>
          <Link to='about' smooth={true} duration={500}>
            Acerca de mi
          </Link>
        </li>
        <li className='hover:text-red-500'>
          <Link to='skills' smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className='hover:text-red-500'>
          <Link to="work" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className='hover:text-red-500'>
          <Link to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 transition-all duration-300'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-red-500'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-500'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Acerca de Mi
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-500'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-500'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-red-500'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-red-500'
              href='https://www.linkedin.com/in/mart%C3%ADn-p%C3%A9rez-30a46b1b6/'
              target="_blank"
            >
              Linkedin <FaLinkedin size={40} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:text-red-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-red-500'
              href='https://github.com/MartinPerez2'
              target="_blank"
            >
              Github <FaGithub size={40} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:text-red-500'>
            <Link
              className='flex justify-between items-center w-full text-gray-300 hover:text-red-500'
              to='contact' smooth= {true} duration={500}
            >
              Email <HiOutlineMail size={40} />
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:text-red-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-red-500'
              href={MartinCv}
              download="Martin Cv"
            >
              Resume <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;