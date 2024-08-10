import React from 'react';

const About: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#FCFCFC] px-4 py-8 flex flex-col justify-center items-center overflow-y-hidden" data-aos="fade-up">
            <div className="w-full max-w-6xl">
                <h1 className="text-4xl font-light mb-8" data-aos="fade-down" data-aos-delay="100">
                    About Me
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 flex items-center justify-center" data-aos="slide-right" data-aos-delay="200">
                        <img className="w-full max-w-xs shadow-lg" src="/profile3.png" alt="Andrew Tedjapratama" />
                    </div>
                    
                    <div className="md:w-2/3" data-aos="slide-left" data-aos-delay="300">
                        <h2 className="text-3xl font-bold mb-4">Andrew Tedjapratama</h2>
                        <div className="w-16 h-1 bg-blue-500 mb-4"></div>
                        
                        <div className="space-y-4 text-sm">
                            <p className="flex items-start" data-aos="fade-up" data-aos-delay="400">
                                <span className="text-xl mr-2">✍️</span>
                                <span>Second-year undergraduate student at Bandung Institute of Technology (ITB), majoring in Computer Science.</span>
                            </p>
                            
                            <p className="flex items-start" data-aos="fade-up" data-aos-delay="500">
                                <span className="text-xl mr-2">🚀</span>
                                <span>A lifelong learner, driven by a passion for unravelling the intricacies of technology and its diverse applications.</span>
                            </p>
                            
                            <p className="flex items-start" data-aos="fade-up" data-aos-delay="600">
                                <span className="text-xl mr-2">🎨</span>
                                <span>I love learning new technologies and focus myself in creating beautiful and pleasing experiences through the applications and websites I make.</span>
                            </p>
                            
                            <div data-aos="fade-up" data-aos-delay="500">
                                <p className="flex items-start mb-2">
                                    <span className="text-xl mr-2">🌐</span>
                                    <span className="font-semibold">Organizations:</span>
                                </p>
                                <div className="flex items-center space-x-4">
                                    <img className="w-10 h-10" src="/itbjazz.png" alt="ITB Jazz" />
                                    <img className="w-24 h-24" src="/gdsc.png" alt="GDSC" />
                                </div>
                            </div>
                            
                            <div data-aos="fade-up">
                                <p className="flex items-start mb-2">
                                    <span className="text-xl mr-2">🌟</span>
                                    <span className="font-semibold">Achievements:</span>
                                </p>
                                <ul className="list-disc list-inside pl-6 space-y-1">
                                    <li>1st place in Sandbox Business Plan Competition 2022 (Prasetya Mulya University)</li>
                                    <li>Certified Web Development path graduate as a member in Google Developers Student Clubs ITB (GDSC ITB)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
