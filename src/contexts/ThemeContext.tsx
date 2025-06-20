
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
  getSectionTheme: (sectionName: string) => 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 50);
  };

  const getSectionTheme = (sectionName: string): 'light' | 'dark' => {
    const sectionThemes = {
      dark: {
        // When dark theme is selected
        hero: 'dark' as const,       // black
        about: 'light' as const,     // white
        skills: 'dark' as const,     // black
        projects: 'light' as const,  // white
        experience: 'dark' as const, // black
        contact: 'light' as const,   // white
        footer: 'light' as const     // white
      },
      light: {
        // When light theme is selected
        hero: 'light' as const,      // white
        about: 'dark' as const,      // black
        skills: 'light' as const,    // white
        projects: 'dark' as const,   // black
        experience: 'light' as const, // white
        contact: 'dark' as const,    // black
        footer: 'light' as const     // white
      }
    };

    return sectionThemes[theme][sectionName as keyof typeof sectionThemes.dark] || 'light';
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning, getSectionTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
