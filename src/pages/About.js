import React, { useState, useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from '../App';

export default function About() {
  const { theme } = useTheme();
  const [showBracket, setShowBracket] = useState(false);
  const accentColor = theme === 'dark' ? '#659BB9' : '#536878';

  useEffect(() => {
    const t = setTimeout(() => setShowBracket(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-inner">
          <span className="lbl lbl-light">Background</span>
          <h2 className="s-heading s-heading-light">About</h2>

          <div className="about-flex">
            <div className="about-photo-col">
              <div className="about-photo-ring">
                <img src="/image.png" alt="Naina Sachdev" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '0.82rem', marginBottom: '0.2rem', fontFamily: "'Space Grotesk',sans-serif" }}>
                  Naina Sachdev
                </p>
                <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Full-Stack · Web3 · AI
                </p>
              </div>
            </div>

            <div className="about-bio-col">
              <RoughNotation type="bracket" brackets={['left', 'right']}
                show={showBracket} color={accentColor} strokeWidth={1.8} animationDuration={900} padding={8}>
                <div style={{ padding: '0.25rem 0' }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.25rem', color: 'var(--text)' }}>
                  I'm a developer who builds at the intersection of decentralized systems and AI, with a Bachelor's in AI and Data Science Engineering. My work spans the full stack - onchain protocol logic, backend infrastructure, and the interfaces that tie it all together.
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.25rem', color: 'var(--text)' }}>
                  I care about making Web3 more adaptable and AI actually useful rather than noise - and shipping things that are fast and reliable. I like understanding how things work under the hood, not just making them run.
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '1.25rem', color: 'var(--text)' }}>
                  Outside of work, I stay close to what's emerging - new protocols, new models, new primitives. I am active part of web3 builder communities. You'll find me at hackathons, builder meetups, and ecosystem events, or deep in a rabbit hole about whatever I'm currently building.
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text)' }}>
                  I also write about what I'm learning and building -{' '}
                  <a href="https://nainaasachdev.substack.com/" target="_blank" rel="noopener noreferrer" style={{ color: accentColor, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    read my thoughts on Substack
                  </a>.
                  </p>
                </div>
              </RoughNotation>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
