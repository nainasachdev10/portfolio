import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/nainasachdev10", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/naina-sachdev/", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://x.com/Nainasachdev11", label: "X (Twitter)" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="contact-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column: Heading, Desc, Contact Details, Socials */}
          <motion.div className="contact-left" variants={itemVariants}>
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or just want to say hello.
            </p>
            
            {/* Contact Details */}
            <div className="contact-details" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <a href="mailto:nainasachdev01@gmail.com" className="contact-link" aria-label="Send email">
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(212, 165, 165, 0.08)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fas fa-envelope"></i>
                  <span>nainasachdev01@gmail.com</span>
                </motion.div>
              </a>
              <a href="https://t.me/nainasachdev" className="contact-link" aria-label="Open Telegram chat" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(212, 165, 165, 0.08)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <i className="fab fa-telegram-plane"></i>
                  <span>@nainasachdev</span>
                </motion.div>
              </a>
              <motion.div 
                className="contact-item"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 182, 193, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>Mumbai, India</span>
              </motion.div>
            </div>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 4px 12px rgba(212, 165, 165, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 