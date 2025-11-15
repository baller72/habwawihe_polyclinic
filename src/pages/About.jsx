import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Heart,
  Clock,
  Shield
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import EquipmentShowcase from '../components/sections/EquipmentShowcase';
import Partnerships from '../components/sections/Partnerships';

const About = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { fr: 'Notre Mission', en: 'Our Mission' },
      description: {
        fr: 'Fournir des soins de santé accessibles et de qualité à toute la communauté avec professionnalisme et compassion.',
        en: 'To provide accessible and quality healthcare to the entire community with professionalism and compassion.'
      }
    },
    {
      icon: Users,
      title: { fr: 'Notre Vision', en: 'Our Vision' },
      description: {
        fr: 'Devenir le centre de référence en soins de santé polyvalents au Burundi, reconnu pour son excellence médicale.',
        en: 'To become the reference center for comprehensive healthcare in Burundi, recognized for medical excellence.'
      }
    },
    {
      icon: Award,
      title: { fr: 'Notre Engagement', en: 'Our Commitment' },
      description: {
        fr: 'Nous nous engageons à maintenir les plus hauts standards de qualité et de sécurité dans tous nos services.',
        en: 'We are committed to maintaining the highest standards of quality and safety in all our services.'
      }
    }
  ];

  const stats = [
    {
      icon: Clock,
      number: '24/7',
      label: { fr: 'Service Urgence', en: 'Emergency Service' }
    },
    {
      icon: Users,
      number: '12,500+',
      label: { fr: 'Patients Servis', en: 'Patients Served' }
    },
    {
      icon: Award,
      number: '15+',
      label: { fr: 'Services Médicaux', en: 'Medical Services' }
    },
    {
      icon: Shield,
      number: '100%',
      label: { fr: 'Engagement Qualité', en: 'Quality Commitment' }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="about-title">
              {language === 'fr' ? 'À Propos de Nous' : 'About Us'}
            </motion.h1>
            <motion.p variants={itemVariants} className="about-subtitle">
              {language === 'fr'
                ? 'Depuis notre création, nous nous engageons à fournir des soins de santé exceptionnels à notre communauté avec intégrité, professionnalisme et dévouement.'
                : 'Since our establishment, we have been committed to providing exceptional healthcare to our community with integrity, professionalism and dedication.'
              }
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat-card" variants={itemVariants}>
                <stat.icon size={48} color="var(--primary)" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">
                  {language === 'fr' ? stat.label.fr : stat.label.en}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'fr' ? 'Notre Engagement' : 'Our Commitment'}
          </motion.h2>
          
          <motion.div 
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} className="card" variants={itemVariants}>
                <div className="card-header">
                  <value.icon size={48} color="white" />
                </div>
                <div className="card-body">
                  <h3 style={{ marginBottom: '15px', color: 'var(--primary-dark)' }}>
                    {language === 'fr' ? value.title.fr : value.title.en}
                  </h3>
                  <p style={{ color: 'var(--gray)', lineHeight: '1.6' }}>
                    {language === 'fr' ? value.description.fr : value.description.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'fr' ? 'Valeurs Fondamentales' : 'Core Values'}
          </motion.h2>
          
          <motion.div 
            className="values-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="values-text" variants={itemVariants}>
              <h3 style={{ marginBottom: '20px', color: 'var(--primary-dark)' }}>
                {language === 'fr' ? 'Ce qui nous guide' : 'What Guides Us'}
              </h3>
              <div className="values-list">
                <div className="value-item">
                  <Heart size={24} color="var(--secondary)" />
                  <div>
                    <strong>{language === 'fr' ? 'Intégrité' : 'Integrity'}</strong>
                    <p>
                      {language === 'fr'
                        ? 'Nous maintenons les plus hauts standards éthiques dans toutes nos actions et décisions.'
                        : 'We maintain the highest ethical standards in all our actions and decisions.'
                      }
                    </p>
                  </div>
                </div>
                <div className="value-item">
                  <Award size={24} color="var(--secondary)" />
                  <div>
                    <strong>{language === 'fr' ? 'Professionnalisme' : 'Professionalism'}</strong>
                    <p>
                      {language === 'fr'
                        ? 'Notre équipe médicale est composée de professionnels qualifiés et dévoués.'
                        : 'Our medical team consists of qualified and dedicated professionals.'
                      }
                    </p>
                  </div>
                </div>
                <div className="value-item">
                  <Target size={24} color="var(--secondary)" />
                  <div>
                    <strong>{language === 'fr' ? 'Développement' : 'Development'}</strong>
                    <p>
                      {language === 'fr'
                        ? 'Nous investissons continuellement dans la modernisation de nos équipements et la formation de notre personnel.'
                        : 'We continuously invest in modernizing our equipment and training our staff.'
                      }
                    </p>
                  </div>
                </div>
                <div className="value-item">
                  <Users size={24} color="var(--secondary)" />
                  <div>
                    <strong>{language === 'fr' ? 'Communauté' : 'Community'}</strong>
                    <p>
                      {language === 'fr'
                        ? 'Nous servons notre communauté avec compassion et respect pour tous.'
                        : 'We serve our community with compassion and respect for all.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="values-image" variants={itemVariants}>
              <div className="image-placeholder">
                <Heart size={64} color="var(--primary)" />
                <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                  {language === 'fr' ? 'Notre Équipe Médicale' : 'Our Medical Team'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <EquipmentShowcase />
      <Partnerships />

      <style jsx="true">{`
        .about-hero {
          background: linear-gradient(
            135deg,
            rgba(26, 115, 232, 0.9) 0%,
            rgba(13, 71, 161, 0.9) 100%
          ), url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .about-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .about-subtitle {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.95;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-card {
          padding: 40px 20px;
          background: white;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin: 15px 0 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: var(--gray);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .values-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .value-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .value-item strong {
          display: block;
          font-size: 1.2rem;
          color: var(--primary-dark);
          margin-bottom: 8px;
        }

        .value-item p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        .values-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          width: 100%;
          max-width: 400px;
          height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          font-weight: 500;
          text-align: center;
          padding: 20px;
        }

        @media (max-width: 968px) {
          .values-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .value-item {
            justify-content: center;
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 0 60px;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .about-subtitle {
            font-size: 1.1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .about-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .value-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default About;