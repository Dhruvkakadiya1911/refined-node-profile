
import { useEffect, useState } from 'react';
import { Code, Database, Server, Zap, Award, Coffee } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-gray-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-6 sm:space-y-8 order-2 lg:order-1`}>
            {/* Heading */}
            <div className="relative text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-mono font-black mb-4 sm:mb-6 lg:mb-8 text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-12 sm:w-16 lg:w-20 h-0.5 sm:h-1 bg-gray-900 dark:bg-white"></div>
            </div>

            {/* Professional Bio */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                I'm a passionate backend developer with 2.5 years of experience building 
                robust, scalable systems. I specialize in creating efficient APIs, 
                designing database architectures, and implementing secure authentication systems.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
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
                  <div className="relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 rounded-lg px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:border-gray-900/40 dark:hover:border-white/40 hover:bg-white/10 dark:hover:bg-white/10 touch-manipulation">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <skill.icon className="w-4 sm:w-5 h-4 sm:h-5 text-gray-900 dark:text-white flex-shrink-0" />
                      <span className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white whitespace-nowrap">
                        {skill.label}
                      </span>
                    </div>
                    
                    {/* Glowing border animation */}
                    <div className="absolute inset-0 rounded-lg border border-gray-900/40 dark:border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    
                    {/* Underline animation */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>

             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">Add commentMore actions
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">2.5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">APIs</div>
              </div>
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
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 relative overflow-hidden">
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-mono font-bold text-white dark:text-gray-900">DK</span>
                        </div>
                        <img 
                          src="/public/IMG_4905.jpg" 
                          alt="Dhruv Kakadiya" 
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Floating decorative elements - responsive sizing */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border border-gray-900/20 dark:border-white/20 rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gray-900/10 dark:bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-4 sm:-right-8 w-3 sm:w-4 h-3 sm:h-4 border border-gray-900/20 dark:border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Code snippet card - hidden on mobile, shown on larger screens */}
                <div className="absolute -top-16 sm:-top-20 -left-8 sm:-left-12 hidden md:block lg:hidden xl:block">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 rounded-lg p-2 sm:p-3 font-mono text-xs shadow-lg">
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-400 rounded-full"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gray-900 dark:text-white text-xs">
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
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 via-transparent to-gray-500/5 rounded-full blur-3xl scale-110 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
