import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Award, 
  TrendingUp,
  Heart
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import AnimatedSection from '../ui/AnimatedSection';

const Partnerships = () => {
  const { language } = useLanguage();
  const [patientCount, setPatientCount] = React.useState(0);

  React.useEffect(() => {
    const targetCount = 12500;
    const duration = 3000;
    const increment = targetCount / (duration / 16);
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setPatientCount(targetCount);
        clearInterval(timer);
      } else {
        setPatientCount(Math.floor(currentCount));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const partners = [
    {
      name: "Assurance Inkinzo",
      // logo: "INKINZO",
      description: {
        fr: "Une assurance pour faciliter vos remboursements et avoir des soins de qualité",
        en: "Insurance partner to facilitate your reimbursements and access quality care"
      },
      since: "2020"
    },
    {
      name: "Mission Outreach",
      // logo: "MO",
      description: {
        fr: "Collaboration pour l'équipement médical et la formation du personnel",
        en: "Collaboration for medical equipment and staff training"
      },
      since: "2019"
    },
    {
      name: "Hospital Sisters of St. Francis",
      // logo: "HSSF",
      description: {
        fr: "Partenariat pour le développement des compétences et l'excellence médicale",
        en: "Partnership for skills development and medical excellence"
      },
      since: "2018"
    }
  ];

  const impacts = [
    {
      icon: Users,
      number: patientCount.toLocaleString() + "+",
      label: { fr: 'Patients Servis', en: 'Patients Served' }
    },
    {
      icon: Award,
      number: "15+",
      label: { fr: 'Services Médicaux', en: 'Medical Services' }
    },
    {
      icon: TrendingUp,
      number: "24/7",
      label: { fr: 'Disponibilité', en: 'Availability' }
    },
    {
      icon: Heart,
      number: "100%",
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
    <section className="partnerships-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">
            {language === 'fr' ? 'Partenariats & Impact' : 'Partnerships & Impact'}
          </h2>
        </AnimatedSection>

        {/* Impact Stats */}
        <motion.div 
          className="impact-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {impacts.map((impact, index) => (
            <motion.div key={index} className="impact-stat" variants={itemVariants}>
              <div className="impact-icon">
                <impact.icon size={40} color="var(--primary)" />
              </div>
              <div className="impact-number">{impact.number}</div>
              <div className="impact-label">
                {language === 'fr' ? impact.label.fr : impact.label.en}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <AnimatedSection>
          <h3 className="partners-title">
            {language === 'fr' ? 'Nos Partenaires Stratégiques' : 'Our Strategic Partners'}
          </h3>
        </AnimatedSection>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div 
                className="partner-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="partner-logo">
                  {partner.logo}
                </div>
                <div className="partner-info">
                  <h4>{partner.name}</h4>
                  <p>{language === 'fr' ? partner.description.fr : partner.description.en}</p>
                  <div className="partner-since">
                    <Handshake size={16} />
                    <span>
                      {language === 'fr' ? 'Partenaire depuis' : 'Partner since'} {partner.since}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mission Statement */}
        <AnimatedSection>
          <div className="mission-statement">
            <div className="mission-content">
              <h3>{language === 'fr' ? 'Notre Mission Collective' : 'Our Collective Mission'}</h3>
              <p>
                {language === 'fr'
                  ? 'À travers nos partenariats stratégiques, nous nous engageons à améliorer continuellement la qualité des soins, à rendre les services médicaux accessibles à tous et à investir dans l\'innovation médicale pour le bien-être de notre communauté.'
                  : 'Through our strategic partnerships, we are committed to continuously improving the quality of care, making medical services accessible to all, and investing in medical innovation for the well-being of our community.'
                }
              </p>
            </div>
            <div className="mission-values">
              <div className="value-item">
                <Award size={24} color="var(--secondary)" />
                <span>{language === 'fr' ? 'Excellence' : 'Excellence'}</span>
              </div>
              <div className="value-item">
                <Handshake size={24} color="var(--secondary)" />
                <span>{language === 'fr' ? 'Collaboration' : 'Collaboration'}</span>
              </div>
              <div className="value-item">
                <Heart size={24} color="var(--secondary)" />
                <span>{language === 'fr' ? 'Compassion' : 'Compassion'}</span>
              </div>
              <div className="value-item">
                <TrendingUp size={24} color="var(--secondary)" />
                <span>{language === 'fr' ? 'Innovation' : 'Innovation'}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx="true">{`
        .partnerships-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .partnerships-section .section-title {
          color: white;
        }

        .partnerships-section .section-title::after {
          background: var(--accent);
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .impact-stat {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 30px 20px;
          border-radius: 0;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .impact-icon {
          margin-bottom: 15px;
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--accent);
        }

        .impact-label {
          font-size: 1.1rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .partners-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          color: white;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .partner-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .partner-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        .partner-logo {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 20px;
          text-align: center;
        }

        .partner-info h4 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: white;
        }

        .partner-info p {
          line-height: 1.6;
          margin-bottom: 20px;
          opacity: 0.9;
        }

        .partner-since {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .mission-statement {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .mission-content h3 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: white;
        }

        .mission-content p {
          line-height: 1.6;
          margin-bottom: 30px;
          opacity: 0.9;
          font-size: 1.1rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .mission-values {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .impact-number {
            font-size: 2rem;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }

          .mission-values {
            gap: 20px;
          }

          .value-item {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .impact-stats {
            grid-template-columns: 1fr;
          }

          .mission-statement {
            padding: 30px 20px;
          }

          .mission-content h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Partnerships;