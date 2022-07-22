import React from 'react';
import Nav from './components/navigation/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const Portfolio = () => {
  return (
    <div className='w-full'>
      <Nav />
      <About />
      <Skills />
    </div>
  );
}

export default Portfolio;