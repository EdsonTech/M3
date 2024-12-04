import React from 'react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Transformação Digital Bancária',
      description: 'Modernização completa da infraestrutura de TI para uma das maiores instituições financeiras do país.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
      tags: ['Cloud', 'Segurança', 'DevOps']
    },
    {
      title: 'Smart Factory',
      description: 'Implementação de soluções IoT e automação para indústria 4.0.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      tags: ['IoT', 'Automação', 'Indústria 4.0']
    },
    {
      title: 'Centro de Operações Integrado',
      description: 'Desenvolvimento de NOC para monitoramento 24/7 de infraestrutura crítica.',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800',
      tags: ['NOC', 'Monitoramento', '24/7']
    }
  ];

  return (
    <Section
      id="projects"
      title="Projetos em Destaque"
      subtitle="Conheça alguns dos nossos casos de sucesso"
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;