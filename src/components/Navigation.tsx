
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 dark:bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-white/10 dark:border-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo with magnetic effect */}
          <div className="relative group cursor-pointer">
            <div className="text-3xl font-black text-white dark:text-black transition-all duration-300 group-hover:scale-110">
              DK
            </div>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
          </div>

          {/* Desktop Navigation with magnetic effects */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative px-6 py-3 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-all duration-300 font-medium rounded-full overflow-hidden"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Magnetic background effect */}
                  <div className={`absolute inset-0 bg-white/10 dark:bg-black/10 rounded-full transition-all duration-300 ${
                    hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}></div>
                  
                  {/* Underline animation */}
                  <div className={`absolute bottom-1 left-1/2 h-0.5 bg-white dark:bg-black transition-all duration-300 ${
                    hoveredItem === item.name ? 'w-1/2 -translate-x-1/2' : 'w-0 -translate-x-1/2'
                  }`}></div>
                </a>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full blur-xl transition-all duration-300 ${
                  hoveredItem === item.name ? 'opacity-50 scale-150' : 'opacity-0 scale-100'
                }`}></div>
              </div>
            ))}
            
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="relative p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 text-white dark:text-black transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
              <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/90 dark:bg-white/90 backdrop-blur-2xl rounded-2xl mt-4 p-6 border border-white/10 dark:border-black/10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-4 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700 transition-all duration-300 font-medium border-b border-white/10 dark:border-black/10 last:border-b-0 hover:pl-4"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
