import React from 'react';
import Particle from './Particle';
import Box from './Box';

const Hero = () => {
    return (
        <div className="relative h-[90vh] z-1 bg-[url('/path/to/your/image.jpg')] flex justify-center items-center"> 
            <Particle />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[3rem] h-[100%] items-center">
                <div>
                    <header>
                        <p className="text-[19px]">Hello there! I'm</p>
                        <h1 className="hero-name font-extrabold text-[3rem] relative bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">Andrew Tedjapratama</h1>
                    </header>
                </div>
                <div className="md:col-start-2">
                    <Box />
                </div>
            </div>
        </div>
    );
};

export default Hero;
