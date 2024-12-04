import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParallaxSection from '../ui/ParallaxSection';
import FloatingElements from '../ui/FloatingElements';
import { IMAGES } from '../../utils/constants';

const Hero = () => {
  return (
    <ParallaxSection 
      imageUrl={IMAGES.hero}
      height="100vh"
      overlayOpacity={0.8}
    >
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-5xl mx-auto px-4"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6"
        >
          M3TECH
          <span className="block text-m3-bright">SOLUÇÕES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Oferecendo soluções personalizadas & inteligentes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            className="bg-m3-bright text-white px-8 py-4 rounded-lg font-medium hover:bg-m3-dark transition-colors inline-flex items-center justify-center group"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossas Soluções
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em Contato
          </button>
        </motion.div>
      </motion.div>
    </ParallaxSection>
  );
};

export default Hero;