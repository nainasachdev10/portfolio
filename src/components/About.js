import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CrystalBall from './CrystalBall';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

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

  const topBallRef = useRef(null);
  const bottomBallRef = useRef(null);
  const containerRef = useRef(null);

  // Helper style for vertical alignment
  const crystalBallAlignStyle = { marginTop: '2px' };

  useEffect(() => {
    function updateLine() {
      if (topBallRef.current && bottomBallRef.current && containerRef.current) {
        // Function kept for potential future use but variables removed
      }
    }
    updateLine();
    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, []);

  // Experience steps in desired order
  const experienceSteps = [
    {
      title: 'MyOpini, Full Stack Developer - Intern',
      sub: 'April 2025 – Present',
      desc: 'Leading fullstack development, implementing complex designs, optimizing performance, integrating smart contracts, developing on BASE, and mentoring an intern for scalable, high-quality project delivery.'
    },
    {
      title: 'Dev3Pack Fellow',
      sub: 'June 2025 – Present',
      desc: 'Selected for a web3 builder fellowship, collaborating on decentralized projects with developers from web2 backgrounds.'
    },
    {
      title: 'SheFi Scholar',
      sub: 'Feb 2025 – April 2025',
      desc: 'Awarded a scholarship to join a global women-led Web3 cohort, engaging in hands-on DeFi and blockchain learning.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About Me (left) and Experience (right) as vertical sections side by side */}
          <div
            className="edu-exp-wrapper"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2.5rem',
              marginTop: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {/* About Me Section */}
            <motion.div 
              style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column' }}
              variants={itemVariants}
            >
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'left', marginBottom: '1rem' }}
              >
                About Me
              </motion.h2>
              <motion.div className="about-text" variants={itemVariants}>
                <motion.p variants={itemVariants} style={{ textAlign: 'justify', marginBottom: '1rem' }}>
                  I'm an AI and Data Science engineering student exploring how Web3, AI, and creativity can 
                  come together to build useful, meaningful things. I enjoy working on projects that 
                  solve real problems at the intersection of AI and Web3.
                </motion.p>
                <motion.p variants={itemVariants} style={{ textAlign: 'justify' }}>
                  Outside of building, I like experimenting with new Web3 tools and protocols, 
                  and being part of communities that support and teach each other in the decentralized space. 
                  I'm still figuring things out, but I'm here to grow, stay curious, and keep building the future of the web.
                </motion.p>
              </motion.div>
            </motion.div>
            {/* Experience Section */}
            <div style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                marginBottom: '0.8rem',
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                color: 'var(--muted-pink-2)',
                fontWeight: 700,
                textTransform: 'uppercase',
                textAlign: 'left',
              }}>Experience</div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                {experienceSteps.map((step, idx) => (
                  <div key={idx} style={{
                    width: '100%',
                    background: 'rgba(42, 42, 42, 0.3)',
                    borderRadius: '0.8rem',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(212, 165, 165, 0.1)',
                    padding: '1rem 1rem 0.8rem 1rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    position: 'relative',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'none';
                  }}
                  >
                    <div style={{ flexShrink: 0, ...crystalBallAlignStyle }}><CrystalBall size={38} /></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--muted-pink-2)', lineHeight: 1.2 }}>{step.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--off-white-2)', textAlign: 'justify' }}>{step.sub}</div>
                      <div style={{ marginTop: '0.1rem', color: 'var(--off-white-2)', fontSize: '0.8rem', textAlign: 'justify' }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 