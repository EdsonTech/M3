import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Cloud, Shield, Mail, Users, Database, BarChart } from 'lucide-react';

const Microsoft = () => {
  const products = [
    {
      title: 'Microsoft 365 Apps for Business',
      description: 'Fornece aplicações Office para negócios. Ideal para empresas que precisam apenas das aplicações Office.',
      icon: Users,
      apps: ['Word', 'Excel', 'PowerPoint', 'OneNote']
    },
    {
      title: 'Microsoft 365 Business Standard',
      description: 'Suite de produtividade e colaboração para negócios.',
      icon: Cloud,
      apps: ['Word', 'Excel', 'PowerPoint', 'Teams', 'SharePoint', 'Exchange']
    },
    {
      title: 'Microsoft 365 Business Premium',
      description: 'Suite de produtividade com segurança avançada e gestão de dispositivos.',
      icon: Shield,
      apps: ['Word', 'Excel', 'PowerPoint', 'Teams', 'SharePoint', 'Intune']
    },
    {
      title: 'Microsoft 365 E3',
      description: 'Suite empresarial com funcionalidades avançadas de conformidade e proteção.',
      icon: Database,
      apps: ['Office Apps', 'Teams', 'SharePoint', 'Security Features']
    },
    {
      title: 'Exchange Online',
      description: 'Solução de e-mail empresarial hospedada.',
      icon: Mail,
      apps: ['Email', 'Calendar', 'Contacts']
    },
    {
      title: 'Power BI Pro',
      description: 'Análise de dados e compartilhamento de insights.',
      icon: BarChart,
      apps: ['Data Analysis', 'Dashboards', 'Reports']
    }
  ];

  return (
    <Section
      id="microsoft"
      title="Universo Microsoft"
      subtitle="Soluções completas para produtividade e colaboração empresarial"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <product.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-center mb-3">{product.title}</h3>
            <p className="text-gray-600 text-center text-sm mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {product.apps.map((app, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                >
                  {app}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Por que escolher Microsoft?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                </div>
                <p className="ml-4">Integração perfeita entre aplicativos e serviços</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                </div>
                <p className="ml-4">Segurança e conformidade de nível empresarial</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 p-1">
                  <div className="w-2 h-2 bg-white rounded-full mt-2" />
                </div>
                <p className="ml-4">Colaboração em tempo real e produtividade aprimorada</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
              alt="Microsoft Solutions"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Microsoft;