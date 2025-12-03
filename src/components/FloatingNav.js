import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', icon: 'fa-home', label: 'Home', iconPrefix: 'fas' },
  { id: 'about', icon: 'fa-user', label: 'About', iconPrefix: 'fas' },
  { id: 'skills', icon: 'fa-code', label: 'Skills', iconPrefix: 'fas' },
  { id: 'projects', icon: 'fa-folder-open', label: 'Projects', iconPrefix: 'fas' },
  { id: 'contact', icon: 'fa-paper-plane', label: 'Contact', iconPrefix: 'far' },
];

const FloatingNav = () => {
  const [active, setActive] = useState('home');

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = 'home';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            found = item.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`floating-nav-btn${active === item.id ? ' active' : ''}`}
          onClick={() => scrollToSection(item.id)}
          aria-label={item.label}
        >
          <i className={`${item.iconPrefix} ${item.icon}`}></i>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav; 