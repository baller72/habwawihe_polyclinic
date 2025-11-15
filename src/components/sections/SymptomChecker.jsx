import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Stethoscope, 
  Thermometer, 
  Heart, 
  Brain,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../common/Button';

const SymptomChecker = () => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      icon: Thermometer,
      question: {
        fr: "Avez-vous de la fièvre (température > 38°C) ?",
        en: "Do you have a fever (temperature > 38°C)?"
      },
      options: [
        { value: 'high', label: { fr: "Fièvre élevée (>39°C)", en: "High fever (>39°C)" }, severity: 3 },
        { value: 'moderate', label: { fr: "Fièvre modérée", en: "Moderate fever" }, severity: 2 },
        { value: 'low', label: { fr: "Légère fièvre", en: "Slight fever" }, severity: 1 },
        { value: 'none', label: { fr: "Pas de fièvre", en: "No fever" }, severity: 0 }
      ]
    },
    {
      id: 2,
      icon: Heart,
      question: {
        fr: "Avez-vous des difficultés respiratoires ?",
        en: "Do you have difficulty breathing?"
      },
      options: [
        { value: 'severe', label: { fr: "Difficulté sévère", en: "Severe difficulty" }, severity: 3 },
        { value: 'moderate', label: { fr: "Essoufflement modéré", en: "Moderate shortness" }, severity: 2 },
        { value: 'mild', label: { fr: "Légère gêne", en: "Mild discomfort" }, severity: 1 },
        { value: 'none', label: { fr: "Respiration normale", en: "Normal breathing" }, severity: 0 }
      ]
    },
    {
      id: 3,
      icon: Brain,
      question: {
        fr: "Avez-vous des douleurs ou autres symptômes ?",
        en: "Do you have pain or other symptoms?"
      },
      options: [
        { value: 'severe_pain', label: { fr: "Douleur sévère", en: "Severe pain" }, severity: 3 },
        { value: 'chest_pain', label: { fr: "Douleur thoracique", en: "Chest pain" }, severity: 3 },
        { value: 'headache', label: { fr: "Mal de tête", en: "Headache" }, severity: 1 },
        { value: 'none', label: { fr: "Aucune douleur", en: "No pain" }, severity: 0 }
      ]
    }
  ];

  const results = {
    emergency: {
      icon: AlertTriangle,
      color: 'var(--danger)',
      title: {
        fr: "CONSULTATION URGENTE REQUISE",
        en: "URGENT CONSULTATION REQUIRED"
      },
      message: {
        fr: "Vos symptômes nécessitent une attention médicale immédiate. Contactez-nous immédiatement au 71528178 ou rendez-vous à notre service d'urgence.",
        en: "Your symptoms require immediate medical attention. Contact us immediately at 71528178 or go to our emergency department."
      },
      actions: {
        fr: ["Appeler Urgence", "Se Rendre aux Urgences"],
        en: ["Call Emergency", "Go to Emergency"]
      }
    },
    consult: {
      icon: Stethoscope,
      color: 'var(--accent)',
      title: {
        fr: "CONSULTATION RECOMMANDÉE",
        en: "CONSULTATION RECOMMENDED"
      },
      message: {
        fr: "Il est recommandé de consulter un médecin dans les 24 heures. Surveillez vos symptômes et contactez-nous si ils s'aggravent.",
        en: "It is recommended to consult a doctor within 24 hours. Monitor your symptoms and contact us if they worsen."
      },
      actions: {
        fr: ["Prendre Rendez-vous", "Appeler pour Conseils"],
        en: ["Book Appointment", "Call for Advice"]
      }
    },
    monitor: {
      icon: CheckCircle,
      color: 'var(--secondary)',
      title: {
        fr: "SURVEILLANCE À DOMICILE",
        en: "HOME MONITORING"
      },
      message: {
        fr: "Vos symptômes peuvent être surveillés à domicile. Reposez-vous, hydratez-vous et consultez si les symptômes persistent ou s'aggravent.",
        en: "Your symptoms can be monitored at home. Rest, hydrate and consult if symptoms persist or worsen."
      },
      actions: {
        fr: ["Conseils de Soins", "Rappel dans 24h"],
        en: ["Care Advice", "Follow-up in 24h"]
      }
    }
  };

  const handleAnswer = (answer) => {
    const newResponses = [...responses, answer];
    setResponses(newResponses);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result based on responses
      const totalSeverity = newResponses.reduce((sum, response) => sum + response.severity, 0);
      
      let resultKey;
      if (totalSeverity >= 6) {
        resultKey = 'emergency';
      } else if (totalSeverity >= 3) {
        resultKey = 'consult';
      } else {
        resultKey = 'monitor';
      }
      
      setResult(resultKey);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setResponses(responses.slice(0, -1));
    }
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setResponses([]);
    setResult(null);
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

  const stepVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            {language === 'fr' ? 'Vérificateur de Symptômes' : 'Symptom Checker'}
          </motion.h2>
          
          <motion.p 
            className="checker-description"
            variants={itemVariants}
            style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--gray)' }}
          >
            {language === 'fr'
              ? 'Cet outil vous aide à évaluer vos symptômes et à déterminer la marche à suivre. Note: Ceci ne remplace pas une consultation médicale.'
              : 'This tool helps you assess your symptoms and determine the next steps. Note: This does not replace a medical consultation.'
            }
          </motion.p>

          <div className="symptom-checker-container">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={`step-${currentStep}`}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="checker-step"
                >
                  <div className="step-header">
                    {currentStep > 0 && (
                      <motion.button
                        className="back-button"
                        onClick={handleBack}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowLeft size={20} />
                        {language === 'fr' ? 'Retour' : 'Back'}
                      </motion.button>
                    )}
                    
                    <div className="step-progress">
                      {language === 'fr' ? 'Question' : 'Question'} {currentStep + 1}/{questions.length}
                    </div>
                  </div>

                  <div className="question-content">
                    <div className="question-icon">
                      {/* <questions[currentStep].icon size={64} color="var(--primary)" /> */}
                    </div>
                    
                    <h3 className="question-text">
                      {language === 'fr' 
                        ? questions[currentStep].question.fr 
                        : questions[currentStep].question.en
                      }
                    </h3>

                    <div className="options-grid">
                      {questions[currentStep].options.map((option, index) => (
                        <motion.button
                          key={option.value}
                          className="option-button"
                          onClick={() => handleAnswer(option)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          variants={itemVariants}
                        >
                          {language === 'fr' ? option.label.fr : option.label.en}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="checker-result"
                >
                  <div 
                    className="result-icon"
                    style={{ color: results[result].color }}
                  >
                    {/* <results[result].icon size={80} /> */}
                  </div>
                  
                  <h3 className="result-title" style={{ color: results[result].color }}>
                    {language === 'fr' ? results[result].title.fr : results[result].title.en}
                  </h3>
                  
                  <p className="result-message">
                    {language === 'fr' ? results[result].message.fr : results[result].message.en}
                  </p>

                  <div className="result-actions">
                    {results[result].actions[language === 'fr' ? 'fr' : 'en'].map((action, index) => (
                      <Button
                        key={index}
                        variant={index === 0 ? 'primary' : 'outline'}
                        as={index === 0 ? 'a' : 'button'}
                        href={index === 0 ? 'tel:71528178' : undefined}
                        onClick={index === 1 ? () => window.location.href = '/contact' : undefined}
                      >
                        {action}
                      </Button>
                    ))}
                    
                    <Button
                      variant="outline"
                      onClick={resetChecker}
                      style={{ marginTop: '15px' }}
                    >
                      <RotateCcw size={16} />
                      {language === 'fr' ? 'Recommencer' : 'Start Over'}
                    </Button>
                  </div>

                  <div className="disclaimer">
                    <AlertTriangle size={16} />
                    <small>
                      {language === 'fr'
                        ? 'Ceci est un outil d\'orientation. En cas d\'urgence, appelez immédiatement le 71528178.'
                        : 'This is a guidance tool. In case of emergency, call 71528178 immediately.'
                      }
                    </small>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .symptom-checker-container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          box-shadow: var(--shadow-lg);
          padding: 40px;
        }

        .step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .back-button {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .step-progress {
          color: var(--gray);
          font-size: 0.9rem;
        }

        .question-content {
          text-align: center;
        }

        .question-icon {
          margin-bottom: 20px;
        }

        .question-text {
          font-size: 1.4rem;
          color: var(--primary-dark);
          margin-bottom: 30px;
          line-height: 1.4;
        }

        .options-grid {
          display: grid;
          gap: 15px;
        }

        .option-button {
          padding: 20px;
          background: white;
          border: 2px solid #e1e5e9;
          color: var(--dark);
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          text-align: left;
        }

        .option-button:hover {
          border-color: var(--primary);
          background: rgba(26, 115, 232, 0.05);
        }

        .checker-result {
          text-align: center;
        }

        .result-icon {
          margin-bottom: 20px;
        }

        .result-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .result-message {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--gray);
          margin-bottom: 30px;
        }

        .result-actions {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 20px;
        }

        .disclaimer {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          color: var(--danger);
          font-size: 0.8rem;
          padding: 15px;
          background: rgba(234, 67, 53, 0.05);
          border: 1px solid rgba(234, 67, 53, 0.2);
        }

        @media (max-width: 768px) {
          .symptom-checker-container {
            padding: 30px 20px;
          }

          .question-text {
            font-size: 1.2rem;
          }

          .option-button {
            padding: 15px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .step-header {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .result-title {
            font-size: 1.3rem;
          }

          .result-message {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SymptomChecker;