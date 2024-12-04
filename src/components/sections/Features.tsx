import React from 'react';
import { Shield, Cloud, Settings } from 'lucide-react';
import Card from '../ui/Card';

const Features = () => {
  const features = [
    {
      title: 'Security First',
      description: 'Enterprise-grade security for your applications',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Cloud Native',
      description: 'Built for modern cloud infrastructure',
      icon: <Cloud className="h-8 w-8" />
    },
    {
      title: 'Fully Customizable',
      description: 'Adapt to your specific needs',
      icon: <Settings className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;