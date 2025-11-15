import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Stethoscope, 
  Syringe, 
  Heart,
  Activity,
  Users,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/common/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

const Pediatrics = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: { fr: 'Consultation Pédiatrique', en: 'Pediatric Consultation' },
      description: {
        fr: 'Bilans de santé complets et suivi médical régulier pour enfants de tous âges par nos pédiatres expérimentés.',
        en: 'Comprehensive health checkups and regular medical monitoring for children of all ages by our experienced pediatricians.'
      },
      features: {
        fr: ['Bilan de santé', 'Suivi croissance', 'Développement moteur', 'Conseils parents'],
        en: ['Health assessment', 'Growth monitoring', 'Motor development', 'Parent advice']
      }
    },
    {
      icon: Syringe,
      title: { fr: 'Vaccination', en: 'Vaccination' },
      description: {
        fr: 'Programme de vaccination complet selon le calendrier officiel, dans un environnement adapté aux enfants.',
        en: 'Complete vaccination program according to the official schedule, in a child-friendly environment.'
      },
      features: {
        fr: ['Calendrier officiel', 'Vaccins disponibles', 'Carnet de santé', 'Rappels'],
        en: ['Official schedule', 'Available vaccines', 'Health record', 'Boosters']
      }
    },
    {
      icon: Activity,
      title: { fr: 'Urgence Pédiatrique', en: 'Pediatric Emergency' },
      description: {
        fr: 'Service d\'urgence spécialisé pour enfants disponible 24h/24 avec équipe pédiatrique dédiée.',
        en: 'Specialized emergency service for children available 24/7 with dedicated pediatric team.'
      },
      features: {
        fr: ['Urgence 24h/24', 'Équipe spécialisée', 'Équipements adaptés', 'Prise en charge rapide'],
        en: ['24/7 emergency', 'Specialized team', 'Adapted equipment', 'Quick management']
      }
    },
    {
      icon: Heart,
      title: { fr: 'Soins Néonatals', en: 'Neonatal Care' },
      description: {
        fr: 'Soins spécialisés pour les nouveau-nés et les nourrissons avec monitoring continu et équipement moderne.',
        en: 'Specialized care for newborns and infants with continuous monitoring and modern equipment.'
      },
      features: {
        fr: ['Soins nouveau-nés', 'Monitoring continu', 'Allaitement', 'Conseils parents'],
        en: ['Newborn care', 'Continuous monitoring', 'Breastfeeding', 'Parent advice']
      }
    }
  ];

  const conditions = [
    {
      name: { fr: 'Infections Respiratoires', en: 'Respiratory Infections' },
      treatments: {
        fr: ['Bronchiolite', 'Pneumonie', 'Grippe', 'Rhino-pharyngite'],
        en: ['Bronchiolitis', 'Pneumonia', 'Flu', 'Common cold']
      }
    },
    {
      name: { fr: 'Maladies Infantiles', en: 'Childhood Diseases' },
      treatments: {
        fr: ['Varicelle', 'Rougeole', 'Oreillons', 'Roséole'],
        en: ['Chickenpox', 'Measles', 'Mumps', 'Roseola']
      }
    },
    {
      name: { fr: 'Troubles Digestifs', en: 'Digestive Disorders' },
      treatments: {
        fr: ['Gastro-entérite', 'Coliques', 'Constipation', 'Reflux'],
        en: ['Gastroenteritis', 'Colic', 'Constipation', 'Reflux']
      }
    },
    {
      name: { fr: 'Allergies', en: 'Allergies' },
      treatments: {
        fr: ['Asthme', 'Eczéma', 'Allergies alimentaires', 'Rhinite'],
        en: ['Asthma', 'Eczema', 'Food allergies', 'Rhinitis']
      }
    }
  ];

  const ageGroups = [
    {
      range: { fr: '0-1 an', en: '0-1 year' },
      services: {
        fr: ['Suivi néonatal', 'Vaccination', 'Allaitement', 'Développement'],
        en: ['Neonatal follow-up', 'Vaccination', 'Breastfeeding', 'Development']
      }
    },
    {
      range: { fr: '1-3 ans', en: '1-3 years' },
      services: {
        fr: ['Vaccination', 'Alimentation', 'Croissance', 'Langage'],
        en: ['Vaccination', 'Nutrition', 'Growth', 'Language']
      }
    },
    {
      range: { fr: '3-6 ans', en: '3-6 years' },
      services: {
        fr: ['Bilan santé', 'Vaccination', 'Socialisation', 'Apprentissage'],
        en: ['Health checkup', 'Vaccination', 'Socialization', 'Learning']
      }
    },
    {
      range: { fr: '6-12 ans', en: '6-12 years' },
      services: {
        fr: ['Suivi scolaire', 'Vaccination', 'Sport', 'Puberté'],
        en: ['School follow-up', 'Vaccination', 'Sports', 'Puberty']
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="page-hero pediatrics-hero">
        <div className="container">
          <AnimatedSection>
            <div className="hero-content">
              <h1>{language === 'fr' ? 'Pédiatrie' : 'Pediatrics'}</h1>
              <p>
                {language === 'fr'
                  ? 'Des soins médicaux spécialisés et bienveillants pour vos enfants, de la naissance à l\'adolescence.'
                  : 'Specialized and caring medical care for your children, from birth to adolescence.'
                }
              </p>
              <div className="hero-actions">
                <Button as={Link} to="/contact" variant="primary">
                  <Stethoscope size={20} />
                  {language === 'fr' ? 'Consultation' : 'Consultation'}
                </Button>
                <Button as={Link} to="/services" variant="outline">
                  {language === 'fr' ? 'Vaccination' : 'Vaccination'}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Services Pédiatriques' : 'Pediatric Services'}
            </h2>
          </AnimatedSection>

          <div className="services-grid-pediatrics">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="service-card-pediatrics">
                  <div className="service-header">
                    <service.icon size={40} color="var(--primary)" />
                    <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                  </div>
                  <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                  
                  <div className="service-features">
                    <ul>
                      {service.features[language === 'fr' ? 'fr' : 'en'].map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline"
                    style={{ marginTop: '20px' }}
                  >
                    {language === 'fr' ? 'Prendre RDV' : 'Book Appointment'}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Suivi par Âge' : 'Age-Based Follow-up'}
            </h2>
          </AnimatedSection>

          <div className="age-groups-grid">
            {ageGroups.map((group, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="age-group-card">
                  <div className="age-badge">
                    {language === 'fr' ? group.range.fr : group.range.en}
                  </div>
                  <div className="age-services">
                    <h4>{language === 'fr' ? 'Services:' : 'Services:'}</h4>
                    <ul>
                      {group.services[language === 'fr' ? 'fr' : 'en'].map((service, idx) => (
                        <li key={idx}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Pathologies Traitées' : 'Conditions Treated'}
            </h2>
          </AnimatedSection>

          <div className="conditions-grid">
            {conditions.map((condition, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="condition-card">
                  <h3>{language === 'fr' ? condition.name.fr : condition.name.en}</h3>
                  <div className="treatments-list">
                    {condition.treatments[language === 'fr' ? 'fr' : 'en'].map((treatment, idx) => (
                      <span key={idx} className="treatment-tag">
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccination Info */}
      <section className="section" style={{ background: 'rgba(52, 168, 83, 0.05)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="vaccination-info">
              <div className="vaccination-content">
                <h2>{language === 'fr' ? 'Vaccination Gratuite' : 'Free Vaccination'}</h2>
                <p>
                  {language === 'fr'
                    ? 'Nous proposons un programme complet de vaccination gratuit pour tous les enfants selon le calendrier vaccinal officiel du Burundi.'
                    : 'We offer a complete free vaccination program for all children according to the official Burundi vaccination schedule.'
                  }
                </p>
                <div className="vaccination-features">
                  <div className="feature">
                    <Syringe size={24} color="var(--secondary)" />
                    <span>{language === 'fr' ? 'Tous les vaccins' : 'All vaccines'}</span>
                  </div>
                  <div className="feature">
                    <CheckCircle size={24} color="var(--secondary)" />
                    <span>{language === 'fr' ? 'Gratuit' : 'Free'}</span>
                  </div>
                  <div className="feature">
                    <Calendar size={24} color="var(--secondary)" />
                    <span>{language === 'fr' ? 'Calendrier officiel' : 'Official schedule'}</span>
                  </div>
                </div>
                <Button as={Link} to="/contact" variant="primary">
                  {language === 'fr' ? 'Programmer Vaccination' : 'Schedule Vaccination'}
                </Button>
              </div>
              <div className="vaccination-image">
                <div className="image-placeholder">
                  <Syringe size={64} color="var(--primary)" />
                  <p>{language === 'fr' ? 'Vaccination Sécurisée' : 'Safe Vaccination'}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section emergency-cta-pediatrics">
        <div className="container">
          <AnimatedSection>
            <div className="emergency-content">
              <div className="emergency-icon">
                <Activity size={64} color="white" />
              </div>
              <h2>{language === 'fr' ? 'Urgence Pédiatrique 24h/24' : '24/7 Pediatric Emergency'}</h2>
              <p>
                {language === 'fr'
                  ? 'En cas d\'urgence pour votre enfant, notre équipe pédiatrique est disponible immédiatement'
                  : 'In case of emergency for your child, our pediatric team is available immediately'
                }
              </p>
              <div className="emergency-actions">
                <Button as="a" href="tel:71528178" variant="secondary" size="large">
                  <Clock size={20} />
                  {language === 'fr' ? 'Appeler Urgence' : 'Call Emergency'}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style jsx="true">{`
        .pediatrics-hero {
          background: linear-gradient(
            135deg,
            rgba(100, 181, 246, 0.9) 0%,
            rgba(30, 136, 229, 0.9) 100%
          ), url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.3rem;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .services-grid-pediatrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card-pediatrics {
          background: white;
          padding: 30px;
          box-shadow: var(--shadow);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .service-card-pediatrics:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .service-header h3 {
          color: var(--primary-dark);
          margin: 0;
          font-size: 1.3rem;
        }

        .service-card-pediatrics p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          color: var(--gray);
        }

        .service-features svg {
          color: var(--secondary);
        }

        .age-groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .age-group-card {
          background: white;
          padding: 30px;
          box-shadow: var(--shadow);
          text-align: center;
          position: relative;
        }

        .age-badge {
          background: var(--primary);
          color: white;
          padding: 10px 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
        }

        .age-services h4 {
          color: var(--primary-dark);
          margin: 20px 0 15px;
        }

        .age-services ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .age-services li {
          padding: 5px 0;
          color: var(--gray);
          border-bottom: 1px solid #f0f0f0;
        }

        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .condition-card {
          background: white;
          padding: 30px;
          box-shadow: var(--shadow);
        }

        .condition-card h3 {
          color: var(--primary-dark);
          margin-bottom: 20px;
          font-size: 1.2rem;
        }

        .treatments-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .treatment-tag {
          background: rgba(52, 168, 83, 0.1);
          color: var(--secondary);
          padding: 8px 16px;
          font-size: 0.9rem;
          border: 1px solid var(--secondary);
        }

        .vaccination-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .vaccination-content h2 {
          color: var(--primary-dark);
          margin-bottom: 20px;
          font-size: 2rem;
        }

        .vaccination-content p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        .vaccination-features {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--dark);
          font-weight: 500;
        }

        .vaccination-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          width: 100%;
          max-width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          font-weight: 500;
          text-align: center;
          padding: 20px;
        }

        .emergency-cta-pediatrics {
          background: linear-gradient(135deg, var(--accent), #f57c00);
          color: white;
          text-align: center;
        }

        .emergency-content h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .emergency-content p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .emergency-icon {
          margin-bottom: 20px;
        }

        @media (max-width: 968px) {
          .vaccination-info {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .vaccination-features {
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .pediatrics-hero {
            padding: 100px 0 60px;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .services-grid-pediatrics {
            grid-template-columns: 1fr;
          }

          .age-groups-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .conditions-grid {
            grid-template-columns: 1fr;
          }

          .emergency-content h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .age-groups-grid {
            grid-template-columns: 1fr;
          }

          .treatments-list {
            justify-content: center;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Pediatrics;