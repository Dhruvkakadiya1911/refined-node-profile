
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Terminal, Zap, Cpu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / documentHeight, 1);
      
      setIsScrolled(scrollY > 50);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: '📋' },
    { name: 'Skills', href: '#skills', icon: '⚡' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 pointer-events-auto ${
      isScrolled 
        ? theme === 'dark'
          ? 'bg-black/95 backdrop-blur-3xl shadow-2xl border-b border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30' 
          : 'bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30'
        : theme === 'dark'
          ? 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-xl'
          : 'bg-gradient-to-b from-white/40 to-transparent backdrop-blur-xl'
    }`}>
      {/* Futuristic scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Enhanced futuristic logo */}
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
              <div className="relative">
                {/* Main logo with enhanced effects */}
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg sm:rounded-2xl p-1.5 sm:p-2 lg:p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500/50 touch-manipulation">
                  <div className="text-base sm:text-lg lg:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DK
                  </div>
                  {/* Animated corner indicators */}
                  <div className="absolute -top-0.5 -right-0.5 w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-0.5 sm:w-1 lg:w-1.5 h-0.5 sm:h-1 lg:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Orbiting elements - hidden on very small screens */}
                <div className="hidden sm:block absolute inset-0 animate-spin pointer-events-none" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-0.5 left-1/2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-0.5 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="hidden sm:flex flex-col">
                <div className={`text-xs lg:text-sm font-mono transition-colors duration-300 mb-0 sm:mb-1 ${
                  theme === 'dark' ? 'text-white/80' : 'text-black/80'
                }`}>
                  <span className="text-blue-400 dark:text-blue-500">&lt;</span>
                  <span>developer</span>
                  <span className="text-blue-400 dark:text-blue-500">/&gt;</span>
                </div>
                <div className={`flex items-center space-x-1 text-xs font-mono ${
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                }`}>
                  <Terminal className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="hidden lg:inline">backend.alchemist</span>
                  <span className="lg:hidden">backend</span>
                  <Cpu className="w-2.5 h-2.5 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-lg sm:rounded-2xl blur-lg sm:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 pointer-events-none"></div>
          </div>

          {/* Enhanced futuristic desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 pointer-events-auto">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`relative px-3 xl:px-5 py-2 xl:py-2.5 transition-all duration-300 font-medium rounded-xl overflow-hidden flex items-center space-x-1 xl:space-x-2 backdrop-blur-sm cursor-pointer pointer-events-auto z-10 text-sm xl:text-base touch-manipulation min-h-[44px] ${
                    theme === 'dark'
                      ? 'text-white hover:text-blue-300'
                      : 'text-black hover:text-blue-700'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-xs xl:text-sm transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                  <span className="relative z-10">{item.name}</span>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-cyan-500/10 rounded-xl transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}></div>
                  
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'border border-blue-500/50' : 'border border-transparent'
                  }`}></div>
                  
                  <div className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'w-4/5 -translate-x-1/2' : 'w-0 -translate-x-1/2'
                  }`}></div>
                  
                  <div className={`absolute left-2 xl:left-3 top-1 xl:top-2 text-blue-400 dark:text-blue-500 text-xs font-mono transition-all duration-200 pointer-events-none ${
                    hoveredItem === item.name ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-45'
                  }`}>┌</div>
                  <div className={`absolute right-2 xl:right-3 bottom-1 xl:bottom-2 text-purple-400 dark:text-purple-500 text-xs font-mono transition-all duration-200 pointer-events-none ${
                    hoveredItem === item.name ? 'opacity-100 transform rotate-0' : 'opacity-0 transform -rotate-45'
                  }`}>┘</div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 pointer-events-none ${
                    hoveredItem === item.name ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
                  }`} style={{ animation: hoveredItem === item.name ? 'slide-right 1s ease-in-out infinite' : 'none' }}></div>
                </a>
                
                {/* Enhanced particle glow */}
                <div className={`absolute inset-0 transition-all duration-500 pointer-events-none ${
                  hoveredItem === item.name ? 'opacity-60 scale-150' : 'opacity-0 scale-100'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-cyan-500/20 rounded-xl blur-xl"></div>
                  <div className="absolute top-1 xl:top-2 left-2 xl:left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 xl:bottom-3 right-3 xl:right-5 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            ))}
            
            <div className="ml-2 xl:ml-4 pl-2 xl:pl-4 border-l border-gradient-to-b from-blue-500/30 via-purple-500/50 to-cyan-500/30 pointer-events-auto">
              <div className="relative">
                {/* Energy indicator */}
                  {/* <Zap className="w-2 xl:w-3 h-2 xl:h-3 text-yellow-400 animate-pulse" /> */}
                <div className="absolute -top-5 -right-2 pointer-events-none">
                  <Zap className="w-2 xl:w-3 h-2 xl:h-3 text-yellow-400 animate-pulse" />
                </div>
                  <div className="absolute -top-8 -right-19 pointer-events-none">

                <ThemeToggle />
                  </div>
              </div>
            </div>
          </div>

          {/* Enhanced futuristic mobile menu button */}
           
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-4 pointer-events-auto">
            <button
              className="relative p-1.5 sm:p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 transition-all duration-500 group border border-blue-500/30 hover:border-purple-500/50 shadow-lg shadow-blue-500/20 cursor-pointer pointer-events-auto z-10 touch-manipulation min-h-[44px] min-w-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6">
                <Menu className={`absolute inset-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                } ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`} />
                <X className={`absolute inset-0 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                } ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`} />
              </div>
              {/* Holographic glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
            </button>
          <div className='janviiiiiiii'>

<ThemeToggle />
</div>
          </div>
        </div>

        {/* Enhanced futuristic mobile navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 pointer-events-auto ${
          isMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`backdrop-blur-3xl rounded-2xl mt-2 sm:mt-4 p-3 sm:p-4 md:p-6 border border-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 shadow-2xl shadow-blue-500/20 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95'
              : 'bg-gradient-to-br from-white/95 via-gray-100/95 to-white/95'
          }`}>
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 sm:space-x-4 py-2.5 sm:py-3 md:py-4 transition-all duration-500 font-medium border-b last:border-b-0 hover:pl-2 sm:hover:pl-4 md:hover:pl-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 group cursor-pointer pointer-events-auto relative z-10 text-sm sm:text-base touch-manipulation min-h-[44px] ${
                  theme === 'dark'
                    ? 'text-white hover:text-blue-300 border-white/10'
                    : 'text-black hover:text-blue-700 border-black/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? `fade-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                <span className="flex-1">{item.name}</span>
                <Code2 className="w-3 sm:w-4 h-3 sm:h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Scan line for mobile items */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top pointer-events-none"></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-purple-500/5 opacity-50 pointer-events-none"></div>
    </nav>
  );
};

export default Navigation;
