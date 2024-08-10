import React from 'react';

const About: React.FC = () => {
    return (
        <div className="w-full bg-[#FCFCFC] mx-auto px-4 py-10 flex justify-center">
            <div className="w-[80%]">
                <h1 className="text-6xl font-light mb-16">
                    About Me
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 flex items-end">
                        <div className="flex w-full justify-center">
                            <img className="w-4/5 shadow-lg" src="/profile3.png" alt="Carlo Antonio T. Taleon" />
                        </div>
                    </div>
                    
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">Andrew Tedjapratama</h2>
                        <div className="w-16 h-1 bg-blue-500 mb-6"></div>
                        
                        <div className="space-y-6">
                            <p className="flex items-start">
                                <span className="text-2xl mr-2">✍️</span>
                                <span className='text-[20px]'>I am currently a second-year undergraduate student at Bandung Institute of Technology (ITB), pursuing a major in Computer Science.</span>
                            </p>
                            
                            <p className="flex items-start">
                                <span className="text-2xl mr-2">🚀</span>
                                <span className='text-[20px]'>
                                    A lifelong learner, driven by a passion for unravelling the intricacies of technology and its diverse applications.
                                </span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-2xl mr-2">🎨</span>
                                <span className='text-[20px]'>I love learning new technologies and focus myself in creating beautiful and pleasing experiences through the applications and websites I make.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-2xl mr-2">🌐</span>
                                <span className='text-[20px]'>Organizations:</span>
                            </p>
                            <div className="flex items-center">
                                <img className="w-[100px] h-[100px]" src="/itbjazz.png"></img>
                                <img className="w-[150px] h-[170px]" src="/gdsc.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
