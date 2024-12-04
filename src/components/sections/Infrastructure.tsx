import React from 'react';
import Section from '../ui/Section';
import { Server, Shield, Database, Cloud, Network, Lock } from 'lucide-react';

const Infrastructure = () => {
  const features = [
    {
      icon: Server,
      title: 'Sistemas de TI Locais',
      description: 'Servidores, redes e dispositivos que permitem comunicação e processamento de dados internamente.'
    },
    {
      icon: Shield,
      title: 'Segurança de TI',
      description: 'Políticas e ferramentas como firewalls e antivírus para proteger dados e redes contra ameaças.'
    },
    {
      icon: Database,
      title: 'Gestão de Dados',
      description: 'Armazenamento, backup e recuperação para assegurar a continuidade dos negócios.'
    },
    {
      icon: Cloud,
      title: 'Infraestrutura Cloud',
      description: 'Soluções em nuvem para maior eficiência, segurança e escalabilidade.'
    },
    {
      icon: Network,
      title: 'Redes Corporativas',
      description: 'Implementação e gestão de redes empresariais seguras e eficientes.'
    },
    {
      icon: Lock,
      title: 'Cibersegurança',
      description: 'Proteção avançada contra ameaças digitais e conformidade com normas.'
    }
  ];

  return (
    <Section
      id="infrastructure"
      title="Infraestrutura"
      subtitle="Soluções completas para sua infraestrutura tecnológica"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-red-50 group-hover:bg-gradient-to-br group-hover:from-m3-bright group-hover:to-m3-dark transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-m3-bright group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-m3-bright transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Infraestrutura AWS</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Nossa infraestrutura na AWS oferece soluções escaláveis e seguras:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                    </div>
                    <p className="ml-4 text-gray-600">Alta disponibilidade e redundância</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                    </div>
                    <p className="ml-4 text-gray-600">Escalabilidade automática sob demanda</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                    </div>
                    <p className="ml-4 text-gray-600">Segurança avançada e conformidade</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                    </div>
                    <p className="ml-4 text-gray-600">Backup e recuperação de desastres</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 p-1">
                      <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                    </div>
                    <p className="ml-4 text-gray-600">Monitoramento e análise em tempo real</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4">
                <div className="w-full h-full rotate-3 rounded-3xl bg-gradient-to-r from-m3-bright to-m3-dark opacity-10" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                  alt="Data Center"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-m3-bright/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Infrastructure;