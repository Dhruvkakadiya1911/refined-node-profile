
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Twitter,
  Rocket,
  UserRound,
} from 'lucide-react';

const FuturisticHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Building the Future',
    'Node.js Developer',
    'API Architect',
    'Backend Engineer'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentFullText = texts[textIndex];
    if (currentText.length < currentFullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentText('');
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentText, textIndex, texts]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Spheres */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sphere-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(59, 130, 246, 0.3)' :
                i % 3 === 1 ? 'rgba(147, 51, 234, 0.3)' :
                'rgba(6, 182, 212, 0.3)'
              }, transparent)`,
              left: `${10 + (i * 12)}%`,
              top: `${10 + (i * 8)}%`,
              transform: `translate(${mousePosition.x * (i * 20)}px, ${mousePosition.y * (i * 15)}px) translate(${Math.sin(Date.now() * 0.001 + i) * 20}px, ${Math.cos(Date.now() * 0.001 + i) * 15}px)`,
              transition: 'transform 0.2s ease-out',
              animation: `float ${8 + i * 2}s linear infinite`,
              filter: 'blur(1px)',
            }}
          />
        ))}

        {/* Geometric Wireframes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`wireframe-${i}`}
            className="absolute border border-cyan-400/20 transform rotate-45"
            style={{
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              left: `${20 + (i * 15)}%`,
              top: `${15 + (i * 12)}%`,
              transform: `rotate(${45 + i * 30}deg) translate(${mousePosition.x * (i * 10)}px, ${mousePosition.y * (i * 8)}px)`,
              animation: `spin ${20 + i * 5}s linear infinite`,
              borderRadius: i % 2 === 0 ? '0' : '50%',
            }}
          />
        ))}

        {/* Hexagonal Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(30deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(-30deg, transparent 24%, rgba(147, 51, 234, 0.1) 25%, rgba(147, 51, 234, 0.1) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.1) 75%, rgba(147, 51, 234, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 30px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Glassmorphic Card */}
          <div 
            className="relative mb-12 p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%, 
                  rgba(255, 255, 255, 0.02) 100%
                )
              `,
              boxShadow: `
                0 25px 50px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 100px rgba(59, 130, 246, 0.1)
              `,
              transform: `translateY(${mousePosition.y * -10}px) translateX(${mousePosition.x * -5}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Floating Icon */}
            <div className="flex justify-center mb-6">
              <div 
                className="relative p-6 rounded-full backdrop-blur-lg border border-cyan-400/30"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                  transform: `translateY(${Math.sin(Date.now() * 0.002) * 5}px)`,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
                }}
              >
                <Rocket className="w-12 h-12 text-cyan-400" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dhruv Kakadiya
            </h1>

            {/* Animated Subtitle */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-mono text-white/90 h-12 flex items-center justify-center">
                <span className="text-cyan-400">&gt;</span>
                <span className="ml-2">{currentText}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting powerful backend solutions with{' '}
              <span className="text-cyan-400 font-semibold">Node.js</span> and{' '}
              <span className="text-purple-400 font-semibold">cutting-edge technologies</span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-8 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 rounded-full backdrop-blur-md border border-white/10 text-white/60 hover:text-cyan-400 transition-all duration-300 hover:scale-110 group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <social.icon className="w-6 h-6" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 group overflow-hidden"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 group"
                onClick={handleDownloadCV}
              >
                <Download className="w-5 h-5 mr-2" />
                <span>Download CV</span>
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="animate-bounce"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <ArrowDown className="w-8 h-8 mx-auto text-cyan-400/60 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Horizon Line Effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Ambient Light Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
    </section>
  );
};

export default FuturisticHero;
