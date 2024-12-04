import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { 
  Award, Cloud, Shield, Database, Server, 
  Lock, Zap, Globe, Users, BarChart2 
} from 'lucide-react';
import GradientBorder from '../ui/GradientBorder';

const Partners = () => {
  const softwareLicenses = [
    {
      name: 'Microsoft',
      logo: '/logos/microsoft.svg',
      products: ['Microsoft 365', 'Azure', 'Windows Server', 'SQL Server'],
      category: 'Cloud & Produtividade'
    },
    {
      name: 'Adobe',
      logo: '/logos/adobe.svg',
      products: ['Creative Cloud', 'Acrobat DC', 'Stock'],
      category: 'Design & Criação'
    },
    {
      name: 'IBM',
      logo: '/logos/ibm.svg',
      products: ['Cloud Pak', 'Watson', 'Security'],
      category: 'IA & Analytics'
    },
    {
      name: 'VMware',
      logo: '/logos/vmware.svg',
      products: ['vSphere', 'NSX', 'vSAN'],
      category: 'Virtualização'
    },
    {
      name: 'Red Hat',
      logo: '/logos/redhat.svg',
      products: ['Enterprise Linux', 'OpenShift', 'Ansible'],
      category: 'Open Source'
    },
    {
      name: 'SAP',
      logo: '/logos/sap.svg',
      products: ['S/4HANA', 'Business One', 'SuccessFactors'],
      category: 'ERP & Gestão'
    }
  ];

  const cloudServices = [
    {
      icon: Server,
      title: 'IaaS',
      description: 'Infraestrutura como Serviço',
      features: [
        'Servidores Virtuais',
        'Storage Distribuído',
        'Redes Definidas por Software'
      ]
    },
    {
      icon: Database,
      title: 'PaaS',
      description: 'Plataforma como Serviço',
      features: [
        'Ambientes de Desenvolvimento',
        'Containers & Kubernetes',
        'Serverless Computing'
      ]
    },
    {
      icon: Globe,
      title: 'SaaS',
      description: 'Software como Serviço',
      features: [
        'Aplicações Empresariais',
        'Colaboração em Nuvem',
        'Produtividade'
      ]
    },
    {
      icon: Shield,
      title: 'SecaaS',
      description: 'Segurança como Serviço',
      features: [
        'Proteção Avançada',
        'Compliance & Governança',
        'Backup & Recuperação'
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
      id="partners"
      title="Licenças e Parcerias"
      subtitle="Soluções empresariais com as principais tecnologias do mercado"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Software Partners */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="flex items-center justify-center mb-12">
          <div className="p-3 rounded-full bg-red-50 dark:bg-red-900/20">
            <Award className="h-8 w-8 text-m3-bright" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {softwareLicenses.map((partner, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <GradientBorder>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-auto">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {partner.category}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      {partner.products.join(' • ')}
                    </p>
                  </div>
                </div>
              </GradientBorder>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cloud Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cloudServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <GradientBorder className="p-6 h-full">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-red-50 dark:bg-red-900/20 group-hover:bg-gradient-to-br group-hover:from-m3-bright group-hover:to-m3-dark transition-all duration-300">
                  <service.icon className="h-8 w-8 text-m3-bright group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-m3-bright mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </GradientBorder>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Partners;