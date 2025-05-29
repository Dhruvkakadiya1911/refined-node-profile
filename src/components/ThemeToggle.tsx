
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-500 group overflow-hidden border border-white/20 dark:border-black/20"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
      
      {/* Icon container */}
      <div className="relative w-6 h-6">
        <Moon className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-500 ${
          theme === 'light' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-180 scale-75'
        }`} />
        <Sun className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-500 ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-180 scale-75'
        }`} />
      </div>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/30 dark:bg-black/30 animate-ping"></div>
    </button>
  );
};

export default ThemeToggle;
