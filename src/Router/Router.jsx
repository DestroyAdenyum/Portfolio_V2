import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Layout/Main';

import AboutMe from "../Pages/AboutMe";
import Skills from '../Pages/Skills';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Error from '../Components/Error';

function Router() {
  return (
    <Routes>
      <Route path="/" element={Main}/>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
