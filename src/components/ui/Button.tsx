import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  children: React.ReactNode;
  loading?: boolean;
}

const Button = ({ 
  variant = 'primary', 
  icon: Icon,
  children, 
  className = '',
  loading = false,
  disabled,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200';
  
  const variants = {
    primary: 'bg-m3-bright text-white hover:bg-m3-dark disabled:bg-gray-400',
    secondary: 'bg-white text-m3-bright hover:bg-red-50 disabled:bg-gray-100 disabled:text-gray-400',
    outline: 'border-2 border-m3-bright text-m3-bright hover:bg-red-50 disabled:border-gray-400 disabled:text-gray-400'
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${loading ? 'opacity-75 cursor-wait' : ''} 
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <svg 
          className="animate-spin -ml-1 mr-3 h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {children}
          {Icon && <Icon className="ml-2 h-5 w-5" />}
        </>
      )}
    </button>
  );
};

export default Button;