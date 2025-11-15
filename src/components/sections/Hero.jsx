import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';

import bgImage from '../../assets/images/5.jpg';

const Hero = () => {
  const { language } = useLanguage();

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5
      }
    }
  };

  return (
    <section
      className="hero"
      style={{ 
        // backgroundImage: `url(${bgImage})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundPosition: "top", 
        width: "100%", 
        height: "100vh" 
    }}>
      <motion.div 
        className="container"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.h1 variants={textVariants} className="hero-title">
          {language === 'fr' 
            ? 'Soins de Santé de Qualité 24h/24' 
            : 'Quality Healthcare 24/7'
          }
        </motion.h1>
        
        <motion.p variants={textVariants} className="hero-subtitle">
          {language === 'fr'
            ? 'Notre polyclinique offre des services médicaux complets avec intégrité, professionnalisme et engagement envers votre bien-être.'
            : 'Our polyclinic offers comprehensive medical services with integrity, professionalism and commitment to your well-being.'
          }
        </motion.p>

        <motion.div variants={buttonVariants} className="hero-actions">
          <Button as={Link} to="/services" size="large">
            {language === 'fr' ? 'Découvrir Nos Services' : 'Discover Our Services'}
            {/* <ArrowRight size={20} /> */}
          </Button>
          
          <Button as={Link} to="/contact" variant="secondary" size="large">
            <Calendar size={20} />
            {language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
          </Button>

          {/* <Button 
            as="a" 
            href="tel:71528178" 
            variant="outline" 
            style={{ borderColor: 'white', color: 'white' }}
          >
            <Phone size={20} />
            {language === 'fr' ? 'Appeler Maintenant' : 'Call Now'}
          </Button> */}
        </motion.div>

        <motion.div
          variants={textVariants}
          className="hero-features"
        >
          <div className="feature-item">
            <strong>24/7</strong>
            <span>{language === 'fr' ? 'Urgence' : 'Emergency'}</span>
          </div>
          <div className="feature-item">
            <strong>15+</strong>
            <span>{language === 'fr' ? 'Services' : 'Services'}</span>
          </div>
          <div className="feature-item">
            <strong>12 500+</strong>
            <span>{language === 'fr' ? 'Patients' : 'Patients'}</span>
          </div>
        </motion.div>
      </motion.div>

      <style jsx="true">{`
        .hero {
          background: linear-gradient(
            135deg,
            rgba(26, 115, 232, 0.9) 0%,
            rgba(13, 71, 161, 0.9) 100%
          );
          color: white;
          text-align: center;
          padding: 150px 0 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 25px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 50px;
          opacity: 0.95;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .hero-features {
          display: flex;
          justify-content: center;
          gap: 50px;
          flex-wrap: wrap;
        }

        .feature-item {
          text-align: center;
        }

        .feature-item strong {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .feature-item span {
          font-size: 1rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 80px;
            min-height: auto;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-features {
            gap: 30px;
          }

          .feature-item strong {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-features {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;