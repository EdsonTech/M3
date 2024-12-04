import React from 'react';
import { motion } from 'framer-motion';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBorder = ({ children, className = '' }: GradientBorderProps) => {
  return (
    <div className="relative group">
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-m3-bright via-m3-dark to-m3-bright rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className={`relative bg-white dark:bg-gray-900 rounded-lg ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;