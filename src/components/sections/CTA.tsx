import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-m3-bright to-m3-dark opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Transformar seu Negócio?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de eficiência e inovação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            icon={ArrowRight}
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
          >
            Fale Conosco
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10"
            onClick={() => document.getElementById('services')?.scrollIntoView()}
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;