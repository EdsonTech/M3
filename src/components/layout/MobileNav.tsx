import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioUrl: string;
}

const MobileNav = ({ isOpen, onClose, portfolioUrl }: MobileNavProps) => {
  const links = [
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <div 
      className={`
        fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="flex justify-end p-4">
        <button 
          onClick={onClose} 
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center h-[80vh]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-4 text-2xl text-gray-700 hover:text-m3-bright transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="py-4 text-2xl text-m3-bright hover:text-m3-dark transition-colors inline-flex items-center gap-2"
        >
          Portfólio
          <ExternalLink className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
};

export default MobileNav;