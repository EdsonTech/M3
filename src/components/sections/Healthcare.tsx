import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Activity, Cpu, Wrench, Shield, HeartPulse,
  Syringe, Microscope, Laptop, Cog, Wifi, Lock
} from 'lucide-react';

const Healthcare = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: 'Eletromedicina',
      description: 'Manutenção e calibração de equipamentos médicos',
      features: [
        'Manutenção preventiva e corretiva',
        'Calibração certificada',
        'Gestão de ativos médicos',
        'Suporte 24/7'
      ]
    },
    {
      icon: Microscope,
      title: 'Engenharia Clínica',
      description: 'Gestão completa de tecnologia hospitalar',
      features: [
        'Planejamento tecnológico',
        'Avaliação de equipamentos',
        'Treinamento de equipes',
        'Consultoria especializada'
      ]
    },
    {
      icon: Laptop,
      title: 'Sistemas Hospitalares',
      description: 'Soluções digitais para gestão hospitalar',
      features: [
        'Prontuário eletrônico',
        'Gestão de leitos',
        'Farmácia hospitalar',
        'Integração de sistemas'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Syringe,
      title: 'Equipamentos Especializados',
      description: 'Manutenção de equipamentos de alta complexidade'
    },
    {
      icon: Wifi,
      title: 'Infraestrutura de Rede',
      description: 'Redes hospitalares seguras e eficientes'
    },
    {
      icon: Lock,
      title: 'Segurança de Dados',
      description: 'Proteção de informações médicas e LGPD'
    },
    {
      icon: Cog,
      title: 'Automação Hospitalar',
      description: 'Sistemas automatizados para maior eficiência'
    }
  ];

  return (
    <Section
      id="healthcare"
      title="Soluções para Saúde"
      subtitle="Tecnologia e inovação para o setor hospitalar"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      {/* Main Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
      >
        {mainServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
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

      {/* Additional Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {additionalServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-red-50">
                <service.icon className="h-6 w-6 text-m3-bright" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="inline-block px-4 py-2 bg-red-50 text-m3-bright rounded-full text-sm font-medium mb-4">
              Caso de Sucesso
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Hospital Materno Infantil
            </h3>
            <p className="text-gray-600 mb-6">
              Implementação completa de infraestrutura tecnológica e sistemas de monitoramento,
              garantindo maior eficiência e segurança no atendimento aos pacientes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-m3-bright" />
                  <span className="font-semibold">Segurança</span>
                </div>
                <p className="text-sm text-gray-600">
                  Sistema integrado de monitoramento
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <HeartPulse className="h-5 w-5 text-m3-bright" />
                  <span className="font-semibold">Monitoramento</span>
                </div>
                <p className="text-sm text-gray-600">
                  Acompanhamento em tempo real
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
              alt="Hospital Case Study"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-m3-bright to-m3-dark rounded-2xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-8">Nosso Impacto na Saúde</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-sm opacity-90">Equipamentos Gerenciados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-sm opacity-90">Suporte Técnico</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-sm opacity-90">Taxa de Disponibilidade</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-sm opacity-90">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Healthcare;