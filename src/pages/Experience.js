import React, { useState } from 'react';
import { experiences, achievements } from '../data';

const ExtArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

function AchievementItem({ item, isLast }) {
  const [hov, setHov] = useState(false);
  const hasLink = Boolean(item.href);
  const titleColor = hov && hasLink ? 'var(--accent)' : 'var(--text)';

  const heading = (
    <p style={{
      fontSize: '0.95rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif",
      color: titleColor, lineHeight: 1.3, marginBottom: '0.35rem',
      transition: 'color 0.22s', display: 'flex', alignItems: 'center', gap: '0.45rem',
    }}>
      {item.title}
      {hasLink && (
        <span style={{
          color: 'var(--accent)', display: 'flex', flexShrink: 0,
          opacity: hov ? 1 : 0.5, transform: hov ? 'translate(2px,-2px)' : 'none',
          transition: 'opacity 0.22s, transform 0.22s',
        }}>
          <ExtArrow />
        </span>
      )}
    </p>
  );

  return (
    <div style={{ display: 'flex', gap: '1.1rem', marginBottom: isLast ? 0 : '1.25rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: '0.4rem' }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid var(--accent)', background: 'var(--bg)', flexShrink: 0 }} />
        {!isLast && <div style={{ width: 1, flex: 1, marginTop: '0.5rem', background: 'var(--border)' }} />}
      </div>
      <div style={{ flex: 1 }}>
        {hasLink ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ textDecoration: 'none', display: 'block' }}>
            {heading}
          </a>
        ) : heading}
        <p style={{ fontSize: '0.84rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '680px' }}>
          {item.desc}
        </p>
        {item.bracket && (
          <a href={item.bracket.href} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.5rem',
              fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--accent)', textDecoration: 'none',
              border: '1px solid var(--border)', borderRadius: '4px', padding: '0.22rem 0.5rem',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
            {item.bracket.label}
            <ExtArrow />
          </a>
        )}
      </div>
    </div>
  );
}

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

            <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
              <span className="lbl lbl-light" style={{ display: 'block', marginBottom: '0.5rem' }}>Wins & Recognition</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                Achievements
              </h3>
              {achievements.map((item, i) => (
                <AchievementItem key={i} item={item} isLast={i === achievements.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
