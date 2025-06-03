
import { useEffect, useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import FuturisticHero3D from './FuturisticHero3D';

const HeroSection = () => {
  const [roleText, setRoleText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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

  const backendTools = [
    { text: 'let', color: 'text-yellow-400' },
    { text: 'const', color: 'text-blue-400' },
    { text: 'array', color: 'text-green-400' },
    { text: 'map()', color: 'text-purple-400' },
    { text: 'Node.js', color: 'text-green-500' },
    { text: 'Express', color: 'text-gray-300' },
    { text: 'MongoDB', color: 'text-green-600' },
    { text: 'API', color: 'text-blue-300' },
    { text: 'JWT', color: 'text-red-400' },
    { text: 'Docker', color: 'text-blue-500' },
    { text: 'Redis', color: 'text-red-500' },
    { text: 'MySQL', color: 'text-orange-400' },
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 transition-all duration-1000 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* 3D Elements Layer */}
      <FuturisticHero3D />

      {/* Responsive floating backend tools */}
      {backendTools.map((tool, i) => {
        const randomTop = Math.floor(Math.random() * 70) + 10; // 10%–80%
        const randomLeft = Math.floor(Math.random() * 70) + 10;
        const duration = 12 + Math.random() * 6; // 12–18s

        return (
          <div
            key={`tool-${i}`}
            className={`floating-element absolute ${tool.color} font-mono text-xs sm:text-sm bg-black/10 backdrop-blur-sm border border-white/10 rounded-lg px-2 sm:px-3 py-1 shadow-md hover:scale-105 transition-all duration-500 hidden sm:block`}
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            {tool.text}
          </div>
        );
      })}

      {/* Interactive background effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          transform: `translate(${mousePosition.x - window.innerWidth / 2}px, ${
            mousePosition.y - window.innerHeight / 2
          }px)`,
        }}
      />
      
      <div className="relative z-20 text-center max-w-6xl mx-auto w-full">
        {/* Main heading with responsive gradient text */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 leading-none px-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-800 dark:to-black bg-clip-text text-transparent">
              Hey, I'm Dhruv kakadiya
            </span>
          </h1>
        </div>

        {/* Centered Role typing animation */}
        <div className="mb-8 sm:mb-12 flex justify-center px-4">
          <div className="bg-black/20 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-black/20 rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-full overflow-hidden">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-mono text-gray-400 dark:text-gray-500 break-all sm:break-normal">
              <span className="text-green-400 dark:text-green-500">&gt;</span>{' '}
              <span className="text-blue-400 dark:text-blue-500">const</span>{' '}
              <span className="text-yellow-400 dark:text-yellow-500">role</span>{' '}
              <span className="text-white dark:text-black">=</span>{' '}
              <span className="text-purple-400 dark:text-purple-500">"</span>
              <span className="text-white dark:text-black">{roleText}</span>
              <span className="animate-ping text-white dark:text-black">|</span>
              <span className="text-purple-400 dark:text-purple-500">"</span>
              <span className="text-white dark:text-black">;</span>
            </h2>
          </div>
        </div>

        {/* Subtitle with responsive typography */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 px-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 dark:text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            I write{' '}
            <span className="font-bold text-white dark:text-black">code</span>{' '}
            that nobody sees, but everybody{' '}
            <span className="font-bold text-white dark:text-black">uses</span>
          </p>

          {/* Decorative elements - responsive sizing */}
          <div
            className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-2 border-white/20 dark:border-black/20 rotate-45 animate-spin hidden sm:block"
            style={{ animationDuration: '20s' }}
          ></div>
          <div
            className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 border-white/30 dark:border-black/30 rotate-45 animate-spin hidden sm:block"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          ></div>
        </div>

        {/* Enhanced Responsive buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <div className="group relative w-full sm:w-auto">
            <Button
              size="lg"
              className="relative z-10 bg-gradient-to-r from-white to-gray-100 text-black dark:from-black dark:to-gray-900 dark:text-white hover:scale-105 sm:hover:scale-110 transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl border-2 border-white/30 dark:border-black/30 backdrop-blur-md overflow-hidden w-full sm:w-auto touch-manipulation min-h-[44px]"
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white dark:from-gray-800 dark:to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
          </div>

          <div className="group relative w-full sm:w-auto">
            <Button
              size="lg"
              className="relative z-10 bg-gradient-to-r from-white to-gray-100 text-black dark:from-black dark:to-gray-900 dark:text-white hover:scale-105 sm:hover:scale-110 transition-all duration-500 text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl font-bold shadow-2xl border-2 border-white/30 dark:border-black/30 backdrop-blur-md overflow-hidden w-full sm:w-auto touch-manipulation min-h-[44px]"
              onClick={handleDownloadCV}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Download className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="whitespace-nowrap">Download CV</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white dark:from-gray-800 dark:to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </Button>
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
          </div>
        </div>
      </div>
      
      {/* Enhanced floating code snippet - responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-4 sm:left-6 lg:left-10 hidden md:block">
        <div className="bg-black/30 dark:bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm border border-white/20 dark:border-black/20 hover:scale-105 transition-all duration-500 group shadow-2xl max-w-[250px] sm:max-w-none">
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
            <span className="text-white/70 dark:text-black/70 ml-2 sm:ml-4 text-xs sm:text-sm">
              ~/life.js
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2 group-hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 dark:text-green-600 text-xs sm:text-sm">
              // Dev life
            </div>
            <div className="text-white dark:text-black text-xs sm:text-sm break-all sm:break-normal">
              const life = ['code', 'debug', 'eat', 'repeat'];
            </div>
            <div className="text-blue-400 dark:text-blue-600 text-xs sm:text-sm">
              for (const day of life) {'{'}
            </div>
            <div className="pl-2 sm:pl-4 text-purple-400 dark:text-purple-600 text-xs sm:text-sm"></div>
            <div className="text-blue-400 dark:text-blue-600 text-xs sm:text-sm">{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
