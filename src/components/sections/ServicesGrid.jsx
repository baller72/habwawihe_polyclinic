import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Ambulance, 
  User, 
  Baby,
  Scissors,
//   Female,
  Pill,
  Microscope,
  Eye,
//   Tooth,
  EyeOff,
  Bed,
  Ear,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ServicesGrid = ({ limit = null }) => {
  const { language } = useLanguage();

  const services = [
    {
      id: 'pediatrics',
      icon: Baby,
      title: { fr: 'Pédiatrie', en: 'Pediatrics' },
      description: {
        fr: 'Soins spécialisés pour les enfants de tous âges avec une approche douce et adaptée.',
        en: 'Specialized care for children of all ages with a gentle and adapted approach.'
      },
      link: '/pediatrics'
    },
    {
      id: 'emergency',
      icon: Ambulance,
      title: { fr: 'Urgence Médicale', en: 'Medical Emergency' },
      description: {
        fr: 'Service d\'urgence disponible 24h/24 pour situations critiques.',
        en: '24/7 emergency service for critical situations.'
      },
      link: '/services#emergency'
    },
    {
      id: 'consultation',
      icon: User,
      title: { fr: 'Consultation Générale', en: 'General Consultation' },
      description: {
        fr: 'Consultations médicales complètes avec professionnels expérimentés.',
        en: 'Comprehensive medical consultations with experienced professionals.'
      },
      link: '/services#consultation'
    },
    {
      id: 'maternity',
    //   icon: Female,
      title: { fr: 'Maternité', en: 'Maternity' },
      description: {
        fr: 'Accompagnement complet grossesse, accouchement et post-partum.',
        en: 'Comprehensive support for pregnancy, childbirth and postpartum.'
      },
      link: '/mother-baby'
    },
    {
      id: 'surgery',
      icon: Scissors,
      title: { fr: 'Petite Chirurgie', en: 'Minor Surgery' },
      description: {
        fr: 'Interventions chirurgicales mineures en conditions optimales.',
        en: 'Minor surgical procedures under optimal conditions.'
      },
      link: '/services#surgery'
    },
    {
      id: 'gyneco',
    //   icon: Female,
      title: { fr: 'Gynéco-Obstétrique', en: 'Gyneco-Obstetrics' },
      description: {
        fr: 'Soins spécialisés pour la santé des femmes à toutes les étapes.',
        en: 'Specialized care for women\'s health at all stages.'
      },
      link: '/services#gyneco'
    },
    {
      id: 'pharmacy',
      icon: Pill,
      title: { fr: 'Pharmacie', en: 'Pharmacy' },
      description: {
        fr: 'Pharmacie intégrée avec conseils professionnels.',
        en: 'Integrated pharmacy with professional advice.'
      },
      link: '/services#pharmacy'
    },
    {
      id: 'laboratory',
      icon: Microscope,
      title: { fr: 'Laboratoire', en: 'Laboratory' },
      description: {
        fr: 'Analyses médicales complètes avec résultats rapides.',
        en: 'Comprehensive medical analyses with fast results.'
      },
      link: '/services#laboratory'
    },
    {
      id: 'optometry',
      icon: Eye,
      title: { fr: 'Optométrie', en: 'Optometry' },
      description: {
        fr: 'Examens de la vue et prescriptions de verres correcteurs.',
        en: 'Eye examinations and corrective lens prescriptions.'
      },
      link: '/services#optometry'
    },
    {
      id: 'dentistry',
    //   icon: Tooth,
      title: { fr: 'Dentisterie', en: 'Dentistry' },
      description: {
        fr: 'Soins dentaires complets pour toute la famille.',
        en: 'Comprehensive dental care for the whole family.'
      },
      link: '/services#dentistry'
    },
    {
      id: 'ophthalmology',
      icon: EyeOff,
      title: { fr: 'Ophtalmologie', en: 'Ophthalmology' },
      description: {
        fr: 'Diagnostic et traitement des maladies oculaires.',
        en: 'Diagnosis and treatment of eye diseases.'
      },
      link: '/services#ophthalmology'
    },
    {
      id: 'hospitalization',
      icon: Bed,
      title: { fr: 'Hospitalisation', en: 'Hospitalization' },
      description: {
        fr: 'Unité d\'hospitalisation confortable pour séjours médicaux.',
        en: 'Comfortable hospitalization unit for medical stays.'
      },
      link: '/services#hospitalization'
    },
    {
      id: 'audiology',
      icon: Ear,
      title: { fr: 'Audiologie', en: 'Audiology' },
      description: {
        fr: 'Évaluation et traitement des troubles de l\'audition.',
        en: 'Evaluation and treatment of hearing disorders.'
      },
      link: '/services#audiology'
    }
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="section">
      <div className="container">
        {!limit && (
          <AnimatedSection>
            <h2 className="section-title">
              {language === 'fr' ? 'Tous Nos Services Médicaux' : 'All Our Medical Services'}
            </h2>
          </AnimatedSection>
        )}

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="service-icon">
                {/* <service.icon size={40} color="white" /> */}
              </div>
              <div className="service-content">
                <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                <Button 
                  as={Link} 
                  to={service.link}
                  variant="outline"
                  style={{ marginTop: '15px' }}
                >
                  {language === 'fr' ? 'En Savoir Plus' : 'Learn More'}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Button as={Link} to="/services" variant="primary">
                {language === 'fr' ? 'Voir Tous les Services' : 'View All Services'}
              </Button>
            </div>
          </AnimatedSection>
        )}
      </div>

      <style jsx="true">{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .service-icon {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 30px;
          text-align: center;
        }

        .service-content {
          padding: 25px;
        }

        .service-content h3 {
          color: var(--primary-dark);
          margin-bottom: 12px;
          font-size: 1.3rem;
        }

        .service-content p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-content {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .service-icon {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;