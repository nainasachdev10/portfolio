import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
  </svg>
);

const navLinks = [
  { href: '#hero',       label: 'Home',       id: 'hero' },
  { href: '#about',      label: 'About',      id: 'about' },
  { href: '#projects',   label: 'Projects',   id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#contact',    label: 'Contact',    id: 'contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [spinning, setSpinning] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  const handleToggle = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 500);
    toggleTheme();
  };

  useEffect(() => {
    const ids = navLinks.map(l => l.id);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 2.5rem', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map(link => {
            const active = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="link-underline"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: active ? 600 : 400,
                  color: 'var(--text)',
                  opacity: active ? 1 : 0.7,
                  transition: 'opacity 0.2s',
                  paddingBottom: '2px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.opacity = '0.7'; }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
          {[
            { href: 'mailto:nainasachdev01@gmail.com', icon: <MailIcon />, label: 'Email' },
            { href: 'https://github.com/nainasachdev10', icon: <GitHubIcon />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/naina-sachdev/', icon: <LinkedInIcon />, label: 'LinkedIn' },
          ].map(item => (
            <a key={item.label} href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer" aria-label={item.label}
              style={{ color: 'var(--text)', opacity: 0.6, display: 'flex', transition: 'opacity 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '0.6'; }}
            >
              {item.icon}
            </a>
          ))}
          <button onClick={handleToggle} aria-label="Toggle theme" style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: isDark ? '#222' : '#e8e5df',
            border: `1px solid ${isDark ? '#333' : '#ccc'}`,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text)', transition: 'background 0.2s',
          }}>
            <span className={spinning ? 'hover-spin' : ''} style={{ display: 'flex' }}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
