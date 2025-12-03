import React from 'react';

const CrystalBall = ({ size = 38, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ball */}
    <defs>
      <radialGradient id="ballGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fff7fa" stopOpacity="0.95" />
        <stop offset="60%" stopColor="#b39ddb" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#6a5acd" stopOpacity="0.7" />
      </radialGradient>
      <radialGradient id="shine" cx="30%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a67c52" />
        <stop offset="100%" stopColor="#6e4b1f" />
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="30" rx="22" ry="22" fill="url(#ballGradient)" />
    <ellipse cx="26" cy="22" rx="8" ry="4" fill="url(#shine)" opacity="0.7" />
    <ellipse cx="40" cy="18" rx="4" ry="2" fill="#fff" opacity="0.4" />
    <ellipse cx="38" cy="36" rx="6" ry="2.5" fill="#fff" opacity="0.18" />
    {/* Sparkles */}
    <circle cx="44" cy="24" r="2" fill="#fff" opacity="0.7" />
    <circle cx="28" cy="16" r="1.2" fill="#fff" opacity="0.6" />
    {/* Base */}
    <ellipse cx="32" cy="54" rx="14" ry="5" fill="url(#baseGradient)" />
    <ellipse cx="32" cy="58" rx="10" ry="2.5" fill="#6e4b1f" opacity="0.7" />
  </svg>
);

export default CrystalBall; 