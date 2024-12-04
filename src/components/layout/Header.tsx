import React, { useState, useEffect } from 'react';
import { Menu, ExternalLink } from 'lucide-react';
import { useScrollPosition } from '../../utils/hooks/useScrollPosition';
import MobileNav from './MobileNav';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;

  const portfolioUrl = "https://drive.google.com/file/d/12C1ywtclrKUki3VoVWShwA8OvxC_jbDu/view?usp=drive_link";

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileNavOpen]);

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm' 
            : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Logo variant={isScrolled ? 'dark' : 'light'} className="w-32" />
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Sobre', 'Serviços', 'Projetos', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`
                    font-medium transition-colors
                    ${isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:text-m3-bright' 
                      : 'text-white hover:text-m3-bright'}
                  `}
                >
                  {item}
                </a>
              ))}
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  font-medium transition-colors inline-flex items-center gap-2
                  ${isScrolled 
                    ? 'text-m3-bright hover:text-m3-dark' 
                    : 'text-m3-bright hover:text-white'}
                `}
              >
                Portfólio
                <ExternalLink className="h-4 w-4" />
              </a>
              <ThemeToggle />
            </nav>

            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className={`
                  p-2 rounded-lg transition-colors
                  ${isScrolled 
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'hover:bg-white/10'}
                `}
                onClick={() => setIsMobileNavOpen(true)}
              >
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)}
        portfolioUrl={portfolioUrl}
      />
    </>
  );
};

export default Header;