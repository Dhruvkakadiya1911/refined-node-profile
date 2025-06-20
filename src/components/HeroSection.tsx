import { useEffect, useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import FuturisticHero3D from './FuturisticHero3D';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [roleText, setRoleText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme, isTransitioning } = useTheme();

  const roles = useMemo(
    () => [
      'Backend Developer',
      'API Therapist',
      'Problem Solver',
      'Data Whisperer',
      'System Architect',
      'Bug Exterminator',
    ],
    []
  );

  // Role typing animation
  useEffect(() => {
    const currentRoleText = roles[currentRole];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    if (!isDeleting && roleText === currentRoleText) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (roleText.length > 0) {
        const timer = setTimeout(() => {
          setRoleText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsDeleting(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      if (roleText.length < currentRoleText.length) {
        const timer = setTimeout(() => {
          const nextChar = currentRoleText[roleText.length];
          if (nextChar) {
            setRoleText((prev) => prev + nextChar);
          }
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [roleText, currentRole, isDeleting, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    const cvPath = '/assets/dhruv-cv.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Dhruv_Kakadiya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* 3D Elements Layer */}
      <FuturisticHero3D />

      {/* Interactive background effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - window.innerWidth / 2}px, ${
            mousePosition.y - window.innerHeight / 2
          }px)`,
        }}
      />
      
      <div className="relative z-20 text-center max-w-6xl mx-auto w-full">
        {/* Main heading with theme-aware gradient text */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 leading-none px-4">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent transition-all duration-1000 ${
              theme === 'dark'
                ? 'from-white via-gray-200 to-white'
                : 'from-black via-gray-800 to-black'
            }`}>
              Hey, I'm Dhruv kakadiya
            </span>
          </h1>
        </div>

        {/* Centered Role typing animation */}
        <div className="mb-8 sm:mb-12 flex justify-center px-4">
          <div className={`backdrop-blur-md border rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-full overflow-hidden transition-all duration-1000 ${
            theme === 'dark'
              ? 'bg-black/20 border-white/20'
              : 'bg-white/20 border-black/20'
          }`}>
            <h2 className={`text-sm sm:text-base md:text-lg lg:text-xl font-mono break-all sm:break-normal transition-colors duration-1000 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className="text-green-400 dark:text-green-500">&gt;</span>{' '}
              <span className="text-blue-400 dark:text-blue-500">const</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-500">role</span>{' '}
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>=</span>{' '}
              <span className="text-purple-400 dark:text-purple-500">"</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{roleText}</span>
              <span className={`animate-ping ${theme === 'dark' ? 'text-white' : 'text-black'}`}>|</span>
              <span className="text-purple-400 dark:text-purple-500">"</span>
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>;</span>
            </h2>
          </div>
        </div>

        {/* Subtitle with responsive typography */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 px-4">
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light max-w-4xl mx-auto leading-relaxed transition-colors duration-1000 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I build{' '}
            <span className={`font-bold transition-colors duration-1000 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              backend infrastructure
            </span>{' '}
            with{' '}
            <span className={`font-bold transition-colors duration-1000 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Node.js
            </span>
          </p>
          {/* Decorative elements - responsive sizing */}
          <div
            className={`absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-2 rotate-45 animate-spin hidden sm:block transition-colors duration-1000 ${
              theme === 'dark' ? 'border-white/20' : 'border-black/20'
            }`}
            style={{ animationDuration: '20s' }}
          ></div>
          <div
            className={`absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 rotate-45 animate-spin hidden sm:block transition-colors duration-1000 ${
              theme === 'dark' ? 'border-white/30' : 'border-black/30'
            }`}
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          ></div>
        </div>

        {/* Enhanced Responsive buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <div className="group relative w-full sm:w-auto">
            <Button
              size="lg"
              className={`relative z-10 hover:scale-105 sm:hover:scale-110 transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl border-2 backdrop-blur-md overflow-hidden w-full sm:w-auto touch-manipulation min-h-[44px] ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white to-gray-100 text-black border-white/30'
                  : 'bg-gradient-to-r from-black to-gray-900 text-white border-black/30'
              }`}
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="whitespace-nowrap">Explore Projects</span>
              </span>
              <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-200 to-white'
                  : 'bg-gradient-to-r from-gray-800 to-black'
              }`}></div>
            </Button>
            <div className={`absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 ${
              theme === 'dark' ? 'bg-white/50' : 'bg-black/50'
            }`}></div>
          </div>

          <div className="group relative w-full sm:w-auto">
            <Button
              size="lg"
              className={`relative z-10 hover:scale-105 sm:hover:scale-110 transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl border-2 backdrop-blur-md overflow-hidden w-full sm:w-auto touch-manipulation min-h-[44px] ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white to-gray-100 text-black border-white/30'
                  : 'bg-gradient-to-r from-black to-gray-900 text-white border-black/30'
              }`}
              onClick={handleDownloadCV}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="whitespace-nowrap">Download CV</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </span>
              <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-200 to-white'
                  : 'bg-gradient-to-r from-gray-800 to-black'
              }`}></div>
            </Button>
            <div className={`absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 ${
              theme === 'dark' ? 'bg-white/50' : 'bg-black/50'
            }`}></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating code snippet - responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 hidden md:block">
        <div className={`backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm border hover:scale-105 transition-all duration-500 group shadow-2xl max-w-[250px] sm:max-w-none ${
          theme === 'dark'
            ? 'bg-black/30 border-white/20'
            : 'bg-white/30 border-black/20'
        }`}>
          <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full animate-pulse"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse"
              style={{ animationDelay: '0.4s' }}
            ></div>
            <span className={`ml-2 sm:ml-4 text-xs sm:text-sm transition-colors duration-1000 ${
              theme === 'dark' ? 'text-white/70' : 'text-black/70'
            }`}>
              ~/life.js
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2 group-hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 dark:text-green-500 text-xs sm:text-sm">
              // Dev life
            </div>
            <div className={`text-xs sm:text-sm break-all sm:break-normal transition-colors duration-1000 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              const life = ['code', 'debug', 'eat', 'repeat'];
            </div>
            <div className="text-blue-400 dark:text-blue-500 text-xs sm:text-sm">
              for (const day of life) {'{'}
            </div>
            <div className="pl-2 sm:pl-4 text-purple-400 dark:text-purple-500 text-xs sm:text-sm"></div>
            <div className="text-blue-400 dark:text-blue-500 text-xs sm:text-sm">
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
