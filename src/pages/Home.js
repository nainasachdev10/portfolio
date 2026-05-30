import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from '../App';

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function Home() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [showLine, setShowLine] = useState(false);
  const accentColor = theme === 'dark' ? '#cfe5fa' : '#31487A';
  const profileImg = theme === 'dark' ? '/light_profile.png' : '/blue_profile.png';

  useEffect(() => {
    const t = setTimeout(() => setShowLine(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-center">
          <div className="hero-avatar-col">
            <img src={profileImg} alt="Naina" className="hero-avatar-img" />
          </div>

          <div className="hero-content-col">
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 700,
              color: 'var(--text)', lineHeight: 1.05, marginBottom: '1rem',
              fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '-0.03em',
            }}>
              Hi, I'm Naina.
            </h1>

            <p style={{ fontSize: 'clamp(0.82rem, 1.4vw, 0.98rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', letterSpacing: '0.05em', lineHeight: 1.7, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>
              Full-Stack &nbsp;·&nbsp; Web3 &nbsp;·&nbsp; AI
            </p>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: '440px', marginBottom: '2.25rem' }}>
            Building and shipping products at the intersection of web3 ad AI. {''}
              <button onClick={() => navigate('/projects')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text)', font: 'inherit' }}>
                <RoughNotation type="underline" show={showLine} color={accentColor} animationDuration={1600} strokeWidth={1.5}>
                Checkout my projects
                </RoughNotation>
              </button>
              {' '} or {' '}              
              <button onClick={() => navigate('/contact')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text)', font: 'inherit' }}>
                <RoughNotation type="underline" show={showLine} color={accentColor} animationDuration={1600} strokeWidth={1.5}>
                  reach out to chat!
                </RoughNotation>
              </button> 
            </p>

            <a
              href="https://docs.google.com/document/d/1ioKoaqr6cEQX3viOitwbKynTcurK5phSjvFs5_3KQ3g/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.65rem 1.4rem',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                color: 'var(--accent)',
                fontSize: '0.78rem', fontWeight: 700,
                fontFamily: "'Space Grotesk',sans-serif",
                letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
              </svg>
              Resume
            </a>
          </div>
        </div>

        <button
          onClick={() => navigate('/about')}
          className="bounce-y"
          style={{
            position: 'absolute', bottom: '2.25rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
            color: 'var(--text-muted)', opacity: 0.45, zIndex: 2,
            background: 'none', border: 'none', cursor: 'pointer',
          }}
          aria-label="Go to About"
        >
          <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: "'Space Grotesk',sans-serif" }}>About</span>
          <ChevronDown />
        </button>
      </section>
    </main>
  );
}
