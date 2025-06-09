
import { Sun, Moon, Loader2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={`z-50 p-3 md:p-4 rounded-full backdrop-blur-md hover:scale-110 transition-all duration-700 group overflow-hidden border shadow-lg disabled:opacity-70 disabled:cursor-not-allowed ${
        theme === 'dark'
          ? 'bg-white/20 border-white/30 hover:bg-white/30 text-white'
          : 'bg-black/20 border-black/30 hover:bg-black/30 text-black'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Background glow effect */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
          : 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30'
      }`}></div>
      
      {/* Loading spinner overlay */}
      {/* {isTransitioning && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className={`w-5 h-5 md:w-6 md:h-6 animate-spin ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`} />
        </div>
      )} */}
      
      {/* Icon container */}
      <div className={`relative w-5 h-5 md:w-6 md:h-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Moon className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-700 transform ${
          theme === 'light' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 -rotate-180 scale-75'
        } ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
        <Sun className={`absolute inset-0 w-5 h-5 md:w-6 md:h-6 transition-all duration-700 transform ${
          theme === 'dark' 
            ? 'opacity-100 rotate-0 scale-100' 
            : 'opacity-0 rotate-180 scale-75'
        } ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
      </div>

      {/* Pulse effect on click */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-active:opacity-100 animate-ping pointer-events-none ${
        theme === 'dark' ? 'bg-white/30' : 'bg-black/30'
      }`}></div>
    </button>
  );
};

export default ThemeToggle;
