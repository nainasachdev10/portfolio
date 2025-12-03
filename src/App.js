import React, { useState } from 'react';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sparkles from './components/Sparkles';
import CustomCursor from './components/CustomCursor';
import BrewingMagicLanding from './components/BrewingMagicLanding';

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return showLanding ? (
    <BrewingMagicLanding onFinish={() => setShowLanding(false)} />
  ) : (
    <div className="App">
      <CustomCursor />
      <Sparkles />
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 