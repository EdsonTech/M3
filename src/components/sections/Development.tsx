import React from 'react';
import Section from '../ui/Section';
import { Globe, Smartphone, Monitor } from 'lucide-react';

const Development = () => {
  const projects = [
    {
      title: 'Grupo Carrinho',
      subtitle: 'Software de Gestão Acadêmica',
      image: '/images/projeto-carrinho.png',
      type: 'Web'
    },
    {
      title: 'PNA',
      subtitle: 'App de Denúncia e Esquadra Online',
      image: '/images/projeto-pna.png',
      type: 'Mobile'
    }
  ];

  return (
    <Section
      id="development"
      title="Desenvolvimento de Software"
      subtitle="Soluções personalizadas para web, mobile e desktop"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-6">
            <Globe className="h-12 w-12 text-m3-bright" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Aplicações Web</h3>
          <p className="text-gray-600 text-center">
            Funciona em navegadores e é acessível pela internet, como plataformas de e-commerce e sistemas de gerenciamento.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="h-12 w-12 text-m3-bright" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Aplicações Móveis</h3>
          <p className="text-gray-600 text-center">
            Desenvolvidas especificamente para dispositivos móveis e distribuídas em lojas de aplicativos.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="h-12 w-12 text-m3-bright" />
          </div>
          <h3 className="text-xl font-bold text-center mb-4">Aplicações Desktop</h3>
          <p className="text-gray-600 text-center">
            Softwares instalados diretamente em computadores, como aplicativos de edição de imagem e softwares corporativos de gestão.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-red-50 text-m3-bright rounded-full text-sm font-medium mb-4">
                  {project.type}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.subtitle}</p>
                <button className="text-m3-bright font-medium hover:text-m3-dark transition-colors">
                  Saiba mais →
                </button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Development;