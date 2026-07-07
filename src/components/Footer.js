import React from 'react';
import { contactItems } from '../data';

function getWeekday() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

const GitHub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const LinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17V9.99H6.01V17h2.33zM7.17 8.93a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7zM18 17v-3.84c0-2.05-1.09-3-2.55-3-1.18 0-1.71.65-2 1.11V9.99H11.1c.03.66 0 7.01 0 7.01h2.33v-3.91c0-.21.02-.42.08-.57.16-.42.55-.85 1.19-.85.84 0 1.17.64 1.17 1.57V17H18z"/>
  </svg>
);
const XLogo = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);
const Telegram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const Mail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const iconByPlatform = {
  Email: Mail,
  GitHub: GitHub,
  Telegram: Telegram,
  LinkedIn: LinkedIn,
  'Twitter / X': XLogo,
};
const order = ['GitHub', 'LinkedIn', 'Twitter / X', 'Telegram', 'Email'];

export default function Footer() {
  const socials = order
    .map(p => contactItems.find(c => c.platform === p))
    .filter(Boolean);

  return (
    <footer style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 997,
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '0.85rem clamp(1.5rem,6%,5rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '0.5rem',
    }}>
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', opacity: 0.5 }}>
        &copy; {new Date().getFullYear()} Naina Sachdev
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {socials.map(item => {
            const Icon = iconByPlatform[item.platform];
            return (
              <a
                key={item.platform}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={item.platform}
                style={{ color: 'var(--text-muted)', opacity: 0.55, display: 'flex', transition: 'opacity 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.55'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <Icon />
              </a>
            );
          })}
        </div>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', opacity: 0.4 }}>
          Have a good {getWeekday()}.
        </span>
      </div>
    </footer>
  );
}
