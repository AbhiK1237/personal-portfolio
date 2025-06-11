import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram, FaDev } from 'react-icons/fa';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import './Hero.css';

const Hero = () => {
  const [particlesInit, setParticlesInit] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Development', 'Gen AI Development', ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Initialize particles
  const particlesInitialization = async (engine) => {
    await loadSlim(engine);
    setParticlesInit(true);
  };

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/jigar-sable/', color: '#0077b5' },
    { icon: FaGithub, url: 'https://github.com/jigar-sable', color: '#333' },
    { icon: FaTwitter, url: 'https://twitter.com/jigar_sable', color: '#1da1f2' },
    { icon: FaTelegram, url: 'https://t.me/lifecode5', color: '#0088cc' },
    { icon: FaInstagram, url: 'https://www.instagram.com/jigarsable.dev', color: '#e4405f' },
    { icon: FaDev, url: 'https://dev.to/jigarsable', color: '#0a0a0a' },
  ];

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#667eea', '#764ba2', '#f093fb'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.3,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#667eea',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
    },
    retina_detect: true,
  };

  return (
    <section id="home" className="hero-section">
      {particlesInit && (
        <Particles
          id="particles"
          init={particlesInitialization}
          options={particlesOptions}
          className="particles-canvas"
        />
      )}
      
      <Container className="hero-container">
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="hero-greeting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hi There,
              </motion.h2>
              
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm <span className="gradient-text">Abhijith Kale</span>
              </motion.h1>
              
              <motion.p
                className="hero-role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                I am into <span className="typed-text">{typedText}</span>
                <span className="cursor">|</span>
              </motion.p>
              
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button 
                  className="btn-gradient me-3"
                  onClick={scrollToAbout}
                >
                  About Me <FaArrowDown className="ms-2" />
                </Button>
              </motion.div>
              
              <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </Col>
          
          <Col lg={6} className="hero-image-col">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero-image-wrapper">
                <img
                  src="/assets/images/hero.png"
                  alt="Jigar Sable"
                  className="hero-image"
                />
                <div className="image-glow"></div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
