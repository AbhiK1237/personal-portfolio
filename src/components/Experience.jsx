import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Freelance',
      description: 'Working on various web development projects using MERN stack. Building responsive websites and web applications for clients worldwide.',
      responsibilities: [
        'Developing full-stack web applications using React, Node.js, Express, and MongoDB',
        'Creating responsive and mobile-first user interfaces',
        'Implementing RESTful APIs and database design',
        'Collaborating with clients to understand requirements and deliver solutions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      location: 'Pune, India',
      period: '2021 - 2022',
      type: 'Internship',
      description: 'Gained hands-on experience in web development and learned modern development practices while working on real-world projects.',
      responsibilities: [
        'Assisted in developing React components and features',
        'Participated in code reviews and team meetings',
        'Learned version control with Git and collaborative development',
        'Worked on bug fixes and performance optimizations'
      ],
      technologies: ['React', 'JavaScript', 'Git', 'HTML5', 'CSS3', 'Bootstrap']
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="experience-section section">
      <Container>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <FaBriefcase className="section-icon" /> 
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="experience-item"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="timeline-marker">
                  <FaBriefcase className="marker-icon" />
                </div>
                
                <Card className="experience-card">
                  <Card.Body className="experience-content">
                    <div className="experience-header">
                      <div className="header-main">
                        <h3 className="job-title">{exp.title}</h3>
                        <div className="company-info">
                          <FaBuilding className="company-icon" />
                          <span className="company-name">{exp.company}</span>
                        </div>
                      </div>
                      <div className="job-badge">
                        {exp.type}
                      </div>
                    </div>

                    <div className="experience-meta">
                      <div className="meta-item">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="meta-item">
                        <FaMapMarkerAlt className="meta-icon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="experience-description">
                      {exp.description}
                    </p>

                    <div className="responsibilities">
                      <h5 className="responsibilities-title">Key Responsibilities:</h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="technologies-used">
                      <h5 className="technologies-title">Technologies Used:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card.Body>

                  <div className="card-glow"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
