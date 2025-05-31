
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
      const cubes = containerRef.current.querySelectorAll('.floating-cube');
      cubes.forEach((cube, index) => {
        const depth = (index + 1) * 0.1;
        const moveX = (x - 0.5) * depth * 50;
        const moveY = (y - 0.5) * depth * 50;
        (cube as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${moveY * 0.5}deg) rotateY(${moveX * 0.5}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating cubes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`cube-${i}`}
          className="floating-cube absolute border border-white/10 bg-white/5 backdrop-blur-sm"
          style={{
            width: `${20 + (i % 3) * 15}px`,
            height: `${20 + (i % 3) * 15}px`,
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `rotateX(${i * 15}deg) rotateY(${i * 20}deg)`,
          }}
        />
      ))}

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
      
      {/* Floating glassmorphic card */}
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

      {/* Additional floating elements */}
      {[...Array(12)].map((_, i) => (
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
