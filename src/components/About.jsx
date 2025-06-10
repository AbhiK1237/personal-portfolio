import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUser, FaDownload, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="about-section section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
            data-aos="fade-up"
          >
            <FaUser className="section-icon" /> About <span className="gradient-text">Me</span>
          </motion.h2>

          <Row className="align-items-center">
            <Col lg={5} className="about-image-col">
              <motion.div
                className="about-image-container"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                data-aos="fade-right"
              >
                <div className="image-wrapper">
                  <img
                    src="/assets/images/profile2.jpeg"
                    alt="Jigar Sable"
                    className="about-image"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h4>Full Stack Developer</h4>
                      <p>Passionate about creating amazing digital experiences</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={7} className="about-content-col">
              <motion.div
                className="about-content"
                variants={itemVariants}
                data-aos="fade-left"
              >
                <motion.h3 
                  className="about-name"
                  variants={itemVariants}
                >
                  I'm Jigar
                </motion.h3>
                
                <motion.div 
                  className="about-tag"
                  variants={itemVariants}
                >
                  Full Stack Developer
                </motion.div>

                <motion.p 
                  className="about-description"
                  variants={itemVariants}
                >
                  I am a Full-Stack developer based in Hyderabad, India. I am an Information Technology 
                  undergraduate from GRIET. I am very passionate about improving my coding skills & 
                  developing applications & websites. I build WebApps and Websites using MERN Stack. 
                  Working for myself to improve my skills. Love to build Full-Stack clones.
                </motion.p>

                <motion.div 
                  className="about-details"
                  variants={itemVariants}
                >
                  <Row>
                    <Col md={6}>
                      <div className="detail-item">
                        <FaEnvelope className="detail-icon" />
                        <div>
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">kaleabhijith@gmail.com</span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <div>
                          <span className="detail-label">Location:</span>
                          <span className="detail-value">Hyderabad, India - 500072</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </motion.div>

                <motion.div 
                  className="about-actions"
                  variants={itemVariants}
                >
                  <Button
                    href="https://docs.google.com/document/d/1Xwwf-8RmxZ-u1fZxFwyRUPbhdDm-fp2kKNnw9dyIB7w/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient me-3"
                  >
                    <FaDownload className="me-2" />
                    Download Resume
                  </Button>
                  
                  <Button
                    href="#contact"
                    variant="outline"
                    className="btn-outline"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
