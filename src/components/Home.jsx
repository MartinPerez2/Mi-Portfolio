import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () =>{
    return (
        <div name = "home" className=" w-full h-screen bg-gradient-to-r from-[#1F1D28] to-[#262837]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-red-300">Hola, mi nombre es </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    <span className="text-4xl sm:text-7xl font-bold text-red-500">M</span>artín 
                    <span className="text-4xl sm:text-7xl font-bold text-red-500"> P</span>érez
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Soy Front-End Development</h2>
                <p className="text-[#8892b0] py-2 max-w-[700px]"> Soy un desarrollador Front-end especializado en el diseño 
                    y construcción de aplicaciones web. Actualmente estoy estudiando
                     Back-end para finalmente poder proyectarme como desarrollador 
                     Full-stack.</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                <button
                className="text-gray-300 border-2 py-2 px-3 my-2 rounded-r-2xl flex items-center hover:bg-red-500 hover:border-red-300">
                Mira mis trabajos <HiArrowNarrowRight className="ml-3 hover:rotate-90 duration-300"/>
                 </button>
                </Link>
            </div>
            </div>

        </div>
    )
}

export default Home ; 