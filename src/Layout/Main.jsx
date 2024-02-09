import React from "react";

import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';

function Main() {
    return(
        <main className="min-h-screen w-full bg-gray-700">
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default Main;
