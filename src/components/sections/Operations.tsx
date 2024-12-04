import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { 
  Shield, Monitor, Activity, AlertCircle, Network, 
  LineChart, Lock, Eye, Server, Wifi, Cloud, Database,
  BarChart2, Bell, Search, Clock, Users, Settings,
  Brain, Zap, Radio
} from 'lucide-react';

const Operations = () => {
  const features = [
    {
      title: 'SOC + NOC Integrado',
      description: 'Centro de operações unificado para segurança e infraestrutura',
      icon: Shield,
      capabilities: [
        'Monitoramento 24/7 integrado',
        'Análise de ameaças em tempo real',
        'Gestão de incidentes centralizada',
        'Automação de respostas',
        'Machine Learning para detecção',
        'Dashboards personalizados'
      ],
      metrics: [
        { label: 'Uptime', value: '99.99%' },
        { label: 'Resposta', value: '<5min' }
      ],
      tools: [
        'SIEM', 'EDR', 'SOAR', 'Zabbix', 'Grafana', 'ServiceNow'
      ]
    }
  ];

  const integrationBenefits = [
    {
      icon: Brain,
      title: 'IA & Machine Learning',
      description: 'Detecção avançada de anomalias e ameaças'
    },
    {
      icon: Zap,
      title: 'Resposta Automatizada',
      description: 'Ações automáticas para incidentes conhecidos'
    },
    {
      icon: Radio,
      title: 'Monitoramento 24/7',
      description: 'Vigilância contínua de sistemas e redes'
    }
  ];

  const metrics = [
    {
      icon: AlertCircle,
      value: '1,234',
      label: 'Alertas/24h',
      color: 'text-yellow-400'
    },
    {
      icon: Activity,
      value: '99.99%',
      label: 'Uptime',
      color: 'text-green-400'
    },
    {
      icon: Shield,
      value: '12',
      label: 'Incidentes',
      color: 'text-red-400'
    },
    {
      icon: BarChart2,
      value: '94%',
      label: 'Performance',
      color: 'text-blue-400'
    }
  ];

  return (
    <Section
      id="operations"
      title="Centro de Operações Integrado"
      subtitle="Monitoramento unificado de segurança e infraestrutura"
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden mb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/70" />
          <img
            src="https://drive.google.com/uc?export=view&id=1vxacA7XLLG1Salw9GhqG21dAx34kT1Fl"
            alt="Operations Center"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative py-24 px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                SOC + NOC Integrado
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Unificando segurança e infraestrutura para uma gestão mais eficiente
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-m3-bright to-m3-dark">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
              </div>

              <p className="text-gray-600 mb-8">{feature.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {feature.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-m3-bright mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Recursos</h4>
                <div className="grid grid-cols-2 gap-3">
                  {feature.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-m3-bright" />
                      <span className="text-sm text-gray-600">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Ferramentas</h4>
                <div className="flex flex-wrap gap-2">
                  {feature.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-red-50 text-m3-bright rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Dashboard */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Dashboard em Tempo Real</h3>
          <p className="text-gray-300">
            Visualização unificada de métricas críticas de segurança e infraestrutura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{metric.label}</h4>
                <metric.icon className={`h-5 w-5 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400">Tempo real</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Operations;