
import { Sun, Moon, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="relative p-3 md:p-4 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-700 group overflow-hidden border border-white/20 dark:border-black/20 hover:scale-110 disabled:opacity-70 disabled:cursor-not-allowed"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>
      
      {/* Loading spinner overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-black animate-spin" />
        </div>
      )}
      
      {/* Icon container */}
      <div className={`relative w-5 h-5 md:w-6 md:h-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Moon className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 text-white dark:text-black transition-all duration-700 transform ${
          theme === 'light' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-180 scale-75'
        }`} />
        <Sun className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 text-white dark:text-black transition-all duration-700 transform ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-180 scale-75'
        }`} />
      </div>

      {/* Pulse effect on click */}
      <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/30 dark:bg-black/30 animate-ping pointer-events-none"></div>
    </button>
  );
};

export default ThemeToggle;
