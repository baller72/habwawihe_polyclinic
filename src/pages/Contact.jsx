import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  User,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/common/Button';
import SymptomChecker from '../components/sections/SymptomChecker';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: { fr: 'Téléphone Urgence', en: 'Emergency Phone' },
      content: '+257 71 52 81 78',
      description: { fr: 'Disponible 24h/24', en: 'Available 24/7' },
      link: 'tel:71528178'
    },
    {
      icon: Mail,
      title: { fr: 'Email', en: 'Email' },
      content: 'habwawihepolyclinic@gmail.com',
      description: { fr: 'Réponse sous 24h', en: 'Response within 24h' },
      link: 'mailto:habwawihepolyclinic@gmail.com'
    },
    {
      icon: MapPin,
      title: { fr: 'Adresse', en: 'Address' },
      content: 'Quartier Muyaga, Zone Gihosha',
      description: 'Bujumbura-Burundi',
      link: '#'
    },
    // {
    //   icon: Clock,
    //   title: { fr: 'Heures d\'Ouverture', en: 'Opening Hours' },
    //   content: '24h/24 - 7j/7',
    //   description: { fr: 'Lundi-Samedi: 08h00-18h00', en: 'Monday-Saturday: 08:00-18:00' },
    //   link: '#'
    // }
  ];

  const services = [
    { value: '', label: { fr: 'Sélectionnez un service', en: 'Select a service' } },
    { value: 'emergency', label: { fr: 'Urgence Médicale', en: 'Medical Emergency' } },
    { value: 'consultation', label: { fr: 'Consultation Générale', en: 'General Consultation' } },
    { value: 'pediatrics', label: { fr: 'Pédiatrie', en: 'Pediatrics' } },
    { value: 'maternity', label: { fr: 'Maternité', en: 'Maternity' } },
    { value: 'surgery', label: { fr: 'Petite Chirurgie', en: 'Minor Surgery' } },
    { value: 'gyneco', label: { fr: 'Gynéco-Obstétrique', en: 'Gyneco-Obstetrics' } },
    { value: 'laboratory', label: { fr: 'Laboratoire', en: 'Laboratory' } },
    { value: 'pharmacy', label: { fr: 'Pharmacie', en: 'Pharmacy' } }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(language === 'fr' 
      ? 'Merci pour votre message! Nous vous contacterons bientôt.'
      : 'Thank you for your message! We will contact you soon.'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="contact-title">
              {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
            </motion.h1>
            <motion.p variants={itemVariants} className="contact-subtitle">
              {language === 'fr'
                ? 'Notre équipe est disponible 24h/24 pour répondre à vos besoins médicaux. N\'hésitez pas à nous contacter pour toute question ou prise de rendez-vous.'
                : 'Our team is available 24/7 to meet your medical needs. Do not hesitate to contact us for any questions or appointments.'
              }
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {language === 'fr' ? 'Informations de Contact' : 'Contact Information'}
          </motion.h2>
          
          <motion.div 
            className="contact-info-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="contact-info-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">
                  <info.icon size={32} color="var(--primary)" />
                </div>
                <div className="contact-details">
                  <h3>{language === 'fr' ? info.title.fr : info.title.en}</h3>
                  <a href={info.link} className="contact-content">
                    {info.content}
                  </a>
                  <p className="contact-description">
                    {typeof info.description === 'object' 
                      ? (language === 'fr' ? info.description.fr : info.description.en)
                      : info.description
                    }
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '30px', color: 'var(--primary-dark)' }}>
                {language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
              </h2>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={18} />
                    {language === 'fr' ? 'Nom Complet' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={18} />
                    {language === 'fr' ? 'Téléphone' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="71528178"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">
                    {language === 'fr' ? 'Service Demandé' : 'Requested Service'}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    {services.map(service => (
                      <option key={service.value} value={service.value}>
                        {language === 'fr' ? service.label.fr : service.label.en}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <MessageCircle size={18} />
                    {language === 'fr' ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder={language === 'fr' 
                      ? 'Décrivez votre besoin médical...' 
                      : 'Describe your medical need...'
                    }
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  {language === 'fr' ? 'Envoyer le Message' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              className="map-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: '30px', color: 'var(--primary-dark)' }}>
                {language === 'fr' ? 'Notre Emplacement' : 'Our Location'}
              </h2>
              
              <div className="map-container">
                <div className="map-placeholder">
                  <MapPin size={48} color="var(--primary)" />
                  <h3 style={{ margin: '20px 0 10px', color: 'var(--primary-dark)' }}>
                    HABWAWIHE MEDICAL POLYCLINIC
                  </h3>
                  <p style={{ color: 'var(--gray)', textAlign: 'center', lineHeight: '1.6' }}>
                    Quartier Muyaga, Zone Gihosha<br />
                    Bujumbura-Burundi
                  </p>
                  <Button 
                    as="a" 
                    href="https://maps.google.com/?q=Quartier+Muyaga,+Zone+Gihosha,+Bujumbura,+Burundi"
                    target="_blank"
                    variant="outline"
                    style={{ marginTop: '20px' }}
                  >
                    <MapPin size={16} />
                    {language === 'fr' ? 'Voir sur Google Maps' : 'View on Google Maps'}
                  </Button>
                </div>
              </div>

              <div className="location-details">
                <h3 style={{ marginBottom: '15px', color: 'var(--primary-dark)' }}>
                  {language === 'fr' ? 'Accès et Stationnement' : 'Access & Parking'}
                </h3>
                <ul style={{ color: 'var(--gray)', lineHeight: '1.6' }}>
                  <li>{language === 'fr' ? '✓ Accès facile par la route principale' : '✓ Easy access from main road'}</li>
                  <li>{language === 'fr' ? '✓ Stationnement sécurisé disponible' : '✓ Secure parking available'}</li>
                  <li>{language === 'fr' ? '✓ Accès handicapé' : '✓ Wheelchair accessible'}</li>
                  <li>{language === 'fr' ? '✓ Transport public à proximité' : '✓ Public transport nearby'}</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Symptom Checker */}
      <SymptomChecker />

      <style jsx="true">{`
        .contact-hero {
          background: linear-gradient(
            135deg,
            rgba(26, 115, 232, 0.9) 0%,
            rgba(13, 71, 161, 0.9) 100%
          ), url('https://images.unsplash.com/photo-1584467735871-8db9ac8d55b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .contact-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .contact-subtitle {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.95;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .contact-info-card {
          background: white;
          padding: 30px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .contact-info-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .contact-icon {
          margin-bottom: 20px;
        }

        .contact-details h3 {
          color: var(--primary-dark);
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .contact-content {
          display: block;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .contact-content:hover {
          color: var(--primary-dark);
        }

        .contact-description {
          color: var(--gray);
          font-size: 0.9rem;
          margin: 0;
        }

        .contact-content {
          display: block;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .contact-content:hover {
          color: var(--primary-dark);
        }

        .contact-description {
          color: var(--gray);
          font-size: 0.9rem;
          margin: 0;
        }

        .contact-content {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .contact-form-section {
          flex: 1;
        }

        .map-section {
          flex: 1;
        }

        .contact-form {
          background: white;
          padding: 40px;
          box-shadow: var(--shadow);
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--dark);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e1e5e9;
          border-radius: 0;
          font-family: inherit;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.1);
        }

        .form-group textarea {
          min-height: 120px;
          resize: vertical;
        }

        .map-container {
          margin-bottom: 30px;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--dark);
          padding: 40px;
          text-align: center;
        }

        .location-details {
          background: white;
          padding: 30px;
          box-shadow: var(--shadow);
        }

        .location-details ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .location-details li {
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        @media (max-width: 968px) {
          .contact-content {
            flex-direction: column;
            gap: 40px;
          }

          .contact-form {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
          }

          .contact-subtitle {
            font-size: 1.1rem;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }

          .map-placeholder {
            height: 250px;
            padding: 30px;
          }
        }

        @media (max-width: 480px) {
          .contact-title {
            font-size: 2rem;
          }

          .contact-form {
            padding: 20px;
          }

          .map-placeholder {
            height: 200px;
            padding: 20px;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;