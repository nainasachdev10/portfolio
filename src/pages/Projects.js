import React, { useState } from 'react';
import { projects } from '../data';

const INITIAL_COUNT = 6;

const GH = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const Globe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const iconLinkStyle = { color: 'var(--text)', opacity: 0.65, display: 'flex', transition: 'opacity 0.2s' };
const iconLinkHover = e => { e.currentTarget.style.opacity = '1'; };
const iconLinkLeave = e => { e.currentTarget.style.opacity = '0.65'; };

function ProjCard({ project }) {
  return (
    <div className="proj-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
        <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          {project.label}
        </span>
        <div style={{ display: 'flex', gap: '0.55rem', alignItems: 'center' }}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={iconLinkStyle}
              onMouseEnter={iconLinkHover} onMouseLeave={iconLinkLeave}
              aria-label={`Live demo: ${project.title}`}>
              <Globe />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={iconLinkStyle}
              onMouseEnter={iconLinkHover} onMouseLeave={iconLinkLeave}
              aria-label={`GitHub: ${project.title}`}>
              <GH />
            </a>
          )}
        </div>
      </div>
      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, marginBottom: '0.6rem', fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text)', lineHeight: 1.35 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.84rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.2rem', flex: 1 }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: '0.67rem', fontWeight: 500, padding: '0.16rem 0.5rem',
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: '3px', color: 'var(--text-muted)',
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT);
  const remaining = projects.length - INITIAL_COUNT;

  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="section-inner">
          <span className="lbl lbl-light">My Work</span>
          <h2 className="s-heading s-heading-light">Projects</h2>
          <div className="proj-grid">
            {visible.map((p, i) => <ProjCard key={i} project={p} />)}
          </div>

          {projects.length > INITIAL_COUNT && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
              <button
                onClick={() => setExpanded(e => !e)}
                style={{
                  fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text)',
                  background: 'none', border: '1px solid var(--border)', borderRadius: '4px',
                  padding: '0.7rem 1.4rem', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
              >
                {expanded ? 'Show Less' : `Load More (${remaining})`}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
