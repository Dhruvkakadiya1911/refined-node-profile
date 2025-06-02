
import { useEffect, useState } from 'react';
import { Code, Database, Server, Zap, Award, Coffee } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [apiCount, setApiCount] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      // Animate counters
      const experienceTimer = setInterval(() => {
        setExperienceCount(prev => {
          if (prev < 2.5) return prev + 0.1;
          return 2.5;
        });
      }, 50);

      const projectTimer = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 15) return prev + 1;
          return 15;
        });
      }, 100);

      const apiTimer = setInterval(() => {
        setApiCount(prev => {
          if (prev < 25) return prev + 1;
          return 25;
        });
      }, 80);

      return () => {
        clearInterval(experienceTimer);
        clearInterval(projectTimer);
        clearInterval(apiTimer);
      };
    }
  }, [isVisible]);

  const achievements = [
    { icon: Code, title: "Clean Code", desc: "Writing maintainable & scalable solutions" },
    { icon: Database, title: "Data Architecture", desc: "Designing robust database systems" },
    { icon: Server, title: "API Development", desc: "Building high-performance REST APIs" },
    { icon: Zap, title: "Performance", desc: "Optimizing for speed & efficiency" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'} space-y-8`}>
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-500/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                I'm a passionate <span className="font-bold text-blue-600 dark:text-blue-400">Node.js backend developer</span> with 2.5 years of experience 
                building robust, scalable systems. I specialize in creating efficient APIs, 
                designing database architectures, and implementing secure authentication systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My expertise spans across the modern JavaScript ecosystem, cloud technologies, 
                and DevOps practices. I'm driven by clean code principles and always eager 
                to learn new technologies that can solve complex problems.
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                    {experienceCount.toFixed(1)}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">
                    Years Experience
                  </div>
                  <Award className="w-6 h-6 mx-auto mt-2 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">
                    {Math.floor(projectCount)}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">
                    Projects Built
                  </div>
                  <Code className="w-6 h-6 mx-auto mt-2 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="group relative">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:scale-105">
                  <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">
                    {Math.floor(apiCount)}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">
                    APIs Created
                  </div>
                  <Server className="w-6 h-6 mx-auto mt-2 text-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                    <achievement.icon className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-110"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image and Design */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} relative`}>
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-700"></div>
                
                {/* Image placeholder - replace with your actual image */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl group-hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-black text-white">DK</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Your Profile Image Here</p>
                    </div>
                  </div>
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ animationDelay: '0.2s' }}>
                <Database className="w-6 h-6 text-purple-500" />
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>
                <Server className="w-5 h-5 text-green-500" />
              </div>

              {/* Code snippet floating card */}
              <div className="absolute -top-8 left-0 hidden lg:block">
                <div className="bg-black/90 dark:bg-white/90 backdrop-blur-xl rounded-2xl p-4 font-mono text-xs border border-gray-600/50 dark:border-gray-300/50 shadow-2xl group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 dark:text-gray-600 ml-2">~/about.js</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-green-400 dark:text-green-600">// About Dhruv</div>
                    <div className="text-white dark:text-black">const developer = {</div>
                    <div className="text-blue-400 dark:text-blue-600 pl-2">passion: "backend",</div>
                    <div className="text-purple-400 dark:text-purple-600 pl-2">focus: "innovation"</div>
                    <div className="text-white dark:text-black">};</div>
                  </div>
                </div>
              </div>

              {/* Coffee cup floating element */}
              <div className="absolute -bottom-12 right-8 hidden lg:block">
                <div className="bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-xl p-3 group-hover:scale-110 transition-transform duration-500">
                  <Coffee className="w-6 h-6 text-amber-500" />
                  <div className="text-xs text-amber-600 dark:text-amber-400 mt-1 font-semibold">Fueled by coffee</div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-6 h-6 border-2 border-blue-500/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-4 h-4 border-2 border-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-0 w-8 h-8 border-2 border-cyan-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
