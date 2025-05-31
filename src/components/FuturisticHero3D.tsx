
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Terminal, Database, Server } from 'lucide-react';

const FuturisticHero3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

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
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Animated 3D Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          }}
        />
        {/* Vertical lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px h-full bg-white/20"
            style={{
              left: `${(i + 1) * 6.67}%`,
              transform: `translateZ(${Math.sin(i * 0.5) * 10}px) rotateY(${mousePosition.x * 2}deg)`,
              animation: `pulse ${2 + i * 0.1}s infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        {/* Horizontal lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-white/20"
            style={{
              top: `${(i + 1) * 10}%`,
              transform: `translateZ(${Math.cos(i * 0.3) * 10}px) rotateX(${mousePosition.y * 2}deg)`,
              animation: `pulse ${3 + i * 0.1}s infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating 3D Cubes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`cube-${i}`}
          className="absolute w-16 h-16 border border-white/30 bg-white/5 backdrop-blur-sm"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            transform: `
              translate3d(
                ${Math.sin(Date.now() * 0.001 + i) * 20 + mousePosition.x * 30}px,
                ${Math.cos(Date.now() * 0.001 + i) * 20 + mousePosition.y * 30}px,
                ${Math.sin(Date.now() * 0.0005 + i) * 50}px
              )
              rotateX(${45 + mousePosition.y * 20}deg)
              rotateY(${45 + mousePosition.x * 20}deg)
              rotateZ(${Date.now() * 0.05 + i * 45}deg)
            `,
            animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Floating Backend Icons */}
      <div className="absolute inset-0">
        <Terminal
          className="absolute w-8 h-8 text-white/40"
          style={{
            left: '15%',
            top: '25%',
            transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0) rotate(${mousePosition.x * 10}deg)`,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Database
          className="absolute w-10 h-10 text-white/40"
          style={{
            right: '20%',
            top: '30%',
            transform: `translate3d(${-mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0) rotate(${-mousePosition.y * 10}deg)`,
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <Server
          className="absolute w-6 h-6 text-white/40"
          style={{
            left: '70%',
            bottom: '40%',
            transform: `translate3d(${mousePosition.x * 25}px, ${-mousePosition.y * 25}px, 0) rotate(${mousePosition.x * 15}deg)`,
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-none text-white">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Dhruv Kakadiya
            </span>
          </h1>
        </div>

        {/* Glassmorphic Card */}
        <div 
          className="relative mx-auto mb-12 max-w-2xl"
          style={{
            transform: `
              translate3d(0, ${scrollY * 0.1}px, 0)
              perspective(800px)
              rotateX(${mousePosition.y * 5}deg)
              rotateY(${mousePosition.x * 5}deg)
            `,
          }}
        >
          <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 relative overflow-hidden">
            {/* Card background effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-50"
              style={{
                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <Terminal className="w-8 h-8 text-white/80" />
                <Database className="w-8 h-8 text-white/80" />
                <Server className="w-8 h-8 text-white/80" />
              </div>
              
              <h2 className="text-xl md:text-2xl font-mono text-white/90 mb-4">
                <span className="text-gray-400">&gt;</span> Backend Developer
              </h2>
              
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Building scalable systems that power the digital world, 
                <br className="hidden md:block" />
                one API at a time.
              </p>
            </div>

            {/* Floating particles inside card */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 transform hover:rotate-12"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full font-bold"
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Explore Projects
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 text-lg px-8 py-4 rounded-full font-bold backdrop-blur-md"
            onClick={handleDownloadCV}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-white/60 animate-pulse" />
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px)`,
        }}
      />
    </section>
  );
};

export default FuturisticHero3D;
