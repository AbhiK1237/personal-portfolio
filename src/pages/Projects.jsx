import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Nav } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load projects data
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  const categories = ['all', 'web', 'mobile', 'desktop', 'api'];

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category?.toLowerCase() === category.toLowerCase()
      ));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="projects-page">
        <div className="projects-hero">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="hero-title">My Projects</h1>
              <p className="hero-subtitle">
                A collection of my work showcasing various technologies and solutions
              </p>
            </motion.div>
          </Container>
        </div>

        <Container className="projects-content">
          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="filter-section mb-5"
          >
            <div className="filter-container">
              <div className="filter-icon">
                <FaFilter />
              </div>
              <Nav className="filter-nav">
                {categories.map((category) => (
                  <Nav.Link
                    key={category}
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => filterProjects(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Row className="g-4">
                {filteredProjects.map((project, index) => (
                  <Col lg={4} md={6} key={project.id || index}>
                    <motion.div
                      variants={cardVariants}
                      layout
                      whileHover={{ y: -10 }}
                      className="h-100"
                    >
                      <Card className="project-card h-100">
                        <div className="project-image-container">
                          <Card.Img
                            variant="top"
                            src={project.image || `/images/${project.name?.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                            alt={project.name}
                            className="project-image"
                          />
                          <div className="project-overlay">
                            <div className="project-links">
                              {project.github && (
                                <motion.a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-link"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaGithub />
                                </motion.a>
                              )}
                              {project.live && (
                                <motion.a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-link"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaExternalLinkAlt />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <Card.Body className="project-content">
                          <div className="project-header">
                            <Card.Title className="project-title">
                              {project.name}
                            </Card.Title>
                            {project.category && (
                              <Badge className="category-badge">
                                {project.category}
                              </Badge>
                            )}
                          </div>
                          
                          <Card.Text className="project-description">
                            {project.description}
                          </Card.Text>
                          
                          {project.technologies && (
                            <div className="tech-stack">
                              {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="project-actions mt-auto">
                            {project.github && (
                              <Button
                                variant="outline-primary"
                                size="sm"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="me-2"
                              >
                                <FaGithub className="me-1" />
                                Code
                              </Button>
                            )}
                            {project.live && (
                              <Button
                                variant="primary"
                                size="sm"
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaExternalLinkAlt className="me-1" />
                                Live Demo
                              </Button>
                            )}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-5"
            >
              <h4>No projects found</h4>
              <p className="text-muted">Try selecting a different category.</p>
            </motion.div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Projects;
