import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export const ThemeContext = createContext();
export function useTheme() { return useContext(ThemeContext); }

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <ScrollToTop />
        <FloatingNav />
        <ThemeToggle />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills"     element={<Skills />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
