import React, { useState, useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { useTheme } from '../App';
import { contactItems } from '../data';

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

function ContactRow({ item, accentColor }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={item.href}
      target={item.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.35rem 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', minWidth: 0, flex: 1 }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text)', flexShrink: 0, minWidth: 90, opacity: 0.85 }}>
          {item.platform}
        </span>
        <span style={{
          fontSize: 'clamp(0.85rem,1.8vw,1.25rem)', fontWeight: 600,
          color: hov ? accentColor : 'var(--text-muted)',
          fontFamily: "'Space Grotesk',sans-serif",
          transition: 'color 0.22s', letterSpacing: '-0.01em',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {item.handle}
        </span>
      </div>
      <span style={{ color: hov ? accentColor : 'var(--border)', flexShrink: 0, display: 'flex', marginLeft: '1rem', transition: 'color 0.22s, transform 0.22s', transform: hov ? 'translateX(4px)' : 'none' }}>
        <Arrow />
      </span>
    </a>
  );
}

export default function Contact() {
  useTheme();
  const [showLine, setShowLine] = useState(false);
  const accentColor = '#3B7DD8';

  useEffect(() => {
    const t = setTimeout(() => setShowLine(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-inner" style={{ maxWidth: '700px' }}>
          <span className="lbl lbl-light">Get In Touch</span>
          <h2 className="s-heading s-heading-light">Get in Touch</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.85, marginBottom: '3rem' }}>
            Open to opportunities, collaborations, and conversations.{' '}
            <span style={{ color: 'var(--text)' }}>
              <RoughNotation type="underline" show={showLine} color={accentColor} animationDuration={1000} strokeWidth={1.5}>
                Always happy to chat.
              </RoughNotation>
            </span>
          </p>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {contactItems.map((item, i) => <ContactRow key={i} item={item} accentColor={accentColor} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
