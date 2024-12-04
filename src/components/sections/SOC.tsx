import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Shield, Camera, Brain, Lock, MonitorCheck, Bell } from 'lucide-react';

const SOC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Monitoramento 24/7',
      description: 'Centro de operações ativo 24 horas por dia, 7 dias por semana.'
    },
    {
      icon: Camera,
      title: 'CCTV Avançado',
      description: 'Sistema de câmeras com tecnologia de ponta para vigilância.'
    },
    {
      icon: Brain,
      title: 'IA para Análise',
      description: 'Inteligência artificial para detecção de comportamentos suspeitos.'
    },
    {
      icon: Lock,
      title: 'Controle de Acesso',
      description: 'Gestão de acesso físico e digital integrada.'
    },
    {
      icon: MonitorCheck,
      title: 'Análise em Tempo Real',
      description: 'Monitoramento contínuo com alertas instantâneos.'
    },
    {
      icon: Bell,
      title: 'Alertas Inteligentes',
      description: 'Notificações automáticas para eventos relevantes.'
    }
  ];

  return (
    <Section
      id="soc"
      title="SOC & CCTV"
      subtitle="Centro de Operações de Segurança integrado com sistema de vigilância"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-gray-50 rounded-xl p-8 hover:bg-gradient-to-br hover:from-m3-bright hover:to-m3-dark transition-all duration-500"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <feature.icon className="h-8 w-8 text-m3-bright group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3 group-hover:text-white transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center group-hover:text-white/90 transition-colors">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-m3-bright to-m3-dark opacity-10 blur-lg rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551143975-5c8d6d6b8904?auto=format&fit=crop&q=80"
              alt="Security Operations Center"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Centro de Operações Integrado</h3>
            <p className="text-gray-600 leading-relaxed">
              A M3Tech combina SOC e CCTV, focando na integração entre monitoramento em tempo real 
              de câmeras e respostas imediatas a qualquer tipo de ameaça ou invasão.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 rounded-lg bg-red-50">
                  <Shield className="h-6 w-6 text-m3-bright" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Proteção Abrangente</h4>
                <p className="text-gray-600">
                  Monitoramento 24/7 com equipe especializada e tecnologia avançada.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 rounded-lg bg-red-50">
                  <Brain className="h-6 w-6 text-m3-bright" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Inteligência Artificial</h4>
                <p className="text-gray-600">
                  Análise comportamental e reconhecimento de objetos em tempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 rounded-lg bg-red-50">
                  <Lock className="h-6 w-6 text-m3-bright" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Controle de Acesso</h4>
                <p className="text-gray-600">
                  Gestão integrada de acessos físicos e digitais com autenticação avançada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SOC;