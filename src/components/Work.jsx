import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaEye, FaCode, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Work.css';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.slice(0, 6)); // Show only first 6 projects
        setError(null);
      } catch (error) {
        console.error('Error loading projects:', error);
        setError('Failed to load projects');
        // Fallback to alternative data source
        try {
          const fallbackResponse = await fetch('/projects.json');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            setProjects(fallbackData.slice(0, 6));
            setError(null);
          }
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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

  if (loading) {
    return (
      <section id="work" className="work-section section-padding">
        <Container>
          <div className="text-center">
            <div className="loading-spinner mx-auto mb-3"></div>
            <p className="text-muted">Loading projects...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error && projects.length === 0) {
    return (
      <section id="work" className="work-section section-padding">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="empty-state">
              <p>Unable to load projects at the moment. Please try again later.</p>
            </div>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section id="work" className="work-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore some of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={project.id || index} className="project-col">
                <motion.div
                  variants={itemVariants}
                  className="project-wrapper h-100"
                >
                  <Card className="project-card h-100">
                    <div className="project-image-container">
                      <Card.Img
                        variant="top"
                        src={project.image || `/images/projects/${project.name?.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={project.name || 'Project'}
                        className="project-image"
                        loading="lazy"
                      />
                      <div className="project-overlay">
                        <div className="project-actions">
                          {(project.github || project.links?.code) && (
                            <motion.a
                              href={project.github || project.links?.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-action btn btn-outline-light"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaCode /> Code
                            </motion.a>
                          )}
                          {(project.live || project.links?.view) && (
                            <motion.a
                              href={project.live || project.links?.view}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project-action btn btn-light"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FaEye /> Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                      {project.category && (
                        <div className="category-badge">
                          {project.category}
                        </div>
                      )}
                    </div>
                    
                    <Card.Body className="project-content">
                      <Card.Title className="project-title">
                        {project.name || 'Untitled Project'}
                      </Card.Title>
                      
                      <Card.Text className="project-description">
                        {project.description || project.desc || 'No description available.'}
                      </Card.Text>

                      {project.technologies && (
                        <div className="tech-stack mb-3">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="tech-tag">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="view-all-container mt-5"
        >
          <Link to="/projects" className="btn btn-gradient view-all-btn">
            <FaLaptopCode className="me-2" />
            View All Projects
            <FaArrowRight className="ms-2" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;
