import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Zeal College of Engineering and Research | SPPU',
      period: '2020-2024 | Pursuing',
      image: '/assets/images/educat/college.jpg',
      description: 'Pursuing Bachelor\'s degree in Information Technology with focus on software development, web technologies, and computer science fundamentals.',
      icon: FaUniversity,
      status: 'pursuing'
    },
    {
      degree: 'HSC Science | Informatic Practices',
      institution: 'Shri L. G. Haria Multipurpose School | CBSE',
      period: '2018-2020 | Completed',
      image: '/assets/images/educat/school.jpg',
      description: 'Completed Higher Secondary Certificate in Science stream with Informatic Practices, building strong foundation in programming and computer applications.',
      icon: FaGraduationCap,
      status: 'completed'
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="education-section section">
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <FaGraduationCap className="section-icon" /> 
          My <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.p
          className="education-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-aos="fade-up"
        >
          "Education is not the learning of facts, but the training of the mind to think."
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="education-timeline">
            {educationData.map((edu, index) => (
              <Col lg={6} key={index} className="education-col">
                <motion.div
                  variants={itemVariants}
                  className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 200}
                >
                  <Card className="education-card">
                    <div className="card-header">
                      <div className="institution-image">
                        <img
                          src={edu.image}
                          alt={edu.institution}
                          className="edu-image"
                        />
                        <div className="image-overlay">
                          <edu.icon className="overlay-icon" />
                        </div>
                      </div>
                      <div className={`status-badge ${edu.status}`}>
                        {edu.status === 'pursuing' ? 'Pursuing' : 'Completed'}
                      </div>
                    </div>

                    <Card.Body className="card-content">
                      <h4 className="degree-title">{edu.degree}</h4>
                      <h5 className="institution-name">{edu.institution}</h5>
                      
                      <div className="period-info">
                        <FaCalendarAlt className="period-icon" />
                        <span className="period-text">{edu.period}</span>
                      </div>

                      <p className="education-description">
                        {edu.description}
                      </p>
                    </Card.Body>

                    <div className="card-glow"></div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Education;
