import React, { useEffect, useState } from 'react';

const BrewingMagicLanding = ({ onFinish }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = 'Brewing Magic...';

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typeInterval);
        // Wait a moment, then fade out
        setTimeout(() => {
          setFadeOut(true);
          // Trigger onFinish after fade completes
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
        }, 500);
      }
    }, 90);
    return () => clearInterval(typeInterval);
  }, [onFinish]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        boxSizing: 'border-box',
        padding: '0 1rem',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        willChange: 'opacity',
      }}
    >
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2.5rem',
          color: '#f5f5f5',
          textShadow: '0 0 4px rgba(201, 154, 154, 0.3), 0 0 8px rgba(201, 154, 154, 0.2)',
          marginBottom: '1.5rem',
          letterSpacing: '0.05em',
          zIndex: 2,
          fontWeight: 700,
          whiteSpace: 'pre',
        }}
      >
        {displayedText}
        <span style={{
          display: 'inline-block',
          width: '1ch',
          background: 'none',
          color: '#c99a9a',
          animation: fadeOut ? 'none' : 'blink 1s steps(1) infinite',
        }}>|</span>
      </h1>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 700px) {
          h1 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BrewingMagicLanding; 