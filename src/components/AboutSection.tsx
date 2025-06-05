import { useEffect, useState } from 'react';
import { Code, Database, Server, Zap, Award, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { getSectionTheme, isTransitioning } = useTheme();

  const sectionTheme = getSectionTheme('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skillTags = [
    { label: "Backend Developer", icon: Server },
    { label: "Creative Thinker", icon: Zap },
    { label: "JavaScript Wizard", icon: Code }
  ];

  return (
    <section 
      id="about" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden transition-all duration-1000 ${
        sectionTheme === 'light' 
          ? 'bg-white' 
          : 'bg-gray-900'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* Floating animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${
              sectionTheme === 'light' 
                ? 'bg-gray-500/5' 
                : 'bg-white/5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${i * 0.5}s`,
              animation: 'float 6s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full blur-3xl transition-all duration-1000 ${
          sectionTheme === 'light' 
            ? 'bg-gray-500/5' 
            : 'bg-white/5'
        }`}></div>
        <div className={`absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 rounded-full blur-3xl transition-all duration-1000 ${
          sectionTheme === 'light' 
            ? 'bg-gray-700/5' 
            : 'bg-white/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-6 sm:space-y-8 order-2 lg:order-1`}>
            {/* Heading */}
            <div className="relative text-center lg:text-left">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-mono font-black mb-4 sm:mb-6 lg:mb-8 transition-colors duration-1000 ${
                sectionTheme === 'light' 
                  ? 'text-gray-900' 
                  : 'text-white'
              }`}>
                About Me
              </h2>
              <div className={`absolute -bottom-1 sm:-bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 transition-colors duration-1000 ${
                sectionTheme === 'light' 
                  ? 'bg-gray-900' 
                  : 'bg-white'
              }`}></div>
            </div>

            {/* Professional Bio */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light transition-colors duration-1000 ${
                sectionTheme === 'light' 
                  ? 'text-gray-700' 
                  : 'text-gray-300'
              }`}>
                I'm a passionate backend developer with 2.5 years of experience building 
                robust, scalable systems. I specialize in creating efficient APIs, 
                designing database architectures, and implementing secure authentication systems.
              </p>
              <p className={`text-base sm:text-lg lg:text-xl leading-relaxed font-light transition-colors duration-1000 ${
                sectionTheme === 'light' 
                  ? 'text-gray-600' 
                  : 'text-gray-400'
              }`}>
                My expertise spans across the modern JavaScript ecosystem, cloud technologies, 
                and DevOps practices. I'm driven by clean code principles and always eager 
                to learn new technologies that can solve complex problems.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              {skillTags.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`relative backdrop-blur-sm border rounded-lg px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-110 touch-manipulation ${
                    sectionTheme === 'light'
                      ? 'bg-white/5 border-gray-900/20 hover:border-gray-900/40 hover:bg-white/10'
                      : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                  }`}>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <skill.icon className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 transition-colors duration-1000 ${
                        sectionTheme === 'light' 
                          ? 'text-gray-900' 
                          : 'text-white'
                      }`} />
                      <span className={`font-mono text-xs sm:text-sm whitespace-nowrap transition-colors duration-1000 ${
                        sectionTheme === 'light' 
                          ? 'text-gray-900' 
                          : 'text-white'
                      }`}>
                        {skill.label}
                      </span>
                    </div>
                    
                    {/* Glowing border animation */}
                    <div className={`absolute inset-0 rounded-lg border opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse ${
                      sectionTheme === 'light'
                        ? 'border-gray-900/40'
                        : 'border-white/40'
                    }`}></div>
                    
                    {/* Underline animation */}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out ${
                      sectionTheme === 'light' 
                        ? 'bg-gray-900' 
                        : 'bg-white'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} relative flex justify-center order-1 lg:order-2`}>
            <div className="relative group">
              {/* Main image container with responsive sizing */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Rounded organic shape container */}
                <div 
                  className="relative w-full h-full animate-float overflow-hidden rounded-[3rem]"
                  style={{
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
                  }}
                >
                  {/* Image placeholder with gradient background */}
                  <div className={`w-full h-full relative overflow-hidden transition-all duration-1000 ${
                    sectionTheme === 'light'
                      ? 'bg-gradient-to-br from-gray-100 to-gray-300'
                      : 'bg-gradient-to-br from-gray-700 to-gray-900'
                  }`}>
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-colors duration-1000 ${
                          sectionTheme === 'light'
                            ? 'bg-gray-900'
                            : 'bg-white'
                        }`}>
                          <span className={`text-lg sm:text-xl font-mono font-bold transition-colors duration-1000 ${
                            sectionTheme === 'light'
                              ? 'text-white'
                              : 'text-gray-900'
                          }`}>DK</span>
                        </div>
                        <img 
                          src="/IMG_4905.jpg" 
                          alt="Dhruv Kakadiya" 
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    
                    {/* Subtle overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Floating decorative elements - responsive sizing */}
                <div className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border rotate-45 animate-pulse transition-colors duration-1000 ${
                  sectionTheme === 'light'
                    ? 'border-gray-900/20'
                    : 'border-white/20'
                }`}></div>
                <div className={`absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 rounded-full animate-float transition-colors duration-1000 ${
                  sectionTheme === 'light'
                    ? 'bg-gray-900/10'
                    : 'bg-white/10'
                }`} style={{ animationDelay: '0.5s' }}></div>
                <div className={`absolute top-1/2 -right-4 sm:-right-8 w-3 sm:w-4 h-3 sm:h-4 border rounded-full animate-pulse transition-colors duration-1000 ${
                  sectionTheme === 'light'
                    ? 'border-gray-900/20'
                    : 'border-white/20'
                }`} style={{ animationDelay: '1s' }}></div>

                {/* Code snippet card - hidden on mobile, shown on larger screens */}
                <div className="absolute -top-20 -left-12 hidden lg:block">
                  <div className={`backdrop-blur-sm border rounded-lg p-3 font-mono text-xs shadow-lg transition-all duration-1000 ${
                    sectionTheme === 'light'
                      ? 'bg-white/80 border-gray-900/20'
                      : 'bg-gray-900/80 border-white/20'
                  }`}>
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className={`transition-colors duration-1000 ${
                      sectionTheme === 'light' 
                        ? 'text-gray-900' 
                        : 'text-white'
                    }`}>
                      <div className="text-green-600 dark:text-green-400">// Developer</div>
                      <div>const me = {"{"}</div>
                      <div className="pl-2 text-blue-600 dark:text-blue-400">firstName: "Dhruv"</div>
                      <div className="pl-2 text-blue-600 dark:text-blue-400">lastName: "Kakadiya"</div>
                      <div className="pl-2 text-blue-600 dark:text-blue-400">experience: "2.5+ Years"</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background blur effect */}
              <div className={`absolute inset-0 rounded-full blur-3xl scale-110 opacity-50 transition-all duration-1000 ${
                sectionTheme === 'light'
                  ? 'bg-gradient-to-r from-gray-500/5 via-transparent to-gray-500/5'
                  : 'bg-gradient-to-r from-white/5 via-transparent to-white/5'
              }`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
