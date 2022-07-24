import React, { useState } from 'react';
import Nav from './components/navigation/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ScrollButton from './components/scroll/ScrollButton';
import { langContext } from './context/langsContext';
import { dictionaries } from './language/langs';

const Portfolio = () => {

  const [ language, setLanguage ] = useState(window.localStorage.getItem("lang-option") || "es");
  
  const handleLanguage = (newLang: string) => {

    window.localStorage.setItem("lang-option", newLang)
    setLanguage(newLang);
  }

  const languagesUtils = {
    language,
    dictionary : dictionaries[language as keyof typeof dictionaries],
    handleLanguage,
  }

  return (
    <div className='w-full'>
      <langContext.Provider value={languagesUtils}>
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollButton />
      </langContext.Provider>
    </div>
  );
}

export default Portfolio;