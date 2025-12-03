import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Thank you!
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer; 