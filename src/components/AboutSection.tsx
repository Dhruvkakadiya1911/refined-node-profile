
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-8`}>
            {/* Heading */}
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-mono font-black mb-8 text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gray-900 dark:bg-white"></div>
            </div>

            {/* Professional Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                I'm a passionate backend developer with 2.5 years of experience building 
                robust, scalable systems. I specialize in creating efficient APIs, 
                designing database architectures, and implementing secure authentication systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                My expertise spans across the modern JavaScript ecosystem, cloud technologies, 
                and DevOps practices. I'm driven by clean code principles and always eager 
                to learn new technologies that can solve complex problems.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="space-y-4">
              {skillTags.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative inline-block mr-4 mb-4"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 rounded-lg px-6 py-3 transition-all duration-300 hover:border-gray-900/40 dark:hover:border-white/40 hover:bg-white/10 dark:hover:bg-white/10">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-5 h-5 text-gray-900 dark:text-white" />
                      <span className="font-mono text-sm text-gray-900 dark:text-white">
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
          </div>

          {/* Right Side - Profile Image */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} relative flex justify-center lg:justify-end`}>
            <div className="relative group">
              {/* Main image container with rounded organic shape */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
                        <div className="w-20 h-20 mx-auto mb-4 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                          <span className="text-xl font-mono font-bold text-white dark:text-gray-900">DK</span>
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

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-gray-900/20 dark:border-white/20 rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-900/10 dark:bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 border border-gray-900/20 dark:border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Code snippet card */}
                <div className="absolute -top-20 -left-12 hidden lg:block">
                  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-900/20 dark:border-white/20 rounded-lg p-3 font-mono text-xs shadow-lg">
                    <div className="flex items-center space-x-1 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-gray-900 dark:text-white">
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
