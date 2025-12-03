import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "React", icon: "fab fa-react" },
      { name: "React Native", icon: "fab fa-react" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Express.js", icon: "fas fa-server" },
      { name: "SQL", icon: "fas fa-database" },
    ]
  },
  {
    title: "AI/ML",
    skills: [
      { name: "Python", icon: "fab fa-python" },
      { name: "GenAI", icon: "fas fa-brain" },
      { name: "LangChain", icon: "fas fa-link" },
      { name: "TensorFlow", icon: "fas fa-brain" },
      { name: "PyTorch", icon: "fas fa-brain" },
      { name: "OpenAI API", icon: "fas fa-robot" },
      { name: "Computer Vision", icon: "fas fa-eye" },
      { name: "NLP", icon: "fas fa-language" },
    ]
  },
  {
    title: "Web3",
    skills: [
      { name: "Solidity", icon: "fas fa-cube" },
      { name: "Hardhat", icon: "fas fa-hat-wizard" },
      { name: "Ethereum", icon: "fab fa-ethereum" },
      { name: "BASE", icon: "fab fa-ethereum" },
      { name: "Ethers.js", icon: "fas fa-code" },
      { name: "Web3.js", icon: "fas fa-code" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "GitHub", icon: "fab fa-github" },
      { name: "VS Code", icon: "fas fa-code" },
      { name: "Postman", icon: "fas fa-envelope-open-text" },
      { name: "Figma", icon: "fab fa-figma" },
      { name: "Android Studio", icon: "fab fa-android" },
    ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(212, 165, 165, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(212, 165, 165, 0.08)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.icon && <i className={skill.icon}></i>}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 