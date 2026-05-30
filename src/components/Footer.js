import React from 'react';

function getWeekday() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

export default function Footer() {
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
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.05em', opacity: 0.4 }}>
        Have a good {getWeekday()}.
      </span>
    </footer>
  );
}
