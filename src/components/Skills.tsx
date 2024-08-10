import React from 'react';

const Skills = () => {
    return (
        <div className="min-h-[90vh] bg-white py-16 flex flex-col items-center justify-center" data-aos="fade-up">
            <div className="container max-w-[85%] mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-black mb-2" data-aos="fade-down">Skills</h2>
                <p className="text-center text-[#3B82F6] mb-12" data-aos="fade-down">My Technical Abilities</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {[
                        { src: "/skills-logos/python.png", alt: "Python", label: "Python" },
                        { src: "/skills-logos/HTML.png", alt: "HTML", label: "HTML" },
                        { src: "/skills-logos/CSS.png", alt: "CSS", label: "CSS" },
                        { src: "/skills-logos/javascript.png", alt: "JavaScript", label: "JavaScript" },
                        { src: "/skills-logos/git.png", alt: "Git", label: "Git" },
                        { src: "/skills-logos/github.png", alt: "GitHub", label: "GitHub" },
                        { src: "/skills-logos/nodejs.png", alt: "Node.js", label: "Node.js" },
                        { src: "/skills-logos/nextjs.png", alt: "Next.js", label: "Next.js" },
                        { src: "/skills-logos/react.png", alt: "React", label: "React" },
                        { src: "/skills-logos/firebase.png", alt: "Firebase", label: "Firebase" },
                        { src: "/skills-logos/bootstrap.png", alt: "Bootstrap", label: "Boostrap" },
                        { src: "/skills-logos/tailwind.png", alt: "TailwindCSS", label: "TailwindCSS" }
                    ].map((skill, index) => (
                        <div key={index} className="skills-container py-6" data-aos="fade-up" data-aos-delay={index * 50}>
                            <div className="w-1/4 flex justify-center">
                                <img src={skill.src} alt={skill.alt} className="max-w-full max-h-full object-contain"/>
                            </div>
                            <div className="w-3/4 pl-4">
                                <h3 className="text-base text-[12px] md:text-[16px] font-medium text-black">{skill.label}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
