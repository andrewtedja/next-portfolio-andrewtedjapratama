import React, { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contacts";
import About from "@/components/About";

const HomePage = () => {
    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
    <div className="overflow-x-hidden">
        <div>
            <MobileNav nav={nav} closeNav={closeNav}/>
            <Nav openNav={openNav} closeNav={closeNav}/>
            <div className="pt-[10vh]">
                <div id="hero">
                    <Hero />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="contacts">
                    <Contacts />
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePage;
