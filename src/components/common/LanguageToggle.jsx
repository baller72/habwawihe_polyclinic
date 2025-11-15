import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const toggleVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      variants={toggleVariants}
      whileHover="hover"
      whileTap="tap"
      title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      {/* <Languages size={20} /> */}
      <span>{language === 'fr' ? 'EN' : 'FR'}</span>
    </motion.button>
  );
};

export default LanguageToggle;