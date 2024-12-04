import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
  children: React.ReactNode;
  overlayOpacity?: number;
}

const ParallaxSection = ({ 
  imageUrl, 
  height = '100vh',
  children,
  overlayOpacity = 0.7
}: ParallaxSectionProps) => {
  return (
    <div 
      className="relative"
      style={{ height }}
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70"
          style={{ opacity: overlayOpacity }}
        />
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxSection;