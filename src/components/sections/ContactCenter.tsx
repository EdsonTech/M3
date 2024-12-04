import React from 'react';
import Section from '../ui/Section';
import { Phone, MessageSquare, Video, Mail, BarChart2, Users } from 'lucide-react';

const ContactCenter = () => {
  const features = [
    {
      icon: Phone,
      title: 'Telefonia IP e VoIP',
      description: 'Comunicação integrada via protocolo de internet'
    },
    {
      icon: MessageSquare,
      title: 'Distribuição Automática (ACD)',
      description: 'Gerenciamento inteligente de chamadas'
    },
    {
      icon: BarChart2,
      title: 'Relatórios e Análise',
      description: 'Métricas detalhadas de desempenho'
    },
    {
      icon: Users,
      title: 'Filas de Atendimento',
      description: 'Organização eficiente de chamadas'
    },
    {
      icon: Mail,
      title: 'Suporte Multicanal',
      description: 'Atendimento em diferentes plataformas'
    },
    {
      icon: Video,
      title: 'Videoconferência',
      description: 'Reuniões online em alta qualidade'
    }
  ];

  return (
    <Section
      id="contact-center"
      title="3CX Contact Center"
      subtitle="Plataforma completa de comunicação para gerenciar e centralizar interações com clientes"
      className="bg-white"
    >
      <div className="mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            Utilizando tecnologia VoIP, permite integrar telefonia, chat ao vivo, videoconferências e suporte por e-mail em uma única interface, facilitando o atendimento e a eficiência operacional.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-red-50">
                <feature.icon className="h-6 w-6 text-m3-bright" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/3cx-interface.png" 
                alt="3CX Interface"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Recursos Avançados</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                  </div>
                  <p className="ml-4 text-gray-600">Wallboard em tempo real para monitoramento</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                  </div>
                  <p className="ml-4 text-gray-600">Gestão de filas e fluxos de chamadas</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                  </div>
                  <p className="ml-4 text-gray-600">Treinamento e capacitação de agentes</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 p-1">
                    <div className="w-2 h-2 bg-m3-bright rounded-full mt-2" />
                  </div>
                  <p className="ml-4 text-gray-600">Chat ao vivo integrado</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactCenter;