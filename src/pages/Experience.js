import React from 'react';
import { experiences } from '../data';

function Label({ text }) {
  if (!text.includes('Present')) return <>{text}</>;
  return (
    <>
      {text.replace('Present', '')}
      <span style={{ color: 'var(--accent)', textDecoration: 'underline', textDecorationThickness: '1.5px', textUnderlineOffset: '2px' }}>
        Present
      </span>
    </>
  );
}

function ExpItem({ exp, isLast }) {
  const isGrouped = Boolean(exp.roles);

  return (
    <div style={{ display: 'flex', gap: '1.75rem', marginBottom: isLast ? 0 : '3rem' }}>
      {/* Timeline column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '0.5rem' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
        {!isLast && <div style={{ width: 1, flex: 1, marginTop: '0.75rem', background: 'var(--border)' }} />}
      </div>

      {/* Content column */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : '0.5rem' }}>
        {isGrouped ? (
          <>
            {/* Company header */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.25, marginBottom: '1rem' }}>
              <span style={{ color: '#0077b6' }}>{exp.org}</span>
            </h3>

            {/* All roles — equal hollow-dot subsections */}
            {exp.roles.map((role, ri) => (
              <div key={ri} style={{ display: 'flex', gap: '1.1rem', marginBottom: ri === exp.roles.length - 1 ? 0 : '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '0.35rem' }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid var(--accent)', background: 'var(--bg)', flexShrink: 0 }} />
                  {ri < exp.roles.length - 1 && (
                    <div style={{ width: 1, flex: 1, marginTop: '0.5rem', background: 'var(--border)' }} />
                  )}
                </div>
                <div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                    <Label text={role.label} />
                  </span>
                  <p style={{ fontSize: '1rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text)', marginBottom: '0.4rem' }}>
                    {role.title}
                  </p>
                  <p style={{ fontSize: '0.86rem', lineHeight: 1.82, color: 'var(--text-muted)', maxWidth: '740px' }}>
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {/* Company header */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1.25, marginBottom: '1rem' }}>
              <span style={{ color: '#0077b6' }}>{exp.org}</span>
            </h3>
            <div>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                <Label text={exp.label} />
              </span>
              <p style={{ fontSize: '1rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text)', marginBottom: '0.4rem' }}>
                {exp.title}
              </p>
              <p style={{ fontSize: '0.86rem', lineHeight: 1.82, color: 'var(--text-muted)', maxWidth: '740px' }}>
                {exp.desc}
              </p>
            </div>
          </>
        )}
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
