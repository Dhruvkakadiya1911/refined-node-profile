
import { useEffect, useRef } from 'react';
import { Github, Database, Server } from 'lucide-react';

const FuturisticHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Enhanced parallax effect with much slower, smoother movement
      const elements =
        containerRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const depth = (index + 1) * 0.05; // Much reduced depth for subtle movement
        const moveX = (x - 0.5) * depth * 25; // Significantly reduced movement
        const moveY = (y - 0.5) * depth * 25;
        (
          element as HTMLElement
        ).style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${
          moveY * 0.2
        }deg) rotateY(${moveX * 0.2}deg)`;
        (element as HTMLElement).style.transition =
          'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Much slower transitions
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const backendTool = [
    { text: 'Server', left: '10', bottom: '40' },
    { text: 'Database', bottom: '70', right: '10' },
    { text: 'Github', bottom: '12', right: '10' },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {backendTool.map((tool, i) => {
        const position = {};

        if ('top' in tool) position['top'] = `${tool.top}%`;
        if ('left' in tool) position['left'] = `${tool.left}%`;
        if ('bottom' in tool) position['bottom'] = `${tool.bottom}%`;
        if ('right' in tool) position['right'] = `${tool.right}%`;

        return (
          <div
            key={`tool-${i}`}
            className="floating-element absolute border border-white/10 dark:border-black/10 bg-white/3 dark:bg-black/3 rounded-lg p-2 xs:p-3 transition-all duration-1000 hover:scale-102 hidden md:block"
            style={{
              ...position,
              animation: `float 45s ease-in-out infinite`,
              animationDelay: `4s`,
            }}
          >
            {tool.text === 'Server' && (
              <Server className="w-8 xs:w-9 sm:w-10 md:w-11 h-8 xs:h-9 sm:h-10 md:h-11 text-white/20 dark:text-black/20 transition-colors duration-500" />
            )}
            {tool.text === 'Database' && (
              <Database className="w-8 xs:w-9 sm:w-10 md:w-11 h-8 xs:h-9 sm:h-10 md:h-11 text-white/20 dark:text-black/20 transition-colors duration-500" />
            )}
            {tool.text === 'Github' && (
              <Github className="w-8 xs:w-9 sm:w-10 md:w-11 h-8 xs:h-9 sm:h-10 md:h-11 text-white/20 dark:text-black/20 transition-colors duration-500" />
            )}
          </div>
        );
      })}

      {/* Much more subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.015] transition-opacity duration-1000">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px', // Larger grid for more subtlety
          }}
        />
      </div>

      {/* Much slower abstract geometric shapes */}
      <div
        className="absolute top-1/4 right-1/4 w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 border border-white/5 dark:border-black/5 rotate-45 animate-spin transition-colors duration-1000 hidden md:block"
        style={{ animationDuration: '80s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-20 xs:w-22 sm:w-24 h-20 xs:h-22 sm:h-24 border border-white/8 dark:border-black/8 rotate-12 animate-pulse transition-colors duration-1000 hidden md:block"
        style={{ animationDuration: '12s' }}
      />

      {/* Much slower floating glassmorphic card */}
      <div className="absolute top-1/2 right-8 xs:right-9 sm:right-10 md:right-11 hidden lg:block">
        <div
          className="bg-white/2 dark:bg-black/2 backdrop-blur-md border border-white/10 dark:border-black/10 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 transition-all duration-1000 hover:bg-white/5 dark:hover:bg-black/5"
          style={{ animation: 'float 60s ease-in-out infinite' }}
        >
          <div className="flex items-center space-x-2 xs:space-x-3">
            <div className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 border border-white/20 dark:border-black/20 rounded-sm flex items-center justify-center transition-colors duration-500">
              <div className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 bg-white/15 dark:bg-black/15 rounded-xs transition-colors duration-500"></div>
            </div>
            <div>
              <div className="text-white/60 dark:text-black/60 text-xs xs:text-sm font-mono transition-colors duration-500">
                Backend Dev
              </div>
              <div className="text-white/40 dark:text-black/40 text-2xs xs:text-xs transition-colors duration-500">
                API • Database • Server
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Much slower floating particles */}
      {[...Array(16)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-0.5 xs:w-1 h-0.5 xs:h-1 bg-blue-600/90 dark:bg-black/20 rounded-full transition-colors duration-1000 hidden sm:block"
          style={{
            top: `${6.25 * (i + 1)}%`,
            left: `${6.25 * (i + 1)}%`,
          }}
        />
      ))}

      {/* Much more subtle ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/1 dark:from-black/1 via-transparent to-transparent opacity-30 transition-opacity duration-1000" />
    </div>
  );
};

export default FuturisticHero3D;
