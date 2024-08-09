import React, { useState, useEffect } from 'react';
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from 'react-scroll';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveNav(section);
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full h-[10vh] bg-[#FCFCFC] z-10 transition-shadow duration-300 ${isScrolled ? 'shadow-md bg-opacity-90' : ''}`}>
      <div className="max-w-[80%] mx-auto h-full flex items-center justify-between">
        <h1 className="text-3xl font-bold cursor-pointer">
          Andrew
          <span className="text-blue-500 text-4xl">
            .
          </span>
          dev
        </h1>
        <nav className="flex ml-auto">
          <ul className="flex space-x-11">
            <li>
              <Link 
                to="hero" 
                smooth={true} 
                duration={500} 
                offset={-60}
                className={`nav-link ${activeNav === '#home' ? 'active' : ''}`} 
                onClick={() => handleNavClick('#home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-60}
                className={`nav-link ${activeNav === '#projects' ? 'active' : ''}`} 
                onClick={() => handleNavClick('#projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                offset={-60} 
                className={`nav-link ${activeNav === '#skills' ? 'active' : ''}`} 
                onClick={() => handleNavClick('#skills')}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="resume" 
                smooth={true} 
                duration={500} 
                offset={-60}
                className={`nav-link ${activeNav === '#resume' ? 'active' : ''}`} 
                onClick={() => handleNavClick('#resume')}
              >
                Resume
              </Link>
            </li>
          </ul>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-black"/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
