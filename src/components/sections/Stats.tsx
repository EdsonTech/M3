import React from 'react';
import Section from '../ui/Section';
import { Users, Building2, Award, Briefcase, Clock } from 'lucide-react';
import StatsCard from '../ui/StatsCard';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: 38,
      label: 'Funcionários',
      suffix: '+'
    },
    {
      icon: Building2,
      value: 5,
      label: 'Parceiros Externos',
      suffix: ''
    },
    {
      icon: Award,
      value: 15,
      label: 'Anos de Experiência',
      suffix: '+'
    },
    {
      icon: Briefcase,
      value: 200,
      label: 'Projetos Realizados',
      suffix: '+'
    },
    {
      icon: Clock,
      value: 24,
      label: 'Horas de Suporte',
      suffix: '/7'
    }
  ];

  return (
    <Section
      id="stats"
      className="bg-gradient-to-br from-gray-900 to-m3-dark"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </Section>
  );
};

export default Stats;