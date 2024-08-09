import React, { useState } from "react";
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import MobileNav from "@/components/MobileNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {

    const [nav, setNav] = useState(false);
    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
    <div className="overflow-x-hidden">
        <div>
            {/* Nav */}
            <MobileNav nav={nav} closeNav={closeNav}/>
            <Nav openNav={openNav} closeNav={closeNav}/>
            {/* Section: Hero */}
            <Hero />
            <Projects />
            <Skills />
        </div>
    </div>
    )
}

export default HomePage;