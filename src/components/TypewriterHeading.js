import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterHeading = ({ text, className, tag: Tag = 'h1', speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const startTimeout = setTimeout(() => {
        setIsTyping(true);
        setCurrentIndex(1);
        setDisplayText(text[0] || '');
      }, delay);
      return () => clearTimeout(startTimeout);
    } else if (currentIndex > 0 && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <Tag className={className}>
      {displayText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ marginLeft: '2px' }}
        >
          |
        </motion.span>
      )}
    </Tag>
  );
};

export default TypewriterHeading; 