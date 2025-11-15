import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Stethoscope,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import Button from './Button';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: { fr: 'Accueil', en: 'Home' } },
    { path: '/about', label: { fr: 'À Propos', en: 'About' } },
    { path: '/services', label: { fr: 'Services', en: 'Services' } },
    { path: '/contact', label: { fr: 'Contact', en: 'Contact' } }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.header 
      className="header"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      {/* <div className="header-top">
        <div className="container">
          <div className="header-info">
            <div className="info-item">
              <Phone size={16} />
              <span>71528178</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>Quartier Muyaga, Zone Gihosha, Bujumbura-Burundi</span>
            </div>
            <div className="info-item">
              <Clock size={16} />
              <span>24h/24 - 7j/7</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* <Stethoscope size={32} color="var(--primary)" /> */}
              <div className="logo-text">
                <img src={logo} width={50}/>
                <div>
                    <h1>HABWAWIHE MEDICAL POLYCLINIC</h1>
                    <p className="logo-slogan">
                    {language === 'fr' 
                        ? 'Intégrité, Professionnalisme, Développement' 
                        : 'Integrity, Professionalism, Development'
                    }
                    </p>
                </div>
                
              </div>
            </div>

            <nav className="desktop-nav">
              <motion.ul variants={navVariants} initial="hidden" animate="visible">
                {navItems.map((item) => (
                  <motion.li key={item.path} variants={navItemVariants}>
                    <Link 
                      to={item.path}
                      className={location.pathname === item.path ? 'active' : ''}
                    >
                      {language === 'fr' ? item.label.fr : item.label.en}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <div className="header-actions">
              {/* <LanguageToggle /> */}
              {/* <Button 
                as={Link} 
                to="/contact" 
                variant="secondary"
                className="cta-button"
              >
                <Phone size={18} />
                {language === 'fr' ? 'Urgence' : 'Emergency'}
              </Button> */}
              <button 
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-nav"
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
              >
                <nav>
                  <ul>
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <Link 
                          to={item.path}
                          className={location.pathname === item.path ? 'active' : ''}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {language === 'fr' ? item.label.fr : item.label.en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx="true">{`
        .header {
          background: white;
          box-shadow: var(--shadow);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-top {
          background: var(--primary-dark);
          color: white;
          padding: 8px 0;
          font-size: 0.9rem;
        }

        .header-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-main {
          padding: 15px 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-text {
            display: flex;
            gap: 5px;
        }

        .logo-text h1 {
          font-size: 1.3rem;
          color: var(--primary);
          margin: 0;
          line-height: 1.2;
        }

        .logo-slogan {
          font-size: 0.8rem;
          color: var(--gray);
          margin: 0;
          font-style: italic;
        }

        .desktop-nav ul {
          display: flex;
          list-style: none;
          gap: 30px;
          margin: 0;
          padding: 0;
        }

        .desktop-nav a {
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          padding: 8px 16px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .desktop-nav a:hover,
        .desktop-nav a.active {
          color: var(--primary);
          background-color: rgba(26, 115, 232, 0.1);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--dark);
        }

        .mobile-nav {
          background: white;
          border-top: 1px solid #e1e5e9;
          overflow: hidden;
        }

        .mobile-nav ul {
          list-style: none;
          padding: 20px 0;
          margin: 0;
        }

        .mobile-nav li {
          margin-bottom: 10px;
        }

        .mobile-nav a {
          display: block;
          padding: 12px 0;
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          text-transform: uppercase;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-nav a.active {
          color: var(--primary);
        }

        @media (max-width: 968px) {
          .header-info {
            justify-content: center;
            text-align: center;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .cta-button span {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .logo-text h1 {
            font-size: 1.1rem;
          }

          .header-info {
            font-size: 0.8rem;
          }

          .info-item span {
            display: none;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;