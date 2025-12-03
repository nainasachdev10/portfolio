import React from 'react';
import { motion } from 'framer-motion';

const GlimmerHeading = ({ children, className, tag: Tag = 'h2', ...props }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Tag className={className} {...props}>
        {children}
      </Tag>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent)',
          borderRadius: '4px',
          pointerEvents: 'none',
        }}
        animate={{
          left: ['-100%', '200%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default GlimmerHeading; 