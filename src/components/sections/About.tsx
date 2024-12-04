import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const About = () => {
  const values = [
    'Inovação',
    'Qualidade',
    'Parcerias',
    'Responsabilidade Social',
    'Ética e Transparência'
  ];

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-m3-bright">IDENTIDADE</span><br />
            <span className="text-gray-900 dark:text-white">ORGANIZACIONAL</span>
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Missão</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Oferecer soluções inovadoras e personalizadas.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Visão</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Liderar soluções tecnológicas e de engenharia, impulsionando o 
                desenvolvimento sustentável e a transformação digital.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Valores</h3>
              <div className="flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-m3-bright rounded-full text-sm font-medium"
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4">
            <div className="w-full h-full rotate-6 rounded-3xl bg-gradient-to-r from-m3-bright to-m3-dark opacity-10" />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="M3Tech Office"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-m3-bright/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;