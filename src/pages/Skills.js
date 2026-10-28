import React from 'react';
import { skillGroups } from '../data';

export default function Skills() {
  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-inner">
          <span className="lbl lbl-light">What I Build With</span>
          <h2 className="s-heading s-heading-light">
            Skills
          </h2>
          <div className="skills-card-grid">
            {skillGroups.map(g => (
              <div key={g.cat} className="skill-card">
                <span className="pcard-label">{g.items.length} tools</span>
                <h3 className="pcard-title">{g.cat}</h3>
                <div className="skill-pills-wrap">
                  {g.items.map(s => (
                    <span key={s} className="pcard-tag">{s}</span>
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
