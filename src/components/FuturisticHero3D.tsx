
import { useEffect, useRef } from 'react';

const FuturisticHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Enhanced parallax effect for floating elements with smooth transitions
      const elements = containerRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const depth = (index + 1) * 0.08; // Reduced depth for smoother movement
        const moveX = (x - 0.5) * depth * 40; // Reduced movement intensity
        const moveY = (y - 0.5) * depth * 40;
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY * 0.3}deg) rotateY(${moveX * 0.3}deg)`;
        (element as HTMLElement).style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backendTools = [
    { text: 'let', color: 'text-yellow-400 dark:text-yellow-500' },
    { text: 'const', color: 'text-blue-400 dark:text-blue-500' },
    { text: 'array', color: 'text-green-400 dark:text-green-500' },
    { text: 'map()', color: 'text-purple-400 dark:text-purple-500' },
    { text: 'Node.js', color: 'text-green-500 dark:text-green-600' },
    { text: 'Express', color: 'text-gray-300 dark:text-gray-400' },
    { text: 'MongoDB', color: 'text-green-600 dark:text-green-700' },
    { text: 'API', color: 'text-blue-300 dark:text-blue-400' },
    { text: 'JWT', color: 'text-red-400 dark:text-red-500' },
    { text: 'Docker', color: 'text-blue-500 dark:text-blue-600' },
    { text: 'Redis', color: 'text-red-500 dark:text-red-600' },
    { text: 'MySQL', color: 'text-orange-400 dark:text-orange-500' },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced floating programming keywords and tools with smooth transitions */}
      {backendTools.map((tool, i) => (
        <div
          key={`tool-${i}`}
          className={`floating-element absolute ${tool.color} font-mono text-sm bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-black/10 rounded-lg px-3 py-1 transition-all duration-500 hover:scale-110 hover:bg-black/20 dark:hover:bg-white/20`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animation: `float ${12 + i * 3}s ease-in-out infinite`, // Slower, smoother animation
            animationDelay: `${i * 0.5}s`,
            transform: `rotateX(${i * 5}deg) rotateY(${i * 8}deg)`, // Reduced rotation for subtlety
          }}
        >
          {tool.text}
        </div>
      ))}

      {/* Enhanced Postman logo styled element */}
      <div
        className="floating-element absolute bg-orange-500/20 dark:bg-orange-400/20 border border-orange-500/30 dark:border-orange-400/30 rounded-lg p-3 transition-all duration-500 hover:scale-105"
        style={{
          top: '20%',
          right: '15%',
          animation: 'float 18s ease-in-out infinite', // Slower animation
          animationDelay: '3s',
        }}
      >
        <div className="text-orange-400 dark:text-orange-500 font-bold text-xs">POSTMAN</div>
        <div className="w-6 h-6 border-2 border-orange-400 dark:border-orange-500 rounded mt-1 transition-colors duration-300"></div>
      </div>

      {/* Smooth code brackets floating */}
      {['{ }', '[ ]', '( )', '< >'].map((bracket, i) => (
        <div
          key={`bracket-${i}`}
          className="floating-element absolute text-white/30 dark:text-black/30 font-mono text-2xl transition-all duration-700 hover:text-white/50 dark:hover:text-black/50"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
            animation: `float ${15 + i * 2}s ease-in-out infinite`, // Much slower
            animationDelay: `${i * 2}s`,
          }}
        >
          {bracket}
        </div>
      ))}

      {/* Enhanced database icons with smooth transitions */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`db-${i}`}
          className="floating-element absolute border border-white/20 dark:border-black/20 bg-white/5 dark:bg-black/5 rounded-lg p-2 transition-all duration-500 hover:bg-white/10 dark:hover:bg-black/10"
          style={{
            top: `${40 + i * 20}%`,
            left: `${20 + i * 30}%`,
            animation: `float ${20 + i * 3}s ease-in-out infinite`, // Slower animation
            animationDelay: `${i * 3}s`,
          }}
        >
          <div className="w-4 h-4 border border-white/40 dark:border-black/40 rounded-sm mb-1 transition-colors duration-300"></div>
          <div className="w-4 h-1 bg-white/20 dark:bg-black/20 rounded transition-colors duration-300"></div>
          <div className="w-3 h-1 bg-white/15 dark:bg-black/15 rounded mt-0.5 transition-colors duration-300"></div>
        </div>
      ))}

      {/* Enhanced server rack representation */}
      <div
        className="floating-element absolute border border-white/20 dark:border-black/20 bg-white/5 dark:bg-black/5 rounded-lg p-3 transition-all duration-500 hover:scale-105"
        style={{
          bottom: '20%',
          left: '10%',
          animation: 'float 22s ease-in-out infinite', // Slower animation
          animationDelay: '2s',
        }}
      >
        <div className="space-y-1">
          <div className="w-8 h-1 bg-green-400/60 dark:bg-green-500/60 rounded transition-colors duration-300"></div>
          <div className="w-8 h-1 bg-blue-400/60 dark:bg-blue-500/60 rounded transition-colors duration-300"></div>
          <div className="w-8 h-1 bg-yellow-400/60 dark:bg-yellow-500/60 rounded transition-colors duration-300"></div>
        </div>
        <div className="text-xs text-white/60 dark:text-black/60 mt-1 font-mono transition-colors duration-300">SERVER</div>
      </div>

      {/* Enhanced Git branches visualization */}
      <div
        className="floating-element transition-all duration-500 hover:scale-110"
        style={{
          top: '60%',
          right: '20%',
          animation: 'float 25s ease-in-out infinite', // Much slower
          animationDelay: '4s',
        }}
      >
        <svg width="40" height="30" className="text-white/30 dark:text-black/30 transition-colors duration-300">
          <path d="M5 5 L35 5 M5 15 L25 15 M15 15 L15 5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="5" cy="5" r="2" fill="currentColor" />
          <circle cx="35" cy="5" r="2" fill="currentColor" />
          <circle cx="25" cy="15" r="2" fill="currentColor" />
        </svg>
        <div className="text-xs text-white/60 dark:text-black/60 font-mono transition-colors duration-300">git</div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] transition-opacity duration-1000">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px' // Larger grid for subtlety
          }}
        />
      </div>

      {/* Slower abstract geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 dark:border-black/10 rotate-45 animate-spin transition-colors duration-1000" style={{ animationDuration: '40s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/15 dark:border-black/15 rotate-12 animate-pulse transition-colors duration-1000" style={{ animationDuration: '6s' }} />
      
      {/* Enhanced floating glassmorphic card */}
      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/20 dark:border-black/20 rounded-2xl p-6 animate-float transition-all duration-500 hover:bg-white/10 dark:hover:bg-black/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white/30 dark:border-black/30 rounded-sm flex items-center justify-center transition-colors duration-300">
              <div className="w-4 h-4 bg-white/20 dark:bg-black/20 rounded-xs transition-colors duration-300"></div>
            </div>
            <div>
              <div className="text-white/80 dark:text-black/80 text-sm font-mono transition-colors duration-300">Backend Dev</div>
              <div className="text-white/60 dark:text-black/60 text-xs transition-colors duration-300">API • Database • Server</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slower floating particles with smooth transitions */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 dark:bg-black/30 rounded-full animate-pulse transition-colors duration-1000"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 3}s` // Slower particles
          }}
        />
      ))}

      {/* Enhanced ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/3 dark:from-black/3 via-transparent to-transparent opacity-50 transition-opacity duration-1000" />
    </div>
  );
};

export default FuturisticHero3D;
