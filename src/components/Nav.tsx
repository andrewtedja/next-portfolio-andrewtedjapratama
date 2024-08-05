import React from 'react';
import { Bars3Icon } from "@heroicons/react/20/solid"

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  return (
    <header className="w-[100%] h-[10vh] shadow-md bg-[#FCFCFC]">
    <div className="max-w-[80%] mx-auto h-full flex items-center justify-between">
      <h1 className="text-3xl font-bold">
        Andrew
        <span className="text-blue-500 text-4xl">
        .
        </span>
        dev
      </h1>
      <nav className="flex ml-auto">
        <ul className="flex space-x-11">
          <li ><a href="#home" className="nav-link ">Home</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#resume" className="nav-link">Resume</a></li>
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