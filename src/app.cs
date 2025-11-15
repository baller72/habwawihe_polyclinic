src/App.css
:root {
  --primary: #1a73e8;
  --primary-dark: #0d47a1;
  --secondary: #34a853;
  --accent: #fbbc05;
  --light: #f8f9fa;
  --dark: #202124;
  --gray: #5f6368;
  --danger: #ea4335;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: #f5f7fa;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 16px;
}

.btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
}

.btn-secondary {
  background-color: var(--secondary);
}

.btn-secondary:hover {
  background-color: #2d8c47;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: white;
}

section {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--primary-dark);
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background-color: var(--accent);
  margin: 15px auto;
  border-radius: 2px;
}

.text-center {
  text-align: center;
}

/* Header Styles */
.header {
  background-color: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo h1 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 5px;
}

.logo-slogan {
  font-size: 0.85rem;
  color: var(--gray);
  font-style: italic;
}

.nav ul {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav ul li a {
  text-decoration: none;
  color: var(--dark);
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 6px;
}

.nav ul li a:hover,
.nav ul li a.active {
  color: var(--primary);
  background-color: rgba(26, 115, 232, 0.1);
}

.language-toggle {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.language-toggle:hover {
  background: var(--primary-dark);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--dark);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, rgba(26, 115, 232, 0.9), rgba(52, 168, 83, 0.8)),
              url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 150px 0;
  position: relative;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 25px;
  font-weight: 700;
}

.hero p {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Equipment Showcase */
.equipment-showcase {
  background: white;
  padding: 80px 0;
}

.equipment-carousel {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

.carousel-btn {
  background: var(--primary);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: var(--primary-dark);
  transform: scale(1.1);
}

.equipment-slide {
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;
}

.equipment-image {
  flex: 1;
}

.placeholder-image {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
}

.equipment-info {
  flex: 1;
}

.equipment-info h3 {
  font-size: 2rem;
  color: var(--primary-dark);
  margin-bottom: 20px;
}

.equipment-info p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--gray);
}

.impact {
  background: rgba(52, 168, 83, 0.1);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
}

.equipment-indicators {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--primary);
  transform: scale(1.2);
}

/* Equipment Preview */
.equipment-preview {
  background: #f8f9fa;
  padding: 80px 0;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.equipment-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.equipment-card:hover {
  transform: translateY(-10px);
}

.equipment-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.equipment-card h3 {
  color: var(--primary-dark);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

/* Services Grid */
.services-grid,
.services-grid-full {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.service-content {
  padding: 25px;
}

.service-content h3 {
  margin-bottom: 12px;
  color: var(--primary-dark);
  font-size: 1.3rem;
}

.service-content p {
  color: var(--gray);
  line-height: 1.6;
}

.free-service {
  border: 2px solid var(--secondary);
}

.free-badge {
  background: var(--secondary);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
}

/* Partnerships Section */
.partnerships {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 80px 0;
}

.partnerships .section-title {
  color: white;
}

.partnerships .section-title::after {
  background: var(--accent);
}

.partnership-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.partner-logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.partner-logo {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.logo-placeholder {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--accent);
}

.impact-counter {
  text-align: center;
}

.count {
  font-size: 4rem;
  font-weight: 700;
  margin: 20px 0;
  color: var(--accent);
}

/* About Page */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text h3 {
  color: var(--primary-dark);
  margin: 30px 0 20px;
  font-size: 1.5rem;
}

.values-list {
  list-style: none;
}

.values-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 30px;
}

.values-list li::before {
  content: '✓';
  color: var(--secondary);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.about-image .image-placeholder {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  height: 400px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  font-size: 1.2rem;
  font-weight: 500;
}

/* Contact Page */
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 20px;
}

.contact-icon {
  background: var(--primary);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.contact-info h3 {
  margin-bottom: 8px;
  color: var(--primary-dark);
}

/* Form Styles */
.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--dark);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
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

/* Map */
.map-container {
  margin-top: 20px;
}

.map-placeholder {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark);
  font-size: 1.1rem;
  font-weight: 500;
}

/* Symptom Checker */
.symptom-checker {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
}

.symptom-checker h3 {
  color: var(--primary-dark);
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.8rem;
}

.checker-step,
.checker-result {
  text-align: center;
}

.checker-step p {
  font-size: 1.3rem;
  margin-bottom: 30px;
  color: var(--dark);
}

.checker-options {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.progress {
  color: var(--gray);
  font-size: 0.9rem;
}

.checker-result p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--dark);
  line-height: 1.6;
}

/* Footer */
.footer {
  background: var(--dark);
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  margin-bottom: 20px;
  color: var(--accent);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: white;
}

.copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #aaa;
}

/* Free Services Section */
.free-services-section {
  background: rgba(52, 168, 83, 0.05);
  padding: 60px;
  border-radius: 20px;
  margin: 60px 0;
  border: 2px dashed var(--secondary);
}

.free-services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

/* Specialized Services */
.specialized-services {
  text-align: center;
  margin-top: 60px;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.specialized-services h3 {
  color: var(--primary-dark);
  margin-bottom: 30px;
  font-size: 1.8rem;
}

.specialized-links {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 20px;
  }

  .nav ul {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .mobile-menu-btn {
    display: block;
  }

  .hero h2 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .equipment-slide {
    flex-direction: column;
  }

  .about-content,
  .contact-container,
  .partnership-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid-full {
    grid-template-columns: 1fr;
  }

  .specialized-links {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  section {
    padding: 60px 0;
  }

  .hero {
    padding: 100px 0;
  }

  .equipment-carousel {
    flex-direction: column;
  }

  .carousel-btn {
    order: 2;
  }
}