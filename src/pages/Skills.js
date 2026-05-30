import React from 'react';
import { skillGroups } from '../data';

export default function Skills() {
  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <span className="lbl lbl-light">What I Build With</span>
          <h2 className="s-heading s-heading-light">Skills</h2>
          <div className="skills-card-grid">
            {skillGroups.map(g => (
              <div key={g.cat} className="skill-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', fontFamily: "'Space Grotesk',sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {g.cat}
                  </span>
                </div>
                <div className="skill-pills-wrap">
                  {g.items.map(s => (
                    <span key={s} className="skill-pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
