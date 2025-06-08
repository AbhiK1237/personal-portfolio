import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaEye, FaCode, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Work.css';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => {
        // Get only the first 6 projects for the home page
        setProjects(data.slice(0, 6));
      })
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const getImagePath = (imageName) => {
    return `/assets/images/projects/${imageName}.png`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'web': '#667eea',
      'android': '#4facfe',
      'mern': '#f093fb',
      'react': '#61dafb',
      'node': '#68a063',
      'fullstack': '#764ba2'
    };
    return colors[category] || '#667eea';
  };

  return (
    <section id="work" className="work-section section">
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
          Projects <span className="gradient-text">Made</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="projects-grid">
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={index} className="project-col">
                <motion.div
                  variants={itemVariants}
                  className="project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="project-card">
                    <div className="project-image-container">
                      <img
                        src={getImagePath(project.image)}
                        alt={project.name}
                        className="project-image"
                        onError={(e) => {
                          e.target.src = '/assets/images/projects/portfolio.PNG';
                        }}
                      />
                      <div className="project-overlay">
                        <div className="project-actions">
                          {project.links.view && (
                            <Button
                              href={project.links.view}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-action"
                              variant="light"
                            >
                              <FaEye /> View
                            </Button>
                          )}
                          {project.links.code && (
                            <Button
                              href={project.links.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-action"
                              variant="outline-light"
                            >
                              <FaCode /> Code
                            </Button>
                          )}
                        </div>
                      </div>
                      <div 
                        className="category-badge"
                        style={{ backgroundColor: getCategoryColor(project.category) }}
                      >
                        {project.category}
                      </div>
                    </div>

                    <Card.Body className="project-content">
                      <h4 className="project-title">{project.name}</h4>
                      <p className="project-description">{project.desc}</p>
                    </Card.Body>

                    <div className="project-glow"></div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          className="view-all-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-aos="fade-up"
        >
          <Link to="/projects" className="btn-gradient view-all-btn">
            View All Projects <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;
