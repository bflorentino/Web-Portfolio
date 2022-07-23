import React from 'react';
import Nav from './components/navigation/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ScrollButton from './components/scroll/ScrollButton';

const Portfolio = () => {
  return (
    <div className='w-full'>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Portfolio;