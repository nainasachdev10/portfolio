import React from 'react';
import { experiences } from '../data';

function ExpItem({ exp, isLast }) {
  return (
    <div style={{ display: 'flex', gap: '1.75rem', marginBottom: isLast ? 0 : '3rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '0.5rem' }}>
        <div style={{
          width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0,
          boxShadow: '0 0 0 3px var(--accent, #659BB9)1a, 0 0 0 6px var(--accent, #659BB9)0a',
        }} />
        {!isLast && <div style={{ width: 1, flex: 1, marginTop: '0.75rem', background: 'var(--border)' }} />}
      </div>
      <div style={{ paddingBottom: isLast ? 0 : '0.5rem' }}>
        <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.45rem' }}>
          {exp.label.includes('Present')
            ? <>
                {exp.label.replace('Present', '')}
                <span style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationThickness: '1.5px', textUnderlineOffset: '2px' }}>
                  Present
                </span>
              </>
            : exp.label}
        </span>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.25, marginBottom: '0.65rem' }}>
          <span style={{ color: 'var(--text)' }}>{exp.title}</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}> @ </span>
          <span style={{ color: '#0077b6' }}>{exp.org}</span>
        </h3>
        <p style={{ fontSize: '0.86rem', lineHeight: 1.82, color: 'var(--text-muted)', maxWidth: '740px' }}>
          {exp.desc}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <div>
            <span className="lbl lbl-light">My Journey</span>
            <h2 className="s-heading s-heading-light">Experience</h2>
            {experiences.map((exp, i) => (
              <ExpItem key={i} exp={exp} isLast={i === experiences.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
