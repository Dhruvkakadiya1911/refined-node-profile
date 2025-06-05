
import { useEffect, useRef } from 'react';
import { Github, Database, Server } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FuturisticHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('hero');

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
            key={i}
            className={`floating-element absolute border rounded-lg p-3 transition-all duration-1000 hover:scale-102 ${
              sectionTheme === 'light'
                ? 'border-black/10 bg-white/3'
                : 'border-white/10 bg-black/5'
            }`}
            style={{
              ...position,
              animation: `float 45s ease-in-out infinite`,
              animationDelay: `4s`,
            }}
          >
            {tool.text === 'Server' && (
              <Server className={`w-11 h-11 transition-colors duration-500 ${
                sectionTheme === 'light' ? 'text-black/20' : 'text-white/20'
              }`} />
            )}
            {tool.text === 'Database' && (
              <Database className={`w-11 h-11 transition-colors duration-500 ${
                sectionTheme === 'light' ? 'text-black/20' : 'text-white/20'
              }`} />
            )}
            {tool.text === 'Github' && (
              <Github className={`w-11 h-11 transition-colors duration-500 ${
                sectionTheme === 'light' ? 'text-black/20' : 'text-white/20'
              }`} />
            )}
          </div>
        );
      })}

      {/* Much more subtle grid overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        sectionTheme === 'light' ? 'opacity-[0.01]' : 'opacity-[0.02]'
      }`}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(${sectionTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${sectionTheme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px', // Larger grid for more subtlety
          }}
        />
      </div>

      {/* Much slower abstract geometric shapes */}
      <div
        className={`absolute top-1/4 right-1/4 w-32 h-32 border rotate-45 animate-spin transition-colors duration-1000 ${
          sectionTheme === 'light' ? 'border-black/5' : 'border-white/5'
        }`}
        style={{ animationDuration: '80s' }}
      />
      <div
        className={`absolute bottom-1/4 left-1/4 w-24 h-24 border rotate-12 animate-pulse transition-colors duration-1000 ${
          sectionTheme === 'light' ? 'border-black/8' : 'border-white/8'
        }`}
        style={{ animationDuration: '12s' }}
      />

      {/* Much slower floating glassmorphic card */}
      <div className="absolute top-1/2 right-11 hidden lg:block">
        <div
          className={`backdrop-blur-md border rounded-2xl p-6 transition-all duration-1000 ${
            sectionTheme === 'light'
              ? 'bg-white/2 border-black/10 hover:bg-white/5'
              : 'bg-black/5 border-white/10 hover:bg-black/8'
          }`}
          style={{ animation: 'float 60s ease-in-out infinite' }}
        >
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 border rounded-sm flex items-center justify-center transition-colors duration-500 ${
              sectionTheme === 'light' ? 'border-black/20' : 'border-white/20'
            }`}>
              <div className={`w-4 h-4 rounded-xs transition-colors duration-500 ${
                sectionTheme === 'light' ? 'bg-black/15' : 'bg-white/15'
              }`}></div>
            </div>
            <div>
              <div className={`text-sm font-mono transition-colors duration-500 ${
                sectionTheme === 'light' ? 'text-black/60' : 'text-white/60'
              }`}>
                Backend Dev
              </div>
              <div className={`text-xs transition-colors duration-500 ${
                sectionTheme === 'light' ? 'text-black/40' : 'text-white/40'
              }`}>
                API • Database • Server
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Much slower floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 rounded-full transition-colors duration-1000 ${
            sectionTheme === 'light' ? 'bg-black/20' : 'bg-blue-600/90'
          }`}
          style={{
            top: `${12.5 * (i + 1)}%`,
            left: `${12.5 * (i + 1)}%`,
          }}
        />
      ))}

      {/* Much more subtle ambient lighting effect */}
      <div className={`absolute inset-0 bg-gradient-radial opacity-30 transition-opacity duration-1000 ${
        sectionTheme === 'light'
          ? 'from-black/1 via-transparent to-transparent'
          : 'from-white/1 via-transparent to-transparent'
      }`} />
    </div>
  );
};

export default FuturisticHero3D;
