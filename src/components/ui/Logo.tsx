import React from 'react';
import { IMAGES } from '../../utils/constants';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo = ({ variant = 'dark', className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={IMAGES.logo}
        alt="M3Tech Logo"
        className={`h-12 w-auto object-contain transition-all duration-300 ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
};

export default Logo;