import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "abhikdeveloper@gmail.com",
      link: "mailto:abhikdeveloper@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 123-456-7890",
      link: "tel:+911234567890"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mumbai, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhik",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/abhik",
      color: "#333"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/abhik",
      color: "#1da1f2"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/abhik",
      color: "#e4405f"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss your project or just say hello!
          </p>
        </motion.div>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="contact-form-card glass-card">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Send Message</h4>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="modern-input"
                            placeholder="Your Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="modern-input"
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="modern-input"
                            placeholder="Subject"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="modern-input"
                            placeholder="Your message..."
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            className="btn-gradient w-100"
                            size="lg"
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-100"
            >
              <div className="contact-info">
                <h4 className="mb-4">Contact Information</h4>
                
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-info-item"
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h6>{info.title}</h6>
                      {info.link ? (
                        <a href={info.link} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="social-links mt-4">
                  <h6 className="mb-3">Follow Me</h6>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        style={{ '--hover-color': social.color }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
