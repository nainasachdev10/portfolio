import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { sounds } from '../../utils/sounds';
import './cat.css';

const SPEED = 140;      // px per second
const SLEEP_AFTER = 4000;

function WalkingCat({ state }) {
  return (
    <svg viewBox="0 0 44 30" className={`cat cat--${state}`} aria-hidden="true">
      <path className="cat-tail" d="M10 17 C4 16 2.5 9 6 4.5" />
      <g className="cat-legs cat-legs--a">
        <line x1="14" y1="20" x2="13" y2="27.5" />
        <line x1="29" y1="20" x2="30" y2="27.5" />
      </g>
      <g className="cat-legs cat-legs--b">
        <line x1="17" y1="20" x2="18" y2="27.5" />
        <line x1="26" y1="20" x2="25" y2="27.5" />
      </g>
      <g className="cat-bodygroup">
        <ellipse className="cat-fill" cx="21" cy="17" rx="12" ry="6.2" />
        <path className="cat-fill" d="M29.5 9.5 L30.5 3 L34 8 Z" />
        <path className="cat-fill" d="M35 8 L38.5 3.2 L39 10 Z" />
        <circle className="cat-fill" cx="34.5" cy="12.5" r="6" />
        <circle className="cat-eye" cx="36.8" cy="11.8" r="1" />
        <path className="cat-whisker" d="M39.5 13.5 h3.5 M39.3 15 l3.2 1" />
      </g>
    </svg>
  );
}

function SleepingCat() {
  return (
    <svg viewBox="0 0 44 30" className="cat cat--sleep" aria-hidden="true">
      <g className="cat-breathe">
        <ellipse className="cat-fill" cx="20" cy="21" rx="13" ry="7" />
        <path className="cat-fill" d="M26 15 L27 9.5 L30.5 14 Z" />
        <path className="cat-fill" d="M31 14 L34.5 10 L35 16 Z" />
        <circle className="cat-fill" cx="30.5" cy="19" r="5.4" />
        <path className="cat-closed" d="M29.6 19 q1.5 1.3 3 0" />
        <path className="cat-tail-curl" d="M8 24 C 9 30, 30 30, 34 25.5" />
      </g>
    </svg>
  );
}

// A small cat that lives on the top edge of the nav. It walks to the active
// section's button, swishes its tail while it waits, then curls up to sleep.
export default function NavCat({ targetX }) {
  const x = useMotionValue(targetX ?? 0);
  const [state, setState] = useState('idle');   // walk | idle | sleep
  const [facing, setFacing] = useState(1);
  const [meowing, setMeowing] = useState(false);
  const placed = useRef(targetX != null);
  const sleepTimer = useRef(null);

  const restSoon = () => {
    clearTimeout(sleepTimer.current);
    setState('idle');
    sleepTimer.current = setTimeout(() => setState('sleep'), SLEEP_AFTER);
  };

  useLayoutEffect(() => {
    if (targetX == null) return;
    if (!placed.current) { placed.current = true; x.set(targetX); restSoon(); return; }
    const dx = targetX - x.get();
    if (Math.abs(dx) < 1) return;
    clearTimeout(sleepTimer.current);
    setFacing(dx > 0 ? 1 : -1);
    setState('walk');
    const anim = animate(x, targetX, {
      duration: Math.max(0.35, Math.abs(dx) / SPEED), ease: 'linear',
      onComplete: restSoon,
    });
    return () => anim.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetX]);

  useEffect(() => () => clearTimeout(sleepTimer.current), []);

  const pet = () => {
    sounds.meow();
    setMeowing(true);
    setTimeout(() => setMeowing(false), 1100);
    if (state !== 'walk') restSoon();
  };

  if (targetX == null) return null;

  return (
    <motion.button type="button" className="nav-cat" style={{ x }} onClick={pet}
      aria-label="Pet the cat" title="Meow?">
      <span className="nav-cat-flip" style={{ transform: `scaleX(${state === 'sleep' ? 1 : facing})` }}>
        {state === 'sleep' ? <SleepingCat /> : <WalkingCat state={state} />}
      </span>
      {state === 'sleep' && !meowing && (
        <span className="nav-cat-z" aria-hidden="true"><i>z</i><i>z</i><i>z</i></span>
      )}
      {meowing && <span className="nav-cat-meow" aria-hidden="true">meow!</span>}
    </motion.button>
  );
}
