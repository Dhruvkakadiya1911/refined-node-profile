
import { useEffect, useRef } from 'react';

const FuturisticHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Parallax effect for floating elements
      const elements = containerRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const depth = (index + 1) * 0.1;
        const moveX = (x - 0.5) * depth * 50;
        const moveY = (y - 0.5) * depth * 50;
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY * 0.5}deg) rotateY(${moveX * 0.5}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating programming keywords and tools */}
      {backendTools.map((tool, i) => (
        <div
          key={`tool-${i}`}
          className={`floating-element absolute ${tool.color} font-mono text-sm bg-black/10 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1`}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            transform: `rotateX(${i * 10}deg) rotateY(${i * 15}deg)`,
          }}
        >
          {tool.text}
        </div>
      ))}

      {/* Postman logo styled element */}
      <div
        className="floating-element absolute bg-orange-500/20 border border-orange-500/30 rounded-lg p-3"
        style={{
          top: '20%',
          right: '15%',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '2s',
        }}
      >
        <div className="text-orange-400 font-bold text-xs">POSTMAN</div>
        <div className="w-6 h-6 border-2 border-orange-400 rounded mt-1"></div>
      </div>

      {/* Code brackets floating */}
      {['{ }', '[ ]', '( )', '< >'].map((bracket, i) => (
        <div
          key={`bracket-${i}`}
          className="floating-element absolute text-white/30 font-mono text-2xl"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
            animation: `float ${10 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          {bracket}
        </div>
      ))}

      {/* Database icons */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`db-${i}`}
          className="floating-element absolute border border-white/20 bg-white/5 rounded-lg p-2"
          style={{
            top: `${40 + i * 20}%`,
            left: `${20 + i * 30}%`,
            animation: `float ${15 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        >
          <div className="w-4 h-4 border border-white/40 rounded-sm mb-1"></div>
          <div className="w-4 h-1 bg-white/20 rounded"></div>
          <div className="w-3 h-1 bg-white/15 rounded mt-0.5"></div>
        </div>
      ))}

      {/* Server rack representation */}
      <div
        className="floating-element absolute border border-white/20 bg-white/5 rounded-lg p-3"
        style={{
          bottom: '20%',
          left: '10%',
          animation: 'float 14s ease-in-out infinite',
          animationDelay: '1s',
        }}
      >
        <div className="space-y-1">
          <div className="w-8 h-1 bg-green-400/60 rounded"></div>
          <div className="w-8 h-1 bg-blue-400/60 rounded"></div>
          <div className="w-8 h-1 bg-yellow-400/60 rounded"></div>
        </div>
        <div className="text-xs text-white/60 mt-1 font-mono">SERVER</div>
      </div>

      {/* Git branches visualization */}
      <div
        className="floating-element absolute"
        style={{
          top: '60%',
          right: '20%',
          animation: 'float 16s ease-in-out infinite',
          animationDelay: '3s',
        }}
      >
        <svg width="40" height="30" className="text-white/30">
          <path d="M5 5 L35 5 M5 15 L25 15 M15 15 L15 5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="5" cy="5" r="2" fill="currentColor" />
          <circle cx="35" cy="5" r="2" fill="currentColor" />
          <circle cx="25" cy="15" r="2" fill="currentColor" />
        </svg>
        <div className="text-xs text-white/60 font-mono">git</div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Abstract geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/15 rotate-12 animate-pulse" />
      
      {/* Enhanced floating glassmorphic card */}
      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white/30 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 rounded-xs"></div>
            </div>
            <div>
              <div className="text-white/80 text-sm font-mono">Backend Dev</div>
              <div className="text-white/60 text-xs">API • Database • Server</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-50" />
    </div>
  );
};

export default FuturisticHero3D;
