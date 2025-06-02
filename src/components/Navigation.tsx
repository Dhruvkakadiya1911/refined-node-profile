
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: '📋' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Testimonials', href: '#testimonials', icon: '💬' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/90 dark:bg-white/90 backdrop-blur-3xl shadow-2xl border-b-2 border-gradient-to-r from-white/20 via-white/10 to-white/20 dark:from-black/20 dark:via-black/10 dark:to-black/20' 
        : 'bg-gradient-to-b from-black/30 dark:from-white/30 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Enhanced Logo with creative design */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="text-3xl font-black text-white dark:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  DK
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:flex flex-col">
                <div className="text-xs text-white/70 dark:text-black/70 font-mono transition-colors duration-300">
                  &lt;developer/&gt;
                </div>
                <div className="flex items-center space-x-1 text-xs text-white/50 dark:text-black/50 font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>backend.specialist</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150"></div>
          </div>

          {/* Enhanced Desktop Navigation with creative magnetic effects */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative px-6 py-3 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-all duration-500 font-medium rounded-2xl overflow-hidden flex items-center space-x-2"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Creative magnetic background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 dark:from-black/10 dark:via-black/20 dark:to-black/10 rounded-2xl transition-all duration-500 ${
                    hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}></div>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 ${
                    hoveredItem === item.name ? 'w-3/4 -translate-x-1/2' : 'w-0 -translate-x-1/2'
                  }`}></div>
                  
                  {/* Code-style bracket indicators */}
                  <div className={`absolute left-2 top-1/2 -translate-y-1/2 text-blue-400 dark:text-blue-500 text-xs font-mono transition-all duration-300 ${
                    hoveredItem === item.name ? 'opacity-100' : 'opacity-0'
                  }`}>&lt;</div>
                  <div className={`absolute right-2 top-1/2 -translate-y-1/2 text-blue-400 dark:text-blue-500 text-xs font-mono transition-all duration-300 ${
                    hoveredItem === item.name ? 'opacity-100' : 'opacity-0'
                  }`}>/&gt;</div>
                </a>
                
                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredItem === item.name ? 'opacity-60 scale-150' : 'opacity-0 scale-100'
                }`}></div>
              </div>
            ))}
            
            <div className="ml-6 pl-6 border-l border-white/20 dark:border-black/20">
              <ThemeToggle />
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="relative p-3 rounded-2xl bg-gradient-to-r from-white/10 to-white/20 dark:from-black/10 dark:to-black/20 backdrop-blur-md hover:from-white/20 hover:to-white/30 dark:hover:from-black/20 dark:hover:to-black/30 transition-all duration-500 group border border-white/20 dark:border-black/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-black/95 to-black/90 dark:from-white/95 dark:to-white/90 backdrop-blur-3xl rounded-3xl mt-4 p-6 border-2 border-gradient-to-r from-white/20 via-white/10 to-white/20 dark:from-black/20 dark:via-black/10 dark:to-black/20 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-4 py-4 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-all duration-500 font-medium border-b border-white/10 dark:border-black/10 last:border-b-0 hover:pl-4 rounded-lg hover:bg-white/10 dark:hover:bg-black/10"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? `fade-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
                <Code2 className="w-4 h-4 ml-auto opacity-50" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
