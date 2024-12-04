import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Building2, Users, Award } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'Hospital Materno Infantil',
      logo: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=200',
      sector: 'Saúde'
    },
    {
      name: 'SETIC-FP',
      logo: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=200',
      sector: 'Governo'
    },
    // Add more clients as needed
  ];

  const stats = [
    {
      icon: Building2,
      value: '50+',
      label: 'Clientes Ativos'
    },
    {
      icon: Users,
      value: '1000+',
      label: 'Usuários Atendidos'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Taxa de Satisfação'
    }
  ];

  return (
    <Section
      id="clients"
      title="Nossos Clientes"
      subtitle="Empresas que confiam em nossas soluções"
      className="bg-white"
    >
      {/* Client Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-m3-bright hover:to-m3-dark transition-all duration-500"
          >
            <div className="flex items-center justify-center h-24 mb-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold group-hover:text-white transition-colors">
                {client.name}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                {client.sector}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-red-50">
                <stat.icon className="h-8 w-8 text-m3-bright" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Client"
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <blockquote className="text-xl text-gray-600 italic mb-4">
              "A M3Tech tem sido fundamental para nossa transformação digital.
              Sua expertise e suporte são excepcionais."
            </blockquote>
            <cite className="text-gray-900 font-semibold block">
              Dr. João Silva
            </cite>
            <span className="text-gray-600 text-sm">
              Diretor de TI - Hospital Materno Infantil
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;