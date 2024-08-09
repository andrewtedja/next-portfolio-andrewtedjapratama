import React from 'react';
import Particle from './Particle';
import Box from './Box';

const Hero = () => {
    const splitName = (name: string) => {
        return name.split('').map((letter, index) => (
            <span 
                key={index} 
                className="inline-block transition-transform duration-300 hover:text-blue-700 "
            >
                {letter}
            </span>
        ));
    };

    const handleNavClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="h-[90vh] z-1 flex justify-center items-center"> 
            <div className='z-[-1]'>
                <Particle />
            </div>
            <div className="hero-content min-w-[80%] grid grid-cols-[1fr, 1fr] z-[1]">
                <div className=''>
                    <header className=''>
                        <h2 className="text-[16px] flex items-center">
                            <img className='h-[20px] w-[20px] mr-2' src='/wave.png' alt='Wave' />
                            Hello there! I am
                        </h2>
                        <h1 className="hero-name font-extrabold text-[4rem] bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
                            {splitName("Andrew")}
                        </h1>
                        <h1 className="hero-name font-extrabold text-[4rem] bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
                            {splitName("Tedjapratama")} 
                        </h1>
                        <p className='text-[16px] flex items-center mt-5'>
                            An aspiring 
                            <span className='font-semibold mx-1'>Fullstack Web Developer</span>
                            based in Indonesia
                            <img className="h-[25px] w-[25px] ml-1" src="/pin.png" alt="pin icon" />
                        </p>
                        <button 
                            className='mt-4 px-7 py-3 bg-[#ffffff] border-[1px] border-[#3B82F6] text-[#3B82F6] font-normal hover:bg-[#3B82F6] hover:text-white transition duration-300 ease-in-out' 
                            onClick={() => handleNavClick('contacts')}
                        >
                            Get in touch
                        </button>
                    </header>
                </div>
                <div className="ml-[1rem] md:col-start-2">
                    <Box />
                </div>
            </div>
        </div>
    );
};

export default Hero;
