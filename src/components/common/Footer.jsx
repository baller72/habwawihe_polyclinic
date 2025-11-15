import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from './Button';

const Footer = () => {
  const { language } = useLanguage();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Clinic Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <div className="footer-logo">
                {/* <Stethoscope size={32} color="var(--accent)" /> */}
                <div>
                  <h3>HABWAWIHE MEDICAL POLYCLINIC</h3>
                  <p className="slogan">
                    {language === 'fr' 
                      ? 'Intégrité, Professionnalisme, Développement' 
                      : 'Integrity, Professionalism, Development'
                    }
                  </p>
                </div>
              </div>
              <p className="footer-description">
                {language === 'fr'
                  ? 'Votre santé est notre priorité. Soins médicaux de qualité accessibles 24h/24.'
                  : 'Your health is our priority. Quality medical care accessible 24/7.'
                }
              </p>
              <div className="social-links">
                <motion.a 
                  href="https://www.facebook.com/habwawihepolyclinic" 
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>{language === 'fr' ? 'Liens Rapides' : 'Quick Links'}</h4>
              <ul>
                <li>
                  <Link to="/services">
                    {language === 'fr' ? 'Urgence Médicale' : 'Medical Emergency'}
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    {language === 'fr' ? 'Consultation' : 'Consultation'}
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    {language === 'fr' ? 'Maternité' : 'Maternity'}
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    {language === 'fr' ? 'Pédiatrie' : 'Pediatrics'}
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    {language === 'fr' ? 'Laboratoire' : 'Laboratory'}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>{language === 'fr' ? 'Nos Services' : 'Our Services'}</h4>
              <ul>
                <li>
                  <Link to="/services#emergency">
                    {language === 'fr' ? 'Urgence 24/7' : '24/7 Emergency'}
                  </Link>
                </li>
                <li>
                  <Link to="/services#pediatrics">
                    {language === 'fr' ? 'Soins Pédiatriques' : 'Pediatric Care'}
                  </Link>
                </li>
                <li>
                  <Link to="/mother-baby">
                    {language === 'fr' ? 'Soins Mère-Enfant' : 'Mother-Baby Care'}
                  </Link>
                </li>
                <li>
                  <Link to="/services#surgery">
                    {language === 'fr' ? 'Chirurgie Mineure' : 'Minor Surgery'}
                  </Link>
                </li>
                <li>
                  <Link to="/services#pharmacy">
                    {language === 'fr' ? 'Pharmacie' : 'Pharmacy'}
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4>{language === 'fr' ? 'Contact' : 'Contact'}</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <Phone size={18} />
                  <div className="info">
                    <strong>+257 71 52 81 78</strong>
                    <span>{language === 'fr' ? 'Urgence 24/7' : '24/7 Emergency'}</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <div className="info">
                    <strong>habwawihepolyclinic@gmail.com</strong>
                    <span>Email</span>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <div className="info">
                    <strong>Quartier Muyaga, Zone Gihosha</strong>
                    <span>Bujumbura-Burundi</span>
                  </div>
                </div>
                {/* <div className="contact-item">
                  <Clock size={18} />
                  <div className="info">
                    <strong>24h/24 - 7j/7</strong>
                    <span>Lundi-Samedi: 08h00-18h00</span>
                  </div>
                </div> */}
              </div>
              {/* <Button 
                as={Link} 
                to="/contact" 
                variant="secondary"
                style={{ marginTop: '20px', width: '100%' }}
              >
                <Phone size={18} />
                {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
              </Button> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              &copy; {new Date().getFullYear()} HABWAWIHE MEDICAL POLYCLINIC. 
              {language === 'fr' ? ' Tous droits réservés.' : ' All rights reserved.'}
            </p>
            <div className="footer-links">
              <Link to="#">
                {language === 'fr' ? 'Confidentialité' : 'Privacy'}
              </Link>
              <Link to="#">
                {language === 'fr' ? 'Conditions' : 'Terms'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background: var(--dark);
          color: white;
        }

        .footer-main {
          padding: 60px 0 40px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
        }

        .footer-section h4 {
          color: var(--accent);
          margin-bottom: 20px;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .footer-logo h3 {
          font-size: 1.3rem;
          margin: 0;
          color: white;
        }

        .slogan {
          font-size: 0.9rem;
          color: #ccc;
          margin: 5px 0 0 0;
          font-style: italic;
        }

        .footer-description {
          line-height: 1.6;
          color: #ccc;
          margin-bottom: 25px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: #ccc;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent);
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 12px;
        }

        .footer-section a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-section a:hover {
          color: var(--accent);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .info {
            display: flex;
            flex-direction: column;
        }

        .contact-item svg {
          color: var(--accent);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .contact-item strong {
          display: block;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .contact-item span {
          font-size: 0.85rem;
          color: #999;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding: 20px 0;
          background: #1a1a1a;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
          font-size: 0.9rem;
        }

        .footer-links {
          display: flex;
          gap: 20px;
        }

        .footer-links a {
          color: #999;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--accent);
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
            text-align: left;
          }

          .social-links {
            justify-content: center;
          }

          .contact-item {
            justify-content: center;
            text-align: left;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-main {
            padding: 40px 0 30px;
          }

          .footer-logo {
            flex-direction: column;
            text-align: center;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;