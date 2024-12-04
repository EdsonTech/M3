import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { Server, Cloud, Shield, Headphones, Globe, Code } from 'lucide-react';
import { BRAND } from '../../utils/constants';

const Services = () => {
  const mainServices = [
    {
      icon: Server,
      title: 'Outsourcing de TI',
      description: 'Suporte e gestão terceirizada completa para sua infraestrutura de TI.',
      features: [
        'Suporte técnico especializado',
        'Gestão de infraestrutura',
        'Monitoramento 24/7',
        'Manutenção preventiva'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Soluções em nuvem para maior eficiência e escalabilidade.',
      features: [
        'Migração para nuvem',
        'Gestão de ambientes cloud',
        'Backup em nuvem',
        'Disaster Recovery'
      ]
    },
    {
      icon: Shield,
      title: 'Cibersegurança',
      description: 'Proteção avançada contra ameaças digitais.',
      features: [
        'Firewall gerenciado',
        'Análise de vulnerabilidades',
        'Resposta a incidentes',
        'Conformidade e políticas'
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section
      id="services"
      title="Nossos Serviços"
      subtitle="Soluções tecnológicas avançadas e personalizadas para cada necessidade"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {mainServices.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-red-50 group-hover:bg-gradient-to-br group-hover:from-m3-bright group-hover:to-m3-dark transition-all duration-300">
                <service.icon className="h-8 w-8 text-m3-bright group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
            <p className="text-gray-600 text-center mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-m3-bright mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Services Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRAND.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Nossa equipe altamente qualificada está pronta para ajudar sua empresa 
          a alcançar seus objetivos tecnológicos com soluções personalizadas e 
          suporte especializado.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-m3-bright text-white px-8 py-3 rounded-lg hover:bg-m3-dark transition-colors"
        >
          Solicite uma Consultoria
        </button>
      </motion.div>
    </Section>
  );
};

export default Services;