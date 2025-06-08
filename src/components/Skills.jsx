import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.error('Error loading skills:', error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="skills-section section">
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <FaLaptopCode className="section-icon" /> 
          Skills & <span className="gradient-text">Abilities</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="skills-grid">
            {skills.map((skill, index) => (
              <Col
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                className="skill-col"
              >
                <motion.div
                  className="skill-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="skill-icon-wrapper">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="skill-content">
                    <h5 className="skill-name">{skill.name}</h5>
                  </div>
                  
                  <div className="skill-glow"></div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-aos="fade-up"
        >
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h3 className="summary-title">
                Passionate about <span className="gradient-text">Modern Technologies</span>
              </h3>
              <p className="summary-text">
                I love working with cutting-edge technologies and frameworks to create 
                amazing user experiences. Always eager to learn new tools and improve my skills 
                to stay current with the rapidly evolving tech landscape.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
