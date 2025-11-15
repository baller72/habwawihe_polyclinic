// src/App.js
import React, { useState, createContext, useContext } from 'react';
import './App.css';

// Language Context
const LanguageContext = createContext();

// Main App Component
function App() {
  const [language, setLanguage] = useState('fr');
  const [currentPage, setCurrentPage] = useState('home');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'contact': return <ContactPage />;
      case 'mother-baby': return <MotherBabyPage />;
      case 'pediatrics': return <PediatricsPage />;
      case 'equipment': return <EquipmentPage />;
      default: return <HomePage />;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="App">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        <main>
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </LanguageContext.Provider>
  );
}

// Header Component
function Header({ currentPage, setCurrentPage }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  
  const navItems = [
    { key: 'home', fr: 'Accueil', en: 'Home' },
    { key: 'about', fr: 'À Propos', en: 'About' },
    { key: 'services', fr: 'Services', en: 'Services' },
    { key: 'contact', fr: 'Contact', en: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>HABWAWIHE MEDICAL POLYCLINIC</h1>
          <div className="logo-slogan">
            {language === 'fr' ? 'Intégrité, Professionnalisme, Développement' : 'Integrity, Professionalism, Development'}
          </div>
        </div>
        
        <nav className="nav">
          <ul>
            {navItems.map(item => (
              <li key={item.key}>
                <a 
                  href="#" 
                  className={currentPage === item.key ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.key);
                  }}
                >
                  {language === 'fr' ? item.fr : item.en}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'fr' ? 'EN' : 'FR'}
        </button>
        
        <button className="mobile-menu-btn">☰</button>
      </div>
    </header>
  );
}

// Home Page Component
function HomePage() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>{language === 'fr' ? 'Soins de santé de qualité 24h/24' : 'Quality Healthcare 24/7'}</h2>
          <p>
            {language === 'fr' 
              ? 'Notre polyclinique offre des services médicaux complets avec intégrité, professionnalisme et engagement envers votre bien-être.'
              : 'Our polyclinic offers comprehensive medical services with integrity, professionalism and commitment to your well-being.'
            }
          </p>
          <div className="hero-buttons">
            <button 
              className="btn" 
              onClick={() => window.location.href = '#services'}
            >
              {language === 'fr' ? 'Nos Services' : 'Our Services'}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => window.location.href = '#contact'}
            >
              {language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <EquipmentShowcase preview={true} />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Partnerships */}
      <PartnershipsSection />
    </div>
  );
}

// Equipment Showcase Component
function EquipmentShowcase({ preview = false }) {
  const { language } = useContext(LanguageContext);
  
  const equipment = [
    {
      id: 1,
      name: { fr: "Couveuse Nouvelle Génération", en: "New Generation Incubator" },
      description: {
        fr: "Couveuse de pointe pour soins aux nouveau-nés prématurés",
        en: "State-of-the-art incubator for premature newborn care"
      },
      impact: {
        fr: "Améliore la survie des nouveau-nés prématurés",
        en: "Improves survival rates for premature newborns"
      }
    },
    {
      id: 2,
      name: { fr: "Réchauffeur Infantile", en: "Infant Warmer" },
      description: {
        fr: "Équipement pour maintenir la température corporelle des nourrissons",
        en: "Equipment to maintain infant body temperature"
      },
      impact: {
        fr: "Réduit les risques d'hypothermie néonatale",
        en: "Reduces risks of neonatal hypothermia"
      }
    },
    {
      id: 3,
      name: { fr: "Lit d'Accouchement Moderne", en: "Modern Birthing Bed" },
      description: {
        fr: "Lit d'accouchement ergonomique avec fonctions multiples",
        en: "Ergonomic birthing bed with multiple functions"
      },
      impact: {
        fr: "Améliore le confort et la sécurité pendant l'accouchement",
        en: "Improves comfort and safety during delivery"
      }
    }
  ];

  const [currentEquipment, setCurrentEquipment] = useState(0);

  const nextEquipment = () => {
    setCurrentEquipment((prev) => (prev + 1) % equipment.length);
  };

  const prevEquipment = () => {
    setCurrentEquipment((prev) => (prev - 1 + equipment.length) % equipment.length);
  };

  if (preview) {
    return (
      <section className="equipment-preview">
        <div className="container">
          <h2 className="section-title">
            {language === 'fr' ? 'Nouveaux Équipements' : 'New Equipment'}
          </h2>
          <div className="equipment-grid">
            {equipment.slice(0, 2).map((item, index) => (
              <div key={item.id} className="equipment-card">
                <div className="equipment-icon">🏥</div>
                <h3>{language === 'fr' ? item.name.fr : item.name.en}</h3>
                <p>{language === 'fr' ? item.description.fr : item.description.en}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              className="btn"
              onClick={() => window.location.href = '#equipment'}
            >
              {language === 'fr' ? 'Voir Tous les Équipements' : 'View All Equipment'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="equipment-showcase">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'Nos Nouveaux Équipements Médicaux' : 'Our New Medical Equipment'}
        </h2>
        
        <div className="equipment-carousel">
          <button className="carousel-btn prev" onClick={prevEquipment}>‹</button>
          
          <div className="equipment-slide">
            <div className="equipment-image">
              <div className="placeholder-image">
                {language === 'fr' ? 'Image de ' : 'Image of '}
                {language === 'fr' 
                  ? equipment[currentEquipment].name.fr 
                  : equipment[currentEquipment].name.en
                }
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
              <div className="impact">
                <strong>
                  {language === 'fr' ? 'Impact: ' : 'Impact: '}
                </strong>
                {language === 'fr' 
                  ? equipment[currentEquipment].impact.fr 
                  : equipment[currentEquipment].impact.en
                }
              </div>
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextEquipment}>›</button>
        </div>
        
        <div className="equipment-indicators">
          {equipment.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentEquipment ? 'active' : ''}`}
              onClick={() => setCurrentEquipment(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Preview Component
function ServicesPreview() {
  const { language } = useContext(LanguageContext);
  
  const services = [
    {
      icon: '👶',
      title: { fr: 'Pédiatrie', en: 'Pediatrics' },
      description: {
        fr: 'Soins spécialisés pour les enfants de tous âges',
        en: 'Specialized care for children of all ages'
      }
    },
    {
      icon: '🚑',
      title: { fr: 'Urgence Médicale', en: 'Medical Emergency' },
      description: {
        fr: 'Service d\'urgence disponible 24h/24',
        en: 'Emergency service available 24/7'
      }
    },
    {
      icon: '🤰',
      title: { fr: 'Maternité', en: 'Maternity' },
      description: {
        fr: 'Soins complets pour mères et nouveau-nés',
        en: 'Comprehensive care for mothers and newborns'
      }
    }
  ];

  return (
    <section className="services-preview">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'Nos Services Principaux' : 'Our Main Services'}
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{language === 'fr' ? service.title.fr : service.title.en}</h3>
                <p>{language === 'fr' ? service.description.fr : service.description.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Partnerships Section Component
function PartnershipsSection() {
  const { language } = useContext(LanguageContext);
  const [patientCount, setPatientCount] = useState(0);

  React.useEffect(() => {
    // Animate counter
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

  return (
    <section className="partnerships">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'Partenariats & Impact' : 'Partnerships & Impact'}
        </h2>
        
        <div className="partnership-content">
          <div className="partners">
            <h3>{language === 'fr' ? 'Nos Partenaires' : 'Our Partners'}</h3>
            <div className="partner-logos">
              <div className="partner-logo">
                <div className="logo-placeholder">INKINZO</div>
                <span>{language === 'fr' ? 'Assurance' : 'Insurance'}</span>
              </div>
              <div className="partner-logo">
                <div className="logo-placeholder">MO</div>
                <span>Mission Outreach</span>
              </div>
              <div className="partner-logo">
                <div className="logo-placeholder">HSSF</div>
                <span>Hospital Sisters of St. Francis</span>
              </div>
            </div>
          </div>
          
          <div className="impact-counter">
            <h3>{language === 'fr' ? 'Patients Servis' : 'Patients Served'}</h3>
            <div className="count">{patientCount.toLocaleString()}+</div>
            <p>
              {language === 'fr' 
                ? 'Depuis notre ouverture, nous avons servi des milliers de patients avec des soins de qualité'
                : 'Since our opening, we have served thousands of patients with quality care'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Page Component
function AboutPage() {
  const { language } = useContext(LanguageContext);
  
  return (
    <section className="about-page">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'À Propos de Notre Polyclinique' : 'About Our Polyclinic'}
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              {language === 'fr' 
                ? 'Fondée avec pour mission de fournir des soins de santé accessibles et de qualité, la Polyclinique HABWAWIHE s\'engage à servir la communauté avec intégrité, professionnalisme et dévouement.'
                : 'Founded with the mission to provide accessible and quality healthcare, HABWAWIHE Polyclinic is committed to serving the community with integrity, professionalism and dedication.'
              }
            </p>
            
            <h3>{language === 'fr' ? 'Nos Valeurs' : 'Our Values'}</h3>
            <ul className="values-list">
              <li>{language === 'fr' ? 'Intégrité dans toutes nos actions' : 'Integrity in all our actions'}</li>
              <li>{language === 'fr' ? 'Professionnalisme dans nos soins' : 'Professionalism in our care'}</li>
              <li>{language === 'fr' ? 'Développement continu de nos services' : 'Continuous development of our services'}</li>
              <li>{language === 'fr' ? 'Respect et dignité pour chaque patient' : 'Respect and dignity for every patient'}</li>
              <li>{language === 'fr' ? 'Accessibilité des soins pour tous' : 'Accessibility of care for all'}</li>
            </ul>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              {language === 'fr' ? 'Image de la Polyclinique' : 'Polyclinic Image'}
            </div>
          </div>
        </div>
        
        <EquipmentShowcase />
      </div>
    </section>
  );
}

// Services Page Component
function ServicesPage() {
  const { language } = useContext(LanguageContext);
  
  const allServices = [
    { icon: '👶', key: 'pediatrics', fr: 'Pédiatrie', en: 'Pediatrics' },
    { icon: '🚑', key: 'emergency', fr: 'Urgence Médicale', en: 'Medical Emergency' },
    { icon: '👩‍⚕️', key: 'consultation', fr: 'Consultation', en: 'Consultation' },
    { icon: '🤰', key: 'maternity', fr: 'Maternité', en: 'Maternity' },
    { icon: '🔪', key: 'surgery', fr: 'Petite Chirurgie', en: 'Minor Surgery' },
    { icon: '👩‍🔬', key: 'gyneco', fr: 'Gynéco-Obstétrique', en: 'Gyneco-Obstetrics' },
    { icon: '💊', key: 'pharmacy', fr: 'Pharmacie', en: 'Pharmacy' },
    { icon: '🔬', key: 'lab', fr: 'Laboratoire', en: 'Laboratory' },
    { icon: '👁️', key: 'optometry', fr: 'Optométrie', en: 'Optometry' },
    { icon: '🦷', key: 'dentistry', fr: 'Dentisterie', en: 'Dentistry' },
    { icon: '👀', key: 'ophthalmology', fr: 'Ophtalmologie', en: 'Ophthalmology' },
    { icon: '🏥', key: 'hospitalization', fr: 'Hospitalisation', en: 'Hospitalization' },
    { icon: '👂', key: 'audiology', fr: 'Audiologie', en: 'Audiology' }
  ];

  const freeServices = [
    { icon: '💉', fr: 'Vaccination', en: 'Vaccination' },
    { icon: '👨‍👩‍👧‍👦', fr: 'Planning Familial', en: 'Family Planning' },
    { icon: '🤰', fr: 'Consultation Pré et Post Natal', en: 'Pre and Post Natal Consultation' }
  ];

  return (
    <section className="services-page">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'Nos Services Médicaux' : 'Our Medical Services'}
        </h2>
        
        <div className="services-grid-full">
          {allServices.map(service => (
            <div key={service.key} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{language === 'fr' ? service.fr : service.en}</h3>
                <p>
                  {language === 'fr' 
                    ? `Service de ${service.fr.toLowerCase()} disponible`
                    : `${service.en} service available`
                  }
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Services */}
        <div className="free-services-section">
          <h2 className="section-title">
            {language === 'fr' ? 'Services Gratuits' : 'Free Services'}
          </h2>
          <div className="free-services-grid">
            {freeServices.map((service, index) => (
              <div key={index} className="service-card free-service">
                <div className="service-icon">{service.icon}</div>
                <div className="service-content">
                  <h3>{language === 'fr' ? service.fr : service.en}</h3>
                  <p className="free-badge">
                    {language === 'fr' ? 'GRATUIT' : 'FREE'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services Links */}
        <div className="specialized-services">
          <h3>{language === 'fr' ? 'Services Spécialisés' : 'Specialized Services'}</h3>
          <div className="specialized-links">
            <button className="btn btn-outline">
              {language === 'fr' ? 'Soins Mère & Enfant' : 'Mother & Baby Care'}
            </button>
            <button className="btn btn-outline">
              {language === 'fr' ? 'Services Pédiatriques' : 'Pediatric Services'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Page Component
function ContactPage() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="section-title">
          {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
        </h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>{language === 'fr' ? 'Téléphone' : 'Phone'}</h3>
                <p>71528178</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>habwawihepolyclinic@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>{language === 'fr' ? 'Adresse' : 'Address'}</h3>
                <p>Quartier Muyaga, Zone Gihosha, Bujumbura-Burundi</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>{language === 'fr' ? 'Heures d\'Ouverture' : 'Opening Hours'}</h3>
                <p>{language === 'fr' ? 'Ouvert tous les jours 24h/24' : 'Open everyday 24/7'}</p>
                <p>Lundi-Samedi: 08h00-18h00</p>
              </div>
            </div>

            <InteractiveMap />
          </div>
          
          <div className="contact-form">
            <h3>{language === 'fr' ? 'Prendre Rendez-vous' : 'Book Appointment'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  {language === 'fr' ? 'Nom Complet' : 'Full Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  {language === 'fr' ? 'Téléphone' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  <option value="">
                    {language === 'fr' ? 'Sélectionnez un service' : 'Select a service'}
                  </option>
                  <option value="emergency">
                    {language === 'fr' ? 'Urgence Médicale' : 'Medical Emergency'}
                  </option>
                  <option value="consultation">
                    {language === 'fr' ? 'Consultation' : 'Consultation'}
                  </option>
                  <option value="pediatrics">
                    {language === 'fr' ? 'Pédiatrie' : 'Pediatrics'}
                  </option>
                  <option value="maternity">
                    {language === 'fr' ? 'Maternité' : 'Maternity'}
                  </option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  {language === 'fr' ? 'Message' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">
                {language === 'fr' ? 'Envoyer' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        {/* Symptom Checker */}
        <SymptomChecker />
      </div>
    </section>
  );
}

// Interactive Map Component
function InteractiveMap() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="interactive-map">
      <h3>{language === 'fr' ? 'Notre Emplacement' : 'Our Location'}</h3>
      <div className="map-container">
        <div className="map-placeholder">
          {language === 'fr' 
            ? 'Carte Interactive - Quartier Muyaga, Zone Gihosha, Bujumbura'
            : 'Interactive Map - Muyaga Quarter, Gihosha Zone, Bujumbura'
          }
        </div>
      </div>
    </div>
  );
}

// Symptom Checker Component
function SymptomChecker() {
  const { language } = useContext(LanguageContext);
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      question: {
        fr: "Avez-vous de la fièvre (température > 38°C) ?",
        en: "Do you have a fever (temperature > 38°C)?"
      },
      options: [
        { fr: "Oui", en: "Yes", value: true },
        { fr: "Non", en: "No", value: false }
      ]
    },
    {
      question: {
        fr: "Avez-vous une toux persistante ?",
        en: "Do you have a persistent cough?"
      },
      options: [
        { fr: "Oui", en: "Yes", value: true },
        { fr: "Non", en: "No", value: false }
      ]
    },
    {
      question: {
        fr: "Avez-vous des difficultés respiratoires ?",
        en: "Do you have difficulty breathing?"
      },
      options: [
        { fr: "Oui", en: "Yes", value: true },
        { fr: "Non", en: "No", value: false }
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const newResponses = [...responses, answer];
    setResponses(newResponses);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze responses
      const urgentCount = newResponses.filter(r => r === true).length;
      if (urgentCount >= 2) {
        setResult({
          fr: "Consultez immédiatement un médecin. Appelez le 71528178.",
          en: "Consult a doctor immediately. Call 71528178."
        });
      } else {
        setResult({
          fr: "Surveillez vos symptômes. Consultez si ils s'aggravent.",
          en: "Monitor your symptoms. Consult if they worsen."
        });
      }
    }
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setResponses([]);
    setResult(null);
  };

  return (
    <div className="symptom-checker">
      <h3>{language === 'fr' ? 'Vérificateur de Symptômes' : 'Symptom Checker'}</h3>
      
      {!result ? (
        <div className="checker-step">
          <p>{language === 'fr' 
            ? questions[currentStep].question.fr 
            : questions[currentStep].question.en
          }</p>
          <div className="checker-options">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline"
                onClick={() => handleAnswer(option.value)}
              >
                {language === 'fr' ? option.fr : option.en}
              </button>
            ))}
          </div>
          <div className="progress">
            {language === 'fr' ? 'Question' : 'Question'} {currentStep + 1}/{questions.length}
          </div>
        </div>
      ) : (
        <div className="checker-result">
          <p>{language === 'fr' ? result.fr : result.en}</p>
          <button className="btn" onClick={resetChecker}>
            {language === 'fr' ? 'Recommencer' : 'Start Over'}
          </button>
        </div>
      )}
    </div>
  );
}

// Footer Component
function Footer({ setCurrentPage }) {
  const { language } = useContext(LanguageContext);
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HABWAWIHE MEDICAL POLYCLINIC</h3>
            <p>
              {language === 'fr' 
                ? 'Intégrité, Professionnalisme, Développement'
                : 'Integrity, Professionalism, Development'
              }
            </p>
            <p>
              {language === 'fr' 
                ? 'Votre santé, notre priorité.'
                : 'Your health, our priority.'
              }
            </p>
          </div>
          
          <div className="footer-section">
            <h3>{language === 'fr' ? 'Services Rapides' : 'Quick Services'}</h3>
            <ul>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }}>
                  {language === 'fr' ? 'Urgence Médicale' : 'Medical Emergency'}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }}>
                  {language === 'fr' ? 'Consultation' : 'Consultation'}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }}>
                  {language === 'fr' ? 'Pharmacie' : 'Pharmacy'}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }}>
                  {language === 'fr' ? 'Laboratoire' : 'Laboratory'}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{language === 'fr' ? 'Liens Utiles' : 'Useful Links'}</h3>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>
                {language === 'fr' ? 'Accueil' : 'Home'}
              </a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>
                {language === 'fr' ? 'À Propos' : 'About'}
              </a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('services'); }}>
                {language === 'fr' ? 'Services' : 'Services'}
              </a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>
                {language === 'fr' ? 'Contact' : 'Contact'}
              </a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{language === 'fr' ? 'Contact' : 'Contact'}</h3>
            <p>📞 71528178</p>
            <p>✉️ habwawihepolyclinic@gmail.com</p>
            <p>📍 Quartier Muyaga, Zone Gihosha, Bujumbura-Burundi</p>
          </div>
        </div>
        
        <div className="copyright">
          &copy; 2024 HABWAWIHE MEDICAL POLYCLINIC. 
          {language === 'fr' ? ' Tous droits réservés.' : ' All rights reserved.'}
        </div>
      </div>
    </footer>
  );
}

// Additional page components (simplified for brevity)
function MotherBabyPage() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="page">
      <div className="container">
        <h1>{language === 'fr' ? 'Soins Mère & Enfant' : 'Mother & Baby Care'}</h1>
        {/* Content would go here */}
      </div>
    </div>
  );
}

function PediatricsPage() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="page">
      <div className="container">
        <h1>{language === 'fr' ? 'Services Pédiatriques' : 'Pediatric Services'}</h1>
        {/* Content would go here */}
      </div>
    </div>
  );
}

function EquipmentPage() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="page">
      <div className="container">
        <h1>{language === 'fr' ? 'Équipements Médicaux' : 'Medical Equipment'}</h1>
        <EquipmentShowcase />
      </div>
    </div>
  );
}

export default App;