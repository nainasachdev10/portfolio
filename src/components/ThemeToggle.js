import React, { useState } from 'react';
import { useTheme } from '../App';
import { sounds } from '../utils/sounds';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
  </svg>
);

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [anim, setAnim] = useState(false);

  const handle = () => {
    setAnim(true);
    setTimeout(() => setAnim(false), 500);
    if (theme === 'light') sounds.themeOn(); else sounds.themeOff();
    toggleTheme();
  };

  return (
    <button
      onClick={handle}
      aria-label="Toggle theme"
      className={`theme-toggle-btn${anim ? ' theme-toggle-pop' : ''}`}
    >
      <span className={anim ? 'theme-toggle-spin' : ''} style={{ display: 'flex' }}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}
