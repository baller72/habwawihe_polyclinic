import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  as: Component = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <Component className={baseClasses} {...props}>
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;