
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
    { name: 'Testimonials', href: '#testimonials', icon: '💬' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
      isScrolled 
        ? 'bg-black/95 dark:bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30' 
        : 'bg-gradient-to-b from-black/40 dark:from-white/40 to-transparent backdrop-blur-xl'
    }`}>
      {/* Futuristic scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-300 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced futuristic logo */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Main logo with enhanced effects */}
                <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 rounded-2xl p-4 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 group-hover:border-purple-500/50">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    DK
                  </div>
                  {/* Animated corner indicators */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-1 left-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="absolute top-1/2 -right-1 w-1 h-1 bg-purple-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="hidden sm:flex flex-col">
                <div className="text-xs text-white/80 dark:text-black/80 font-mono transition-colors duration-300 mb-1">
                  <span className="text-blue-400 dark:text-blue-500">&lt;</span>
                  <span>developer</span>
                  <span className="text-blue-400 dark:text-blue-500">/&gt;</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-white/60 dark:text-black/60 font-mono">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>backend.specialist</span>
                  <Cpu className="w-3 h-3 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150"></div>
          </div>

          {/* Enhanced futuristic desktop navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative px-6 py-3 text-white dark:text-black hover:text-blue-300 dark:hover:text-blue-700 transition-all duration-500 font-medium rounded-2xl overflow-hidden flex items-center space-x-2 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-sm transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Futuristic background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-cyan-500/10 rounded-2xl transition-all duration-500 ${
                    hoveredItem === item.name ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}></div>
                  
                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredItem === item.name ? 'border border-blue-500/50' : 'border border-transparent'
                  }`}></div>
                  
                  {/* Holographic underline */}
                  <div className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 transition-all duration-500 ${
                    hoveredItem === item.name ? 'w-4/5 -translate-x-1/2' : 'w-0 -translate-x-1/2'
                  }`}></div>
                  
                  {/* Futuristic corner brackets */}
                  <div className={`absolute left-3 top-2 text-blue-400 dark:text-blue-500 text-xs font-mono transition-all duration-300 ${
                    hoveredItem === item.name ? 'opacity-100 transform rotate-0' : 'opacity-0 transform rotate-45'
                  }`}>┌</div>
                  <div className={`absolute right-3 bottom-2 text-purple-400 dark:text-purple-500 text-xs font-mono transition-all duration-300 ${
                    hoveredItem === item.name ? 'opacity-100 transform rotate-0' : 'opacity-0 transform -rotate-45'
                  }`}>┘</div>
                  
                  {/* Scan line effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${
                    hoveredItem === item.name ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
                  }`} style={{ animation: hoveredItem === item.name ? 'slide-right 2s ease-in-out infinite' : 'none' }}></div>
                </a>
                
                {/* Enhanced particle glow */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredItem === item.name ? 'opacity-60 scale-150' : 'opacity-0 scale-100'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-cyan-500/20 rounded-2xl blur-xl"></div>
                  {/* Floating particles */}
                  <div className="absolute top-2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 right-5 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            ))}
            
            <div className="ml-6 pl-6 border-l border-gradient-to-b from-blue-500/30 via-purple-500/50 to-cyan-500/30">
              <div className="relative">
                <ThemeToggle />
                {/* Energy indicator */}
                <div className="absolute -top-1 -right-1">
                  <Zap className="w-3 h-3 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced futuristic mobile menu */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="relative p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-md hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 transition-all duration-500 group border border-blue-500/30 hover:border-purple-500/50 shadow-lg shadow-blue-500/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 text-blue-300 dark:text-blue-700 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 text-purple-300 dark:text-purple-700 transition-all duration-500 ${
                  isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                }`} />
              </div>
              {/* Holographic glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            </button>
          </div>
        </div>

        {/* Enhanced futuristic mobile navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 dark:from-white/95 dark:via-gray-100/95 dark:to-white/95 backdrop-blur-3xl rounded-3xl mt-4 p-6 border border-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 shadow-2xl shadow-blue-500/20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-4 py-4 text-white dark:text-black hover:text-blue-300 dark:hover:text-blue-700 transition-all duration-500 font-medium border-b border-white/10 dark:border-black/10 last:border-b-0 hover:pl-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 group"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? `fade-in 0.5s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                <span className="flex-1">{item.name}</span>
                <Code2 className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Scan line for mobile items */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
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
