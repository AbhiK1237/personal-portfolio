import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
};

export default Home;
