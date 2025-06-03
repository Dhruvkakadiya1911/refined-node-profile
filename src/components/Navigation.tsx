
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Terminal, Zap, Cpu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        ? 'bg-black/95 dark:bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30' 
        : 'bg-gradient-to-b from-black/40 dark:from-white/40 to-transparent backdrop-blur-xl'
    }`}>
      {/* Futuristic scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-200 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-2 xs:py-3 sm:py-4">
          {/* Enhanced futuristic logo */}
          <div className="relative group cursor-pointer pointer-events-auto">
            <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
              <div className="relative">
                {/* Main logo with enhanced effects */}
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl p-1.5 xs:p-2 sm:p-3 lg:p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500/50 touch-manipulation">
                  <div className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DK
                  </div>
                  {/* Animated corner indicators */}
                  <div className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 w-1 xs:w-1.5 sm:w-2 h-1 xs:h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-0.5 xs:-bottom-1 -left-0.5 xs:-left-1 w-0.5 xs:w-1 sm:w-1.5 h-0.5 xs:h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin pointer-events-none" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-0.5 xs:-top-1 left-1/2 w-0.5 xs:w-1 h-0.5 xs:h-1 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-0.5 xs:-right-1 w-0.5 xs:w-1 h-0.5 xs:h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="hidden xs:flex flex-col">
                <div className="text-2xs xs:text-xs sm:text-sm lg:text-sm text-white/80 dark:text-black/80 font-mono transition-colors duration-300 mb-0.5 xs:mb-1">
                  <span className="text-blue-400 dark:text-blue-500">&lt;</span>
                  <span className="hidden sm:inline">developer</span>
                  <span className="sm:hidden">dev</span>
                  <span className="text-blue-400 dark:text-blue-500">/&gt;</span>
                </div>
                <div className="flex items-center space-x-1 text-2xs xs:text-xs text-white/60 dark:text-black/60 font-mono">
                  <Terminal className="w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 text-cyan-400" />
                  <span className="hidden sm:inline">backend.alchemist</span>
                  <span className="sm:hidden">backend</span>
                  <Cpu className="w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl blur-lg sm:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 pointer-events-none"></div>
          </div>

          {/* Enhanced futuristic desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 pointer-events-auto">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative px-2 xs:px-3 xl:px-6 py-1.5 xs:py-2 xl:py-3 text-white dark:text-black hover:text-blue-300 dark:hover:text-blue-700 transition-all duration-300 font-medium rounded-lg xs:rounded-xl xl:rounded-2xl overflow-hidden flex items-center space-x-1 xs:space-x-2 backdrop-blur-sm cursor-pointer pointer-events-auto z-10 text-xs xs:text-sm xl:text-base touch-manipulation min-h-[40px] xs:min-h-[44px]"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-xs transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                  <span className="relative z-10">{item.name}</span>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-cyan-500/10 rounded-lg xs:rounded-xl xl:rounded-2xl transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}></div>
                  
                  <div className={`absolute inset-0 rounded-lg xs:rounded-xl xl:rounded-2xl transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'border border-blue-500/50' : 'border border-transparent'
                  }`}></div>
                  
                  <div className={`absolute bottom-0.5 xs:bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 transition-all duration-300 pointer-events-none ${
                    hoveredItem === item.name ? 'w-4/5 -translate-x-1/2' : 'w-0 -translate-x-1/2'
                  }`}></div>
                </a>
              </div>
            ))}
            
            <div className="ml-2 xs:ml-4 xl:ml-6 pl-2 xs:pl-4 xl:pl-6 border-l border-gradient-to-b from-blue-500/30 via-purple-500/50 to-cyan-500/30 pointer-events-auto">
              <div className="relative">
                <ThemeToggle />
                {/* Energy indicator */}
                <div className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 pointer-events-none">
                  <Zap className="w-1.5 xs:w-2 xl:w-3 h-1.5 xs:h-2 xl:h-3 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced futuristic mobile menu */}
          <div className="lg:hidden flex items-center space-x-2 xs:space-x-3 sm:space-x-4 pointer-events-auto">
            <ThemeToggle />
            <button
              className="relative p-1.5 xs:p-2 sm:p-3 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 transition-all duration-500 group border border-blue-500/30 hover:border-purple-500/50 shadow-lg shadow-blue-500/20 cursor-pointer pointer-events-auto z-10 touch-manipulation min-h-[40px] xs:min-h-[44px] min-w-[40px] xs:min-w-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6">
                <Menu className={`absolute inset-0 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-blue-300 dark:text-blue-700 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`absolute inset-0 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-purple-300 dark:text-purple-700 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                }`} />
              </div>
              {/* Holographic glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-lg xs:rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 pointer-events-none"></div>
            </button>
          </div>
        </div>

        {/* Enhanced futuristic mobile navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 pointer-events-auto ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 dark:from-white/95 dark:via-gray-100/95 dark:to-white/95 backdrop-blur-3xl rounded-xl xs:rounded-2xl sm:rounded-3xl mt-2 xs:mt-4 p-3 xs:p-4 sm:p-6 border border-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 shadow-2xl shadow-blue-500/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 py-2 xs:py-3 sm:py-4 text-white dark:text-black hover:text-blue-300 dark:hover:text-blue-700 transition-all duration-500 font-medium border-b border-white/10 dark:border-black/10 last:border-b-0 hover:pl-2 xs:hover:pl-4 sm:hover:pl-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 group cursor-pointer pointer-events-auto relative z-10 text-xs xs:text-sm sm:text-base touch-manipulation min-h-[40px] xs:min-h-[44px]"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? `fade-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span className="text-sm xs:text-base sm:text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                <span className="flex-1">{item.name}</span>
                <Code2 className="w-2.5 xs:w-3 sm:w-4 h-2.5 xs:h-3 sm:h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
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
