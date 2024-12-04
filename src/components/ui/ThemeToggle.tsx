import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../utils/hooks/useTheme';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`
        p-2 rounded-full transition-colors duration-200
        ${theme === 'light' 
          ? 'bg-gray-100 hover:bg-gray-200' 
          : 'bg-gray-800 hover:bg-gray-700'}
      `}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-600" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;