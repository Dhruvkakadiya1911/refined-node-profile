
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg glass dark:glass-dark hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-black transition-colors duration-300" />
      ) : (
        <Sun className="w-5 h-5 text-white transition-colors duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
