
import { useEffect, useRef } from 'react';

const FuturisticHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Enhanced parallax effect with much slower, smoother movement
      const elements = containerRef.current.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const depth = (index + 1) * 0.05; // Much reduced depth for subtle movement
        const moveX = (x - 0.5) * depth * 25; // Significantly reduced movement
        const moveY = (y - 0.5) * depth * 25;
        (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY * 0.2}deg) rotateY(${moveX * 0.2}deg)`;
        (element as HTMLElement).style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Much slower transitions
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Much slower code brackets floating */}
      {['{ }', '[ ]', '( )', '< >'].map((bracket, i) => (
        <div
          key={`bracket-${i}`}
          className="floating-element absolute text-white/20 dark:text-black/20 font-mono text-2xl transition-all duration-1000 hover:text-white/30 dark:hover:text-black/30"
          style={{
            top: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 60 + 20}%`,
            animation: `float ${30 + i * 5}s ease-in-out infinite`, // Much slower (30-45 seconds)
            animationDelay: `${i * 3}s`, // Increased delays
          }}
        >
          {bracket}
        </div>
      ))}

      {/* Much slower database icons */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`db-${i}`}
          className="floating-element absolute border border-white/10 dark:border-black/10 bg-white/3 dark:bg-black/3 rounded-lg p-2 transition-all duration-1000 hover:bg-white/5 dark:hover:bg-black/5"
          style={{
            top: `${40 + i * 20}%`,
            left: `${20 + i * 30}%`,
            animation: `float ${40 + i * 5}s ease-in-out infinite`, // Much slower (40-50 seconds)
            animationDelay: `${i * 4}s`,
          }}
        >
          <div className="w-4 h-4 border border-white/30 dark:border-black/30 rounded-sm mb-1 transition-colors duration-500"></div>
          <div className="w-4 h-1 bg-white/15 dark:bg-black/15 rounded transition-colors duration-500"></div>
          <div className="w-3 h-1 bg-white/10 dark:bg-black/10 rounded mt-0.5 transition-colors duration-500"></div>
        </div>
      ))}

      {/* Much slower server rack representation */}
      <div
        className="floating-element absolute border border-white/10 dark:border-black/10 bg-white/3 dark:bg-black/3 rounded-lg p-3 transition-all duration-1000 hover:scale-102"
        style={{
          bottom: '20%',
          left: '10%',
          animation: 'float 45s ease-in-out infinite', // Much slower
          animationDelay: '4s',
        }}
      >
        <div className="space-y-1">
          <div className="w-8 h-1 bg-green-400/40 dark:bg-green-500/40 rounded transition-colors duration-500"></div>
          <div className="w-8 h-1 bg-blue-400/40 dark:bg-blue-500/40 rounded transition-colors duration-500"></div>
          <div className="w-8 h-1 bg-yellow-400/40 dark:bg-yellow-500/40 rounded transition-colors duration-500"></div>
        </div>
        <div className="text-xs text-white/50 dark:text-black/50 mt-1 font-mono transition-colors duration-500">SERVER</div>
      </div>

      {/* Much slower Git branches visualization */}
      <div
        className="floating-element transition-all duration-1000 hover:scale-105"
        style={{
          top: '60%',
          right: '20%',
          animation: 'float 50s ease-in-out infinite', // Much slower
          animationDelay: '6s',
        }}
      >
        <svg width="40" height="30" className="text-white/20 dark:text-black/20 transition-colors duration-500">
          <path d="M5 5 L35 5 M5 15 L25 15 M15 15 L15 5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="5" cy="5" r="2" fill="currentColor" />
          <circle cx="35" cy="5" r="2" fill="currentColor" />
          <circle cx="25" cy="15" r="2" fill="currentColor" />
        </svg>
        <div className="text-xs text-white/50 dark:text-black/50 font-mono transition-colors duration-500">git</div>
      </div>

      {/* Much more subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.015] transition-opacity duration-1000">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px' // Larger grid for more subtlety
          }}
        />
      </div>

      {/* Much slower abstract geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 dark:border-black/5 rotate-45 animate-spin transition-colors duration-1000" style={{ animationDuration: '80s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-white/8 dark:border-black/8 rotate-12 animate-pulse transition-colors duration-1000" style={{ animationDuration: '12s' }} />
      
      {/* Much slower floating glassmorphic card */}
      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/2 dark:bg-black/2 backdrop-blur-md border border-white/10 dark:border-black/10 rounded-2xl p-6 transition-all duration-1000 hover:bg-white/5 dark:hover:bg-black/5" style={{ animation: 'float 60s ease-in-out infinite' }}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border border-white/20 dark:border-black/20 rounded-sm flex items-center justify-center transition-colors duration-500">
              <div className="w-4 h-4 bg-white/15 dark:bg-black/15 rounded-xs transition-colors duration-500"></div>
            </div>
            <div>
              <div className="text-white/60 dark:text-black/60 text-sm font-mono transition-colors duration-500">Backend Dev</div>
              <div className="text-white/40 dark:text-black/40 text-xs transition-colors duration-500">API • Database • Server</div>
            </div>
          </div>
        </div>
      </div>

      {/* Much slower floating particles */}
      {[...Array(8)].map((_, i) => ( // Reduced number of particles
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 dark:bg-black/20 rounded-full animate-pulse transition-colors duration-1000"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`, // Increased delay
            animationDuration: `${8 + Math.random() * 5}s` // Much slower particles (8-13 seconds)
          }}
        />
      ))}

      {/* Much more subtle ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/1 dark:from-black/1 via-transparent to-transparent opacity-30 transition-opacity duration-1000" />
    </div>
  );
};

export default FuturisticHero3D;
