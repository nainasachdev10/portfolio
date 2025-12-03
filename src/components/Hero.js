import React from 'react';
import { motion } from 'framer-motion';
import TypewriterHeading from './TypewriterHeading';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" style={{ position: 'relative' }}>
      <div className="hero-container" style={{ gridTemplateColumns: '1fr', position: 'relative', textAlign: 'justify' }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ display: 'flex', alignItems: 'justify', gap: '0.5rem' }}
          >
            <TypewriterHeading 
              text="Hi, I'm Naina!"
              className="hero-title"
              speed={120}
              delay={1000}
            />
          </motion.div>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            style={{ textAlign: 'justify' }}
          >
            Weaving purpose, AI, and Web3 into elegant full-stack experiences.
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{ textAlign: 'justify' }}
          >
            A full-stack dev exploring Web3 and AI, learning to build with creativity and curiosity.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <motion.a 
              href="https://docs.google.com/document/d/1ioKoaqr6cEQX3viOitwbKynTcurK5phSjvFs5_3KQ3g/edit?usp=sharing"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
          >
              My Resume
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;