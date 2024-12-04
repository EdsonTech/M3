import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-m3-bright to-m3-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-red-50 group-hover:bg-white/10 transition-colors">
            <Icon className="h-8 w-8 text-m3-bright group-hover:text-white transition-colors" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-center group-hover:text-white/90 transition-colors">
          {description}
        </p>

        <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
            Saiba mais
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-m3-bright to-m3-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
};

export default ServiceCard;