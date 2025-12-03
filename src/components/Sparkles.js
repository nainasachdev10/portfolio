import React from 'react';
import { motion } from 'framer-motion';

const Sparkles = () => {
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2
  }));

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default Sparkles; 