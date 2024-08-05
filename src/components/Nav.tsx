import React from 'react';

const Nav = () => {
  return (
    <header className="w-full h-[10vh] shadow-md bg-[#FCFCFC]">
    <div className="container mx-auto h-full flex items-center justify-between px-[6rem]">
      <h1 className="text-xl font-bold">
        Andrew
        <span className="text-blue-500">
            .
        </span>
        dev
      </h1>
      <nav>
        <ul className="flex space-x-10">
          <li><a href="#home" className="hover:text-blue-500 transition-colors text-[14px]">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition-colors text-[14px]">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition-colors text-[14px]">Skills</a></li>
          <li><a href="#resume" className="hover:text-blue-500 transition-colors text-[14px]">Resume</a></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Nav;