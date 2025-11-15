import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Shield, 
  Users,
  Activity,
  Heart
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Hero from '../components/sections/Hero';
import EquipmentShowcase from '../components/sections/EquipmentShowcase';
import ServicesGrid from '../components/sections/ServicesGrid';
import Partnerships from '../components/sections/Partnerships';
import Button from '../components/common/Button';

const Home = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: { fr: 'Ouvert 24h/24', en: 'Open 24/7' },
      description: { 
        fr: 'Services médicaux disponibles tous les jours, 24 heures sur 24',
        en: 'Medical services available every day, 24 hours a day'
      }
    },
    {
      icon: Shield,
      title: { fr: 'Services Gratuits', en: 'Free Services' },
      description: { 
        fr: 'Vaccination, planning familial et consultations pré/post-natal gratuits',
        en: 'Free vaccination, family planning and pre/post-natal consultations'
      }
    },
    {
      icon: Users,
      title: { fr: 'Équipe Qualifiée', en: 'Qualified Team' },
      description: { 
        fr: 'Professionnels de santé expérimentés et dévoués',
        en: 'Experienced and dedicated healthcare professionals'
      }
    },
    {
      icon: Activity,
      title: { fr: 'Équipements Modernes', en: 'Modern Equipment' },
      description: { 
        fr: 'Équipements médicaux de dernière génération',
        en: 'State-of-the-art medical equipment'
      }
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
      <Hero />
      
      {/* Features Section */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <motion.h2 className="section-title" variants={itemVariants}>
            {language === 'fr' ? 'Pourquoi Nous Choisir' : 'Why Choose Us'}
          </motion.h2>
          <motion.div className="grid grid-4" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div key={index} className="card" variants={itemVariants}>
                <div className="card-header">
                  <feature.icon size={48} color="white" />
                </div>
                <div className="card-body">
                  <h3 style={{ marginBottom: '15px', color: 'var(--primary-dark)' }}>
                    {language === 'fr' ? feature.title.fr : feature.title.en}
                  </h3>
                  <p style={{ color: 'var(--gray)', lineHeight: '1.6' }}>
                    {language === 'fr' ? feature.description.fr : feature.description.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EquipmentShowcase preview={true} />
      <ServicesGrid limit={6} />
      <Partnerships />

      {/* Emergency CTA Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
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
            <Heart size={64} color="white" style={{ margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
              {language === 'fr' ? 'Votre Santé, Notre Priorité' : 'Your Health, Our Priority'}
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
              {language === 'fr' 
                ? 'Des soins médicaux de qualité accessibles à tous, 24 heures sur 24'
                : 'Quality medical care accessible to all, 24 hours a day'
              }
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* <Button as={Link} to="/contact" variant="secondary" size="large">
                {language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
                <ArrowRight size={20} />
              </Button> */}
              <Button as={Link} to="/services" variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                {language === 'fr' ? 'Nos Services' : 'Our Services'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;