import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      title: "GRC-20 D-Mail",
      description: [
        "GRC-20 D-Mail solves the problem of anonymous spam and phishing by attaching verifiable, on-chain reputation to every wallet address using GRC-20 standards and Hypergraph (TheGraph Protocol) technology."
      ],
      technologies: ["Next.js", "TypeScript", "XMTP", "TheGraph", "Hypergraph", "GRC-20", "Ethers.js", "OpenAI"],
      icon: "fas fa-envelope-open-text",
      github: "https://github.com/nainasachdev10/ETHGlobal",
      live: "#"
    },
    {
      title: "NabIt - Onchain E-commerce Mini-App",
      description: [
        "NabIt is an onchain e-commerce mini-app for the Farcaster ecosystem. Users can browse, search, and purchase their favourite item without leaving Farcaster/Coinbase Wallet by connecting their wallets"
      ],
      technologies: ["Next.js", "TypeScript", "OnchainKit", "MiniKit", "Farcaster", "Tailwind CSS"],
      icon: "fas fa-shopping-cart",
      github: "https://github.com/nainasachdev10/nabit",
      live: "https://nabit.vercel.app"
    },
    {
      title: "Web 3.0 Crypto Exchange DApp",
      description: [
        "Decentralized crypto exchange DApp with custom ERC20 token creation and trading.",
        "MetaMask integration for secure wallet pairing and real-time contract data."
      ],
      technologies: ["React", "HTML", "CSS", "Cranq", "MetaMask"],
      icon: "fas fa-coins",
      github: "#",
      live: "#"
    },
    {
      title: "SkinSight - Intelligent Skincare Advisor",
      description: [
        "AI skincare advisor that analyzes selfies for skin tone, type, and acne, providing personalized product recommendations.",
        "Real-time face detection and image analysis for user-specific insights."
      ],
      technologies: ["React", "Flask", "OpenCV", "TensorFlow", "CNN", "Image Processing"],
      icon: "fas fa-user-md",
      github: "https://github.com/nainasachdev10/SkinSight",
      live: "#"
    },
    {
      title: "AI Powered PDF Chatbot",
      description: [
        "AI chatbot that answers questions based on the content of uploaded PDF documents.",
        "Enables natural language search and contextual info retrieval from PDFs."
      ],
      technologies: ["Javascript", "CSS", "Typescript", "Langchain"],
      icon: "fas fa-robot",
      github: "https://github.com/nainasachdev10/AI-PDF-Chatbot",
      live: "#"
    },
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="projects-grid-inner">
            {projects.map((project, index) => (
              index === 0 ? (
                <a
                  key={index}
                  href="https://github.com/nainasachdev10/ETHGlobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <motion.div
                    className="project-card"
                    style={{ maxWidth: '420px', minWidth: '0', width: '100%' }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-image">
                      <i className={project.icon}></i>
                    </div>
                    <div className="project-content">
                      <motion.h3
                        style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2em' }}
                        whileHover={{ color: "var(--muted-pink-2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p style={{ textAlign: 'justify', margin: 0, fontSize: '0.8rem', color: '#eaeaea' }}>
                        {Array.isArray(project.description)
                          ? project.description.join(' ')
                          : project.description}
                      </p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(212, 165, 165, 0.15)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              ) : index === 1 ? (
                <a
                  key={index}
                  href="https://github.com/nainasachdev10/nabit"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <motion.div
                    className="project-card"
                    style={{ maxWidth: '420px', minWidth: '0', width: '100%' }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-image">
                      <i className={project.icon}></i>
                    </div>
                    <div className="project-content">
                      <motion.h3
                        style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2em' }}
                        whileHover={{ color: "var(--muted-pink-2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p style={{ textAlign: 'justify', margin: 0, fontSize: '0.8rem', color: '#eaeaea' }}>
                        {Array.isArray(project.description)
                          ? project.description.join(' ')
                          : project.description}
                      </p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(212, 165, 165, 0.15)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              ) : index === 2 ? (
                <a
                  key={index}
                  href="https://github.com/nainasachdev10/SkinSight"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <motion.div
                    className="project-card"
                    style={{ maxWidth: '420px', minWidth: '0', width: '100%' }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                  <div className="project-image">
                    <i className={project.icon}></i>
                  </div>
                  <div className="project-content">
                    <motion.h3
                      style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2em' }}
                      whileHover={{ color: "var(--peach-pink)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p style={{ textAlign: 'justify', margin: 0, fontSize: '0.8rem', color: '#eaeaea' }}>
                      {Array.isArray(project.description)
                        ? project.description.join(' ')
                        : project.description}
                    </p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(255, 182, 193, 0.3)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  </motion.div>
                </a>
              ) : index === 3 ? (
                <a
                  key={index}
                  href="https://github.com/nainasachdev10/SkinSight"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <motion.div
                    className="project-card"
                    style={{ maxWidth: '420px', minWidth: '0', width: '100%' }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-image">
                      <i className={project.icon}></i>
                    </div>
                    <div className="project-content">
                      <motion.h3
                        style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2em' }}
                        whileHover={{ color: "var(--muted-pink-2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p style={{ textAlign: 'justify', margin: 0, fontSize: '0.8rem', color: '#eaeaea' }}>
                        {Array.isArray(project.description)
                          ? project.description.join(' ')
                          : project.description}
                      </p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(212, 165, 165, 0.15)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              ) : (
                <a
                  key={index}
                  href="https://github.com/nainasachdev10/AI-PDF-Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <motion.div
                    className="project-card"
                    style={{ maxWidth: '420px', minWidth: '0', width: '100%' }}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-image">
                      <i className={project.icon}></i>
                    </div>
                    <div className="project-content">
                      <motion.h3
                        style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2em' }}
                        whileHover={{ color: "var(--muted-pink-2)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p style={{ textAlign: 'justify', margin: 0, fontSize: '0.8rem', color: '#eaeaea' }}>
                        {Array.isArray(project.description)
                          ? project.description.join(' ')
                          : project.description}
                      </p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              backgroundColor: "rgba(212, 165, 165, 0.15)"
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 