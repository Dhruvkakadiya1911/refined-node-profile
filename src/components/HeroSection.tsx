
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code, Database, Server } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const fullText = "Hey, I'm Alex Chen – Backend Node.js Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 transition-all duration-1000"
    >
      {/* Magnetic cursor follower */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none z-10 opacity-20 transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
          filter: 'blur(40px)'
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 dark:opacity-5 transition-all duration-1000"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <Code className="w-full h-full text-white dark:text-black" />
            ) : i % 3 === 1 ? (
              <Database className="w-full h-full text-white dark:text-black" />
            ) : (
              <Server className="w-full h-full text-white dark:text-black" />
            )}
          </div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Main heading with gradient text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-800 dark:to-black bg-clip-text text-transparent animate-pulse">
              {displayText}
            </span>
            <span className="animate-ping text-white dark:text-black">|</span>
          </h1>
        </div>
        
        {/* Subtitle with typewriter effect */}
        <div className="relative mb-12">
          <p className="text-2xl md:text-4xl text-gray-300 dark:text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Crafting <span className="font-bold text-white dark:text-black">scalable backends</span> that power 
            <span className="font-bold text-white dark:text-black"> tomorrow's applications</span>
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/20 dark:border-black/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 border-2 border-white/30 dark:border-black/30 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Magnetic buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <div className="group relative">
            <Button 
              size="lg" 
              className="relative z-10 bg-white text-black dark:bg-black dark:text-white hover:scale-110 transition-all duration-500 text-lg px-8 py-4 rounded-full font-bold shadow-2xl overflow-hidden"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white dark:from-gray-800 dark:to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
            {/* Magnetic glow effect */}
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
          </div>

          <div className="group relative">
            <Button 
              variant="outline" 
              size="lg"
              className="relative z-10 border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:scale-110 transition-all duration-500 text-lg px-8 py-4 rounded-full font-bold backdrop-blur-md overflow-hidden"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/30 dark:from-black/10 dark:to-black/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
            </Button>
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="animate-bounce">
          <div className="relative">
            <ArrowDown className="w-8 h-8 mx-auto text-white/60 dark:text-black/60 animate-pulse" />
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full blur-md animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating code snippet */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="glass dark:glass-dark rounded-2xl p-6 font-mono text-sm backdrop-blur-xl border border-white/20 dark:border-black/20 hover:scale-105 transition-all duration-500 group">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            <span className="text-white/70 dark:text-black/70 ml-4">~/server.js</span>
          </div>
          <div className="space-y-2 group-hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 dark:text-green-600">// Building the future</div>
            <div className="text-white dark:text-black">const magic = new NodeJS();</div>
            <div className="text-blue-400 dark:text-blue-600">magic.code(passion, innovation);</div>
            <div className="text-purple-400 dark:text-purple-600">server.listen(dreams);</div>
          </div>
        </div>
      </div>

      {/* Particle system simulation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 dark:bg-black/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
