import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Heart, 
  Users, 
  Shield,
  Calendar,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/common/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

const MotherBaby = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Calendar,
      title: { fr: 'Suivi de Grossesse', en: 'Pregnancy Monitoring' },
      description: {
        fr: 'Consultations prénatales régulières avec échographies et suivi médical complet pour une grossesse en santé.',
        en: 'Regular prenatal consultations with ultrasounds and complete medical monitoring for a healthy pregnancy.'
      },
      features: {
        fr: ['Échographies', 'Suivi mensuel', 'Tests de dépistage', 'Conseils nutrition'],
        en: ['Ultrasounds', 'Monthly monitoring', 'Screening tests', 'Nutrition advice']
      }
    },
    {
      icon: Baby,
      title: { fr: 'Accouchement', en: 'Childbirth' },
      description: {
        fr: 'Prise en charge de l\'accouchement dans un environnement sécurisé avec une équipe médicale expérimentée.',
        en: 'Childbirth management in a secure environment with an experienced medical team.'
      },
      features: {
        fr: ['Salle d\'accueil moderne', 'Équipe 24h/24', 'Analgésie', 'Suivi continu'],
        en: ['Modern delivery room', '24/7 team', 'Pain management', 'Continuous monitoring']
      }
    },
    {
      icon: Heart,
      title: { fr: 'Post-Partum', en: 'Postpartum' },
      description: {
        fr: 'Soins et soutien après l\'accouchement pour la mère et le nouveau-né avec suivi personnalisé.',
        en: 'Care and support after childbirth for mother and newborn with personalized follow-up.'
      },
      features: {
        fr: ['Soins du nouveau-né', 'Conseils allaitement', 'Suivi médical', 'Soutien psychologique'],
        en: ['Newborn care', 'Breastfeeding advice', 'Medical follow-up', 'Psychological support']
      }
    },
    {
      icon: Shield,
      title: { fr: 'Planning Familial', en: 'Family Planning' },
      description: {
        fr: 'Conseils et méthodes de planification familiale adaptées à vos besoins, disponibles gratuitement.',
        en: 'Family planning advice and methods tailored to your needs, available free of charge.'
      },
      features: {
        fr: ['Consultation gratuite', 'Méthodes variées', 'Suivi personnalisé', 'Confidentialité'],
        en: ['Free consultation', 'Various methods', 'Personalized follow-up', 'Confidentiality']
      }
    }
  ];

  const freeServices = [
    {
      title: { fr: 'Vaccination', en: 'Vaccination' },
      description: {
        fr: 'Programme complet de vaccination pour les femmes enceintes et les nouveau-nés',
        en: 'Complete vaccination program for pregnant women and newborns'
      }
    },
    {
      title: { fr: 'Consultation Prénatale', en: 'Prenatal Consultation' },
      description: {
        fr: 'Suivi mensuel gratuit pendant toute la durée de la grossesse',
        en: 'Free monthly monitoring throughout pregnancy'
      }
    },
    {
      title: { fr: 'Suivi Postnatal', en: 'Postnatal Follow-up' },
      description: {
        fr: 'Consultations gratuites pour la mère et le bébé après l\'accouchement',
        en: 'Free consultations for mother and baby after childbirth'
      }
    }
  ];

  const equipment = [
    {
      name: { fr: 'Couveuses Modernes', en: 'Modern Incubators' },
      description: {
        fr: 'Équipements de pointe pour les nouveau-nés prématurés avec contrôle précis',
        en: 'State-of-the-art equipment for premature newborns with precise control'
      }
    },
    {
      name: { fr: 'Salles d\'Accueil', en: 'Delivery Rooms' },
      description: {
        fr: 'Environnement confortable et sécurisé pour l\'accouchement',
        en: 'Comfortable and secure environment for childbirth'
      }
    },
    {
      name: { fr: 'Monitoring Fœtal', en: 'Fetal Monitoring' },
      description: {
        fr: 'Systèmes de surveillance avancés pour le bien-être du bébé',
        en: 'Advanced monitoring systems for baby\'s well-being'
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
      <section className="page-hero mother-baby-hero">
        <div className="container">
          <AnimatedSection>
            <div className="hero-content">
              <h1>{language === 'fr' ? 'Soins Mère & Enfant' : 'Mother & Baby Care'}</h1>
              <p>
                {language === 'fr'
                  ? 'Un accompagnement complet et bienveillant pour les mères et leurs bébés, de la grossesse aux premiers mois de vie.'
                  : 'Comprehensive and caring support for mothers and their babies, from pregnancy to the first months of life.'
                }
              </p>
              <div className="hero-actions">
                <Button as={Link} to="/contact" variant="primary">
                  <Calendar size={20} />
                  {language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
                </Button>
                <Button as={Link} to="/services" variant="outline">
                  {language === 'fr' ? 'Voir tous les Services' : 'View All Services'}
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
              {language === 'fr' ? 'Nos Services Mère-Enfant' : 'Our Mother-Baby Services'}
            </h2>
          </AnimatedSection>

          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="service-card-detailed">
                  <div className="service-icon-large">
                    <service.icon size={48} color="white" />
                  </div>
                  <div className="service-content-detailed">
                    <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                    <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                    
                    <div className="service-features">
                      <h4>{language === 'fr' ? 'Ce qui est inclus:' : 'What\'s included:'}</h4>
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
                      {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Free Services */}
      <section className="section" style={{ background: 'rgba(52, 168, 83, 0.05)' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Services Gratuits' : 'Free Services'}
            </h2>
            <p className="section-subtitle">
              {language === 'fr'
                ? 'Nous croyons que chaque mère et chaque enfant mérite des soins de qualité accessibles'
                : 'We believe every mother and child deserves accessible quality care'
              }
            </p>
          </AnimatedSection>

          <div className="free-services-grid">
            {freeServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="free-service-card-highlight">
                  <div className="free-badge-large">
                    <Shield size={24} />
                    {language === 'fr' ? 'GRATUIT' : 'FREE'}
                  </div>
                  <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                  <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Équipements Spécialisés' : 'Specialized Equipment'}
            </h2>
          </AnimatedSection>

          <div className="equipment-showcase">
            {equipment.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="equipment-item">
                  <div className="equipment-icon">
                    <Baby size={32} color="var(--primary)" />
                  </div>
                  <div className="equipment-info">
                    <h3>{language === 'fr' ? item.name.fr : item.name.en}</h3>
                    <p>{language === 'fr' ? item.description.fr : item.description.en}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section emergency-cta">
        <div className="container">
          <AnimatedSection>
            <div className="emergency-content">
              <div className="emergency-icon">
                <Stethoscope size={64} color="white" />
              </div>
              <h2>{language === 'fr' ? 'Urgence Grossesse' : 'Pregnancy Emergency'}</h2>
              <p>
                {language === 'fr'
                  ? 'En cas de signes anormaux pendant la grossesse, contactez-nous immédiatement'
                  : 'In case of abnormal signs during pregnancy, contact us immediately'
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
        .mother-baby-hero {
          background: linear-gradient(
            135deg,
            rgba(255, 182, 193, 0.9) 0%,
            rgba(255, 105, 180, 0.9) 100%
          ), url('https://images.unsplash.com/photo-1512675828443-4f454c42253a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
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

        .services-grid-detailed {
          display: grid;
          gap: 40px;
        }

        .service-card-detailed {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 30px;
          background: white;
          padding: 40px;
          box-shadow: var(--shadow);
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .service-card-detailed:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .service-icon-large {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-content-detailed h3 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .service-content-detailed p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features h4 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.1rem;
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

        .section-subtitle {
          text-align: center;
          color: var(--gray);
          font-size: 1.2rem;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .free-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .free-service-card-highlight {
          background: white;
          padding: 40px 30px;
          text-align: center;
          border: 3px solid var(--secondary);
          position: relative;
          transition: all 0.3s ease;
        }

        .free-service-card-highlight:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .free-badge-large {
          background: var(--secondary);
          color: white;
          padding: 12px 24px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
        }

        .free-service-card-highlight h3 {
          color: var(--primary-dark);
          margin: 20px 0 15px;
          font-size: 1.3rem;
        }

        .free-service-card-highlight p {
          color: var(--gray);
          line-height: 1.6;
        }

        .equipment-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .equipment-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: white;
          padding: 30px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }

        .equipment-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .equipment-icon {
          flex-shrink: 0;
        }

        .equipment-info h3 {
          color: var(--primary-dark);
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .equipment-info p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        .emergency-cta {
          background: linear-gradient(135deg, var(--danger), #c53030);
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

        @media (max-width: 768px) {
          .mother-baby-hero {
            padding: 100px 0 60px;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .service-card-detailed {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 30px 20px;
          }

          .service-icon-large {
            padding: 20px;
          }

          .service-features li {
            justify-content: center;
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

          .free-service-card-highlight {
            padding: 40px 20px 30px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default MotherBaby;