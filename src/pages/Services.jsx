import React, { useState } from 'react';
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
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/common/Button';

const Services = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allServices = [
    {
      id: 'pediatrics',
      icon: Baby,
      title: { fr: 'Pédiatrie', en: 'Pediatrics' },
      description: {
        fr: 'Soins spécialisés pour les enfants de tous âges avec une approche douce et adaptée à leurs besoins spécifiques.',
        en: 'Specialized care for children of all ages with a gentle approach tailored to their specific needs.'
      },
      features: {
        fr: ['Consultation pédiatrique', 'Vaccination', 'Suivi de croissance', 'Soins néonatals'],
        en: ['Pediatric consultation', 'Vaccination', 'Growth monitoring', 'Neonatal care']
      },
      category: 'specialized'
    },
    {
      id: 'emergency',
      icon: Ambulance,
      title: { fr: 'Urgence Médicale', en: 'Medical Emergency' },
      description: {
        fr: 'Service d\'urgence disponible 24h/24 pour prendre en charge toutes les situations critiques avec rapidité et efficacité.',
        en: '24/7 emergency service to handle all critical situations with speed and efficiency.'
      },
      features: {
        fr: ['Urgence 24h/24', 'Équipe spécialisée', 'Équipements de réanimation', 'Transport médicalisé'],
        en: ['24/7 emergency', 'Specialized team', 'Resuscitation equipment', 'Medical transport']
      },
      category: 'emergency'
    },
    {
      id: 'consultation',
      icon: User,
      title: { fr: 'Consultation Générale', en: 'General Consultation' },
      description: {
        fr: 'Consultations médicales complètes avec des professionnels expérimentés pour un diagnostic précis et un traitement adapté.',
        en: 'Comprehensive medical consultations with experienced professionals for accurate diagnosis and appropriate treatment.'
      },
      features: {
        fr: ['Diagnostic médical', 'Prescription', 'Suivi médical', 'Conseils santé'],
        en: ['Medical diagnosis', 'Prescription', 'Medical follow-up', 'Health advice']
      },
      category: 'general'
    },
    {
      id: 'maternity',
    //   icon: Female,
      title: { fr: 'Maternité', en: 'Maternity' },
      description: {
        fr: 'Accompagnement complet pendant la grossesse, l\'accouchement et le post-partum dans un environnement sécurisé et bienveillant.',
        en: 'Comprehensive support during pregnancy, childbirth and postpartum in a safe and caring environment.'
      },
      features: {
        fr: ['Suivi grossesse', 'Accouchement', 'Post-partum', 'Planning familial'],
        en: ['Pregnancy monitoring', 'Childbirth', 'Postpartum', 'Family planning']
      },
      category: 'specialized'
    },
    {
      id: 'surgery',
      icon: Scissors,
      title: { fr: 'Petite Chirurgie', en: 'Minor Surgery' },
      description: {
        fr: 'Interventions chirurgicales mineures réalisées dans des conditions optimales d\'hygiène et de sécurité par des chirurgiens expérimentés.',
        en: 'Minor surgical procedures performed under optimal hygiene and safety conditions by experienced surgeons.'
      },
      features: {
        fr: ['Chirurgie ambulatoire', 'Sutures', 'Biopsies', 'Ablations'],
        en: ['Outpatient surgery', 'Sutures', 'Biopsies', 'Removals']
      },
      category: 'surgical'
    },
    {
      id: 'gyneco',
    //   icon: Female,
      title: { fr: 'Gynéco-Obstétrique', en: 'Gyneco-Obstetrics' },
      description: {
        fr: 'Soins spécialisés pour la santé des femmes à toutes les étapes de la vie, de l\'adolescence à la ménopause.',
        en: 'Specialized care for women\'s health at all stages of life, from adolescence to menopause.'
      },
      features: {
        fr: ['Consultation gynécologique', 'Échographie', 'Dépistage', 'Ménopause'],
        en: ['Gynecological consultation', 'Ultrasound', 'Screening', 'Menopause']
      },
      category: 'specialized'
    },
    {
      id: 'pharmacy',
      icon: Pill,
      title: { fr: 'Pharmacie', en: 'Pharmacy' },
      description: {
        fr: 'Pharmacie intégrée pour vos prescriptions médicales avec conseils professionnels et suivi des traitements.',
        en: 'Integrated pharmacy for your medical prescriptions with professional advice and treatment monitoring.'
      },
      features: {
        fr: ['Médicaments', 'Conseils pharmaceutiques', 'Suivi traitement', 'Produits de santé'],
        en: ['Medications', 'Pharmaceutical advice', 'Treatment monitoring', 'Health products']
      },
      category: 'support'
    },
    {
      id: 'laboratory',
      icon: Microscope,
      title: { fr: 'Laboratoire', en: 'Laboratory' },
      description: {
        fr: 'Analyses médicales complètes avec des résultats rapides, fiables et interprétés par nos biologistes médicaux.',
        en: 'Comprehensive medical analyses with fast, reliable results interpreted by our medical biologists.'
      },
      features: {
        fr: ['Analyses sanguines', 'Biochimie', 'Hématologie', 'Bactériologie'],
        en: ['Blood tests', 'Biochemistry', 'Hematology', 'Bacteriology']
      },
      category: 'diagnostic'
    },
    {
      id: 'optometry',
      icon: Eye,
      title: { fr: 'Optométrie', en: 'Optometry' },
      description: {
        fr: 'Examens de la vue complets et prescriptions de verres correcteurs adaptés à vos besoins visuels spécifiques.',
        en: 'Comprehensive eye examinations and prescriptions for corrective lenses tailored to your specific visual needs.'
      },
      features: {
        fr: ['Examen de la vue', 'Prescription lunettes', 'Dépistage maladies oculaires', 'Lentilles'],
        en: ['Eye examination', 'Glasses prescription', 'Eye disease screening', 'Contact lenses']
      },
      category: 'specialized'
    },
    {
      id: 'dentistry',
    //   icon: Tooth,
      title: { fr: 'Dentisterie', en: 'Dentistry' },
      description: {
        fr: 'Soins dentaires complets pour toute la famille dans un environnement moderne et confortable avec des dentistes expérimentés.',
        en: 'Comprehensive dental care for the whole family in a modern and comfortable environment with experienced dentists.'
      },
      features: {
        fr: ['Soins dentaires', 'Détartrage', 'Blanchiment', 'Prothèses'],
        en: ['Dental care', 'Scaling', 'Whitening', 'Dentures']
      },
      category: 'specialized'
    },
    {
      id: 'ophthalmology',
      icon: EyeOff,
      title: { fr: 'Ophtalmologie', en: 'Ophthalmology' },
      description: {
        fr: 'Diagnostic et traitement des maladies oculaires avec des équipements de pointe et des ophtalmologues spécialisés.',
        en: 'Diagnosis and treatment of eye diseases with state-of-the-art equipment and specialized ophthalmologists.'
      },
      features: {
        fr: ['Consultation ophtalmologique', 'Traitement maladies', 'Chirurgie oculaire', 'Suivi post-opératoire'],
        en: ['Ophthalmological consultation', 'Disease treatment', 'Eye surgery', 'Post-operative follow-up']
      },
      category: 'specialized'
    },
    {
      id: 'hospitalization',
      icon: Bed,
      title: { fr: 'Hospitalisation', en: 'Hospitalization' },
      description: {
        fr: 'Unité d\'hospitalisation confortable pour des séjours médicaux en toute sérénité avec un personnel soignant dévoué.',
        en: 'Comfortable hospitalization unit for medical stays in complete serenity with dedicated nursing staff.'
      },
      features: {
        fr: ['Chambres privées', 'Soins infirmiers 24h/24', 'Repas adaptés', 'Confort patient'],
        en: ['Private rooms', '24/7 nursing care', 'Adapted meals', 'Patient comfort']
      },
      category: 'care'
    },
    {
      id: 'audiology',
      icon: Ear,
      title: { fr: 'Audiologie', en: 'Audiology' },
      description: {
        fr: 'Évaluation et traitement des troubles de l\'audition avec des solutions adaptées et un suivi personnalisé.',
        en: 'Evaluation and treatment of hearing disorders with appropriate solutions and personalized follow-up.'
      },
      features: {
        fr: ['Test auditif', 'Appareillage', 'Rééducation', 'Conseils'],
        en: ['Hearing test', 'Fitting', 'Rehabilitation', 'Advice']
      },
      category: 'specialized'
    }
  ];

  const freeServices = [
    {
      icon: Shield,
      title: { fr: 'Vaccination', en: 'Vaccination' },
      description: {
        fr: 'Programme de vaccination complet pour enfants et adultes, entièrement gratuit.',
        en: 'Complete vaccination program for children and adults, completely free.'
      }
    },
    {
      icon: CheckCircle,
      title: { fr: 'Planning Familial', en: 'Family Planning' },
      description: {
        fr: 'Conseils et méthodes de planification familiale adaptés à vos besoins, sans frais.',
        en: 'Family planning advice and methods tailored to your needs, free of charge.'
      }
    },
    {
      icon: Baby,
      title: { fr: 'Consultation Pré et Post Natal', en: 'Pre and Post Natal Consultation' },
      description: {
        fr: 'Suivi complet de la grossesse et après l\'accouchement, offert gratuitement.',
        en: 'Complete pregnancy and post-delivery follow-up, offered free of charge.'
      }
    }
  ];

  const categories = [
    { id: 'all', label: { fr: 'Tous les Services', en: 'All Services' } },
    { id: 'emergency', label: { fr: 'Urgence', en: 'Emergency' } },
    { id: 'specialized', label: { fr: 'Spécialités', en: 'Specialties' } },
    { id: 'surgical', label: { fr: 'Chirurgie', en: 'Surgery' } },
    { id: 'diagnostic', label: { fr: 'Diagnostic', en: 'Diagnostic' } },
    { id: 'care', label: { fr: 'Soins', en: 'Care' } }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices
    : allServices.filter(service => service.category === selectedCategory);

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="services-hero-content"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="services-title">
              {language === 'fr' ? 'Nos Services Médicaux' : 'Our Medical Services'}
            </motion.h1>
            <motion.p variants={itemVariants} className="services-subtitle">
              {language === 'fr'
                ? 'Une gamme complète de services médicaux de qualité, disponibles 24 heures sur 24 pour répondre à tous vos besoins de santé.'
                : 'A comprehensive range of quality medical services, available 24 hours a day to meet all your healthcare needs.'
              }
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="categories-filter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {language === 'fr' ? category.label.fr : category.label.en}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredServices.map(service => (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="service-icon">
                  {/* <service.icon size={48} color="white" /> */}
                </div>
                <div className="service-content">
                  <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                  <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                  
                  <div className="service-features">
                    <h4>{language === 'fr' ? 'Services inclus:' : 'Services included:'}</h4>
                    <ul>
                      {service.features[language === 'fr' ? 'fr' : 'en'].map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    as={Link}
                    id={service.id}
                    to={`/services#${service.id}`}
                    variant="outline"
                    style={{ marginTop: '20px', width: '100%' }}
                  >
                    {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                    {/* <ArrowRight size={16} /> */}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free Services Section */}
      <section className="section" style={{ background: 'rgba(52, 168, 83, 0.05)' }}>
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'fr' ? 'Services Gratuits' : 'Free Services'}
          </motion.h2>
          
          <motion.div 
            className="free-services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {freeServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="free-service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="free-service-icon">
                  <service.icon size={48} color="var(--secondary)" />
                </div>
                <div className="free-service-content">
                  <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                  <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
                  {/* <div className="free-badge">
                    {language === 'fr' ? 'GRATUIT' : 'FREE'}
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA */}
      {/* <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--danger), #c53030)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Ambulance size={64} color="white" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              {language === 'fr' ? 'Urgence Médicale 24h/24' : '24/7 Medical Emergency'}
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '30px' }}>
              {language === 'fr' 
                ? 'Composez le 71528178 pour une assistance immédiate'
                : 'Call 71528178 for immediate assistance'
              }
            </p>
            <Button 
              as="a" 
              href="tel:71528178"
              variant="secondary"
              size="large"
            >
              <Ambulance size={20} />
              {language === 'fr' ? 'Appeler Urgence' : 'Call Emergency'}
            </Button>
          </motion.div>
        </div>
      </section> */}

      <style jsx="true">{`
        .services-hero {
          background: linear-gradient(
            135deg,
            rgba(26, 115, 232, 0.9) 0%,
            rgba(13, 71, 161, 0.9) 100%
          ), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .services-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-subtitle {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.95;
        }

        .categories-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }

        .category-btn {
          padding: 12px 24px;
          background: white;
          border: 2px solid var(--primary);
          color: var(--primary);
          cursor: pointer;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--primary);
          color: white;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
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
          padding: 30px;
        }

        .service-content h3 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .service-content p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features h4 {
          color: var(--primary-dark);
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }

        .service-features li {
          padding: 5px 0;
          border-bottom: 1px solid #f0f0f0;
          position: relative;
          padding-left: 20px;
          color: var(--gray);
        }

        .service-features li::before {
          content: '✓';
          color: var(--secondary);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .free-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .free-service-card {
          background: white;
          padding: 40px 30px;
          text-align: center;
          border: 2px solid var(--secondary);
          position: relative;
          transition: all 0.3s ease;
        }

        .free-service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .free-service-icon {
          margin-bottom: 20px;
        }

        .free-service-content h3 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .free-service-content p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .free-badge {
          background: var(--secondary);
          color: white;
          padding: 8px 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 2.5rem;
          }

          .services-subtitle {
            font-size: 1.1rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .categories-filter {
            flex-direction: column;
            align-items: center;
          }

          .category-btn {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 2rem;
          }

          .service-content,
          .free-service-card {
            padding: 20px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Services;