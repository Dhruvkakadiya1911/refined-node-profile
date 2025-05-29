import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  Code,
  Database,
  Server,
  Download,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

const HeroSection = () => {
  const [roleText, setRoleText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const roles = [
    'Backend Developer 👨‍💻',
    'API Therapist 🧠',
    'Problem Solver ⚙️',
    'Data Whisperer 📊',
    'System Architect 🏗️',
    'Bug Exterminator 🐛',
  ];

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
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () =>
        heroElement.removeEventListener('mousemove', handleMouseMove);
    }
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
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 transition-all duration-1000"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 dark:bg-black/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Magnetic cursor follower */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none z-10 opacity-20 transition-all duration-300 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
          transform: `translate(${mousePosition.x - 192}px, ${
            mousePosition.y - 192
          }px)`,
          filter: 'blur(40px)',
        }}
      />
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
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Main heading with gradient text */}
        <div className="mb-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-none">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-800 dark:to-black bg-clip-text text-transparent">
              Hey, I'm Dhruv kakadiya
            </span>
          </h1>
        </div>

        {/* Role typing animation */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-mono text-gray-400 dark:text-gray-500">
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

        {/* Subtitle with typewriter effect */}
        <div className="relative mb-12">
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            I write{' '}
            <span className="font-bold text-white dark:text-black">code</span>{' '}
            that nobody sees, but everybody
            <span className="font-bold text-white dark:text-black"> uses</span>
          </p>

          {/* Decorative elements */}
          <div
            className="absolute -top-8 -left-8 w-16 h-16 border-2 border-white/20 dark:border-black/20 rotate-45 animate-spin"
            style={{ animationDuration: '20s' }}
          ></div>
          <div
            className="absolute -bottom-8 -right-8 w-12 h-12 border-2 border-white/30 dark:border-black/30 rotate-45 animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          ></div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors duration-300 hover:scale-110 transform"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Magnetic buttons with hover effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <div className="group relative">
            <Button
              size="lg"
              className="relative z-10 bg-white text-black dark:bg-black dark:text-white hover:scale-110 transition-all duration-500 text-lg px-8 py-4 rounded-full font-bold shadow-2xl overflow-hidden"
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
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
              onClick={handleDownloadCV}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
              </span>
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
            <div
              className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
              style={{ animationDelay: '0.2s' }}
            ></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
              style={{ animationDelay: '0.4s' }}
            ></div>
            <span className="text-white/70 dark:text-black/70 ml-4">
              ~/server.js
            </span>
          </div>
          <div className="space-y-2 group-hover:scale-105 transition-transform duration-300">
            <div className="text-green-400 dark:text-green-600">
              // Building the future
            </div>
            <div className="text-white dark:text-black">
              const magic = new NodeJS();
            </div>
            <div className="text-blue-400 dark:text-blue-600">
              magic.code(passion, innovation);
            </div>
            <div className="text-purple-400 dark:text-purple-600">
              server.listen(dreams);
            </div>
          </div>
        </div>
      </div>

      <div className="glass dark:glass-dark rounded-2xl p-6 font-mono text-sm backdrop-blur-xl border border-white/20 dark:border-black/20 hover:scale-105 transition-all duration-500 group">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          ></div>
          <span className="text-white/70 dark:text-black/70 ml-4">
            ~/life.js
          </span>
        </div>
        <div className="space-y-2 group-hover:scale-105 transition-transform duration-300">
          <div className="text-green-400 dark:text-green-600">// Dev life</div>
          <div className="text-white dark:text-black">
            const life = ['code', 'debug', 'eat', 'repeat'];
          </div>
          <div className="text-blue-400 dark:text-blue-600">
            for (const day of life) {'{'}
          </div>
          <div className="pl-4 text-purple-400 dark:text-purple-600"></div>
          <div className="text-blue-400 dark:text-blue-600">{'}'}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
