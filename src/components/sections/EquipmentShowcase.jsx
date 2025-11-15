import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Baby, Thermometer, Bed } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';

const EquipmentShowcase = ({ preview = false }) => {
  const { language } = useLanguage();
  const [currentEquipment, setCurrentEquipment] = useState(0);

  const equipment = [
    {
      id: 1,
      icon: Baby,
      name: { fr: "Couveuse Nouvelle Génération", en: "New Generation Incubator" },
      description: {
        fr: "Couveuse de pointe pour soins aux nouveau-nés prématurés avec contrôle précis de la température et de l'humidité",
        en: "State-of-the-art incubator for premature newborn care with precise temperature and humidity control"
      },
      impact: {
        fr: "Améliore significativement la survie des nouveau-nés prématurés",
        en: "Significantly improves survival rates for premature newborns"
      },
      features: {
        fr: ["Contrôle température précise", "Monitoring continu", "Environnement stérile"],
        en: ["Precise temperature control", "Continuous monitoring", "Sterile environment"]
      }
    },
    {
      id: 2,
      icon: Thermometer,
      name: { fr: "Réchauffeur Infantile", en: "Infant Warmer" },
      description: {
        fr: "Équipement médical avancé pour maintenir la température corporelle optimale des nourrissons",
        en: "Advanced medical equipment to maintain optimal body temperature for infants"
      },
      impact: {
        fr: "Réduit considérablement les risques d'hypothermie néonatale",
        en: "Significantly reduces risks of neonatal hypothermia"
      },
      features: {
        fr: ["Chauffage radiant", "Alarme de sécurité", "Contrôle automatique"],
        en: ["Radiant heating", "Safety alarms", "Automatic control"]
      }
    },
    {
      id: 3,
      icon: Bed,
      name: { fr: "Lit d'Accouchement Moderne", en: "Modern Birthing Bed" },
      description: {
        fr: "Lit d'accouchement ergonomique avec fonctions multiples pour le confort et la sécurité",
        en: "Ergonomic birthing bed with multiple functions for comfort and safety"
      },
      impact: {
        fr: "Optimise le confort et la sécurité pendant l'accouchement",
        en: "Optimizes comfort and safety during delivery"
      },
      features: {
        fr: ["Positionnement multiple", "Confort optimal", "Sécurité renforcée"],
        en: ["Multiple positioning", "Optimal comfort", "Enhanced safety"]
      }
    }
  ];

  const nextEquipment = () => {
    setCurrentEquipment((prev) => (prev + 1) % equipment.length);
  };

  const prevEquipment = () => {
    setCurrentEquipment((prev) => (prev - 1 + equipment.length) % equipment.length);
  };

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  if (preview) {
    return (
      <section className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'fr' ? 'Nouveaux Équipements' : 'New Equipment'}
          </motion.h2>
          
          <motion.div 
            className="grid grid-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipment.slice(0, 3).map((item, index) => (
              <motion.div key={item.id} className="card" variants={itemVariants}>
                <div className="card-header">
                  <item.icon size={48} color="white" />
                </div>
                <div className="card-body">
                  <h3 style={{ marginBottom: '15px', color: 'var(--primary-dark)' }}>
                    {language === 'fr' ? item.name.fr : item.name.en}
                  </h3>
                  <p style={{ color: 'var(--gray)', lineHeight: '1.6', marginBottom: '15px' }}>
                    {language === 'fr' ? item.description.fr : item.description.en}
                  </p>
                  <div style={{ 
                    background: 'rgba(52, 168, 83, 0.1)', 
                    padding: '15px', 
                    borderLeft: '4px solid var(--secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <strong>
                      {language === 'fr' ? 'Impact: ' : 'Impact: '}
                    </strong>
                    {language === 'fr' ? item.impact.fr : item.impact.en}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '40px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button to="/equipment" variant="primary">
              {language === 'fr' ? 'Voir Tous les Équipements' : 'View All Equipment'}
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ background: 'var(--light)' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {language === 'fr' ? 'Nos Nouveaux Équipements Médicaux' : 'Our New Medical Equipment'}
        </motion.h2>
        
        <div className="equipment-carousel">
          <motion.button
            className="carousel-btn prev"
            onClick={prevEquipment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <div className="carousel-container">
            <AnimatePresence mode="wait" custom={currentEquipment}>
              <motion.div
                key={currentEquipment}
                custom={currentEquipment}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="equipment-slide"
              >
                <div className="equipment-image">
                  <div className="placeholder-image">
                    {/* {equipment[currentEquipment].icon size={80} color="white"} */}
                    <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                      {language === 'fr' 
                        ? equipment[currentEquipment].name.fr 
                        : equipment[currentEquipment].name.en
                      }
                    </p>
                  </div>
                </div>
                <div className="equipment-info">
                  <h3>
                    {language === 'fr' 
                      ? equipment[currentEquipment].name.fr 
                      : equipment[currentEquipment].name.en
                    }
                  </h3>
                  <p>
                    {language === 'fr' 
                      ? equipment[currentEquipment].description.fr 
                      : equipment[currentEquipment].description.en
                    }
                  </p>
                  
                  <div className="features-list">
                    <h4>{language === 'fr' ? 'Caractéristiques' : 'Features'}</h4>
                    <ul>
                      {equipment[currentEquipment].features[language === 'fr' ? 'fr' : 'en'].map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="impact">
                    <strong>
                      {language === 'fr' ? 'Impact sur les soins: ' : 'Care Impact: '}
                    </strong>
                    {language === 'fr' 
                      ? equipment[currentEquipment].impact.fr 
                      : equipment[currentEquipment].impact.en
                    }
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.button
            className="carousel-btn next"
            onClick={nextEquipment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        
        <div className="equipment-indicators">
          {equipment.map((_, index) => (
            <motion.button
              key={index}
              className={`indicator ${index === currentEquipment ? 'active' : ''}`}
              onClick={() => setCurrentEquipment(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .equipment-carousel {
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 40px;
        }

        .carousel-btn {
          background: var(--primary);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .carousel-container {
          flex: 1;
          overflow: hidden;
          position: relative;
          min-height: 400px;
        }

        .equipment-slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .equipment-image {
          display: flex;
          justify-content: center;
        }

        .placeholder-image {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          width: 100%;
          max-width: 400px;
          height: 300px;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 500;
          text-align: center;
          padding: 20px;
        }

        .equipment-info h3 {
          font-size: 2rem;
          color: var(--primary-dark);
          margin-bottom: 20px;
        }

        .equipment-info p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 25px;
          color: var(--gray);
        }

        .features-list {
          margin-bottom: 25px;
        }

        .features-list h4 {
          color: var(--primary-dark);
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        .features-list ul {
          list-style: none;
          padding: 0;
        }

        .features-list li {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 25px;
        }

        .features-list li::before {
          content: '✓';
          color: var(--secondary);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .impact {
          background: rgba(52, 168, 83, 0.1);
          padding: 20px;
          border-left: 4px solid var(--secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .equipment-indicators {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 0;
          border: none;
          background: #ddd;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: var(--primary);
          transform: scale(1.2);
        }

        @media (max-width: 968px) {
          .equipment-slide {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .features-list ul {
            text-align: left;
          }
        }

        @media (max-width: 768px) {
          .equipment-carousel {
            flex-direction: column;
            gap: 20px;
          }

          .carousel-btn {
            order: 2;
          }

          .carousel-container {
            min-height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default EquipmentShowcase;