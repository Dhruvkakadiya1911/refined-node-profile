
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Server, Zap, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { getSectionTheme, isTransitioning } = useTheme();

  const sectionTheme = getSectionTheme('skills');

  const skills = [
    { name: 'Node.js', level: 95, category: 'Backend', icon: Server, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', level: 90, category: 'Framework', icon: Zap, color: 'from-yellow-400 to-yellow-600' },
    { name: 'JavaScript', level: 92, category: 'Language', icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 88, category: 'Language', icon: Code, color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 85, category: 'Database', icon: Database, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 82, category: 'Database', icon: Database, color: 'from-blue-600 to-blue-800' },
    { name: 'MySQL', level: 82, category: 'Database', icon: Database, color: 'from-cyan-600 to-cyan-800' },
    { name: 'Redis', level: 78, category: 'Cache', icon: Zap, color: 'from-red-400 to-red-600' },
    { name: 'AWS', level: 80, category: 'Cloud', icon: Cloud, color: 'from-orange-400 to-orange-600' },
  ];

  const categories = ['All', 'Backend', 'Database', 'Cloud'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 transition-all duration-1000 relative overflow-hidden ${
        sectionTheme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-900 to-black' 
          : 'bg-gradient-to-br from-white via-gray-100 to-white'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* Interactive background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0px 0px, ${sectionTheme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'} 0%, transparent 50%),
            linear-gradient(${sectionTheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
            linear-gradient(90deg, ${sectionTheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 25px 25px, 25px 25px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-6 transition-colors duration-1000 ${
            sectionTheme === 'dark'
              ? 'bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent'
          }`}>
            Expertise
          </h2>
          <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-light transition-colors duration-1000 ${
            sectionTheme === 'dark' 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            Technologies that power modern digital experiences
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full transition-all duration-500 font-semibold overflow-hidden group text-sm sm:text-base touch-manipulation min-h-[44px] ${
                activeCategory === category
                  ? sectionTheme === 'dark'
                    ? 'bg-white text-black shadow-2xl scale-105 sm:scale-110'
                    : 'bg-black text-white shadow-2xl scale-105 sm:scale-110'
                  : sectionTheme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
                    : 'bg-black/10 text-black hover:bg-black/20 backdrop-blur-md'
              }`}
            >
              <span className="relative z-10">{category}</span>
              <div className={`absolute inset-0 transform transition-transform duration-300 ${
                activeCategory === category ? 'scale-100' : 'scale-0 group-hover:scale-100'
              } ${
                sectionTheme === 'dark'
                  ? 'bg-gradient-to-r from-white/20 to-white/40'
                  : 'bg-gradient-to-r from-black/20 to-black/40'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Revolutionary Skills Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`relative group transition-all duration-300 touch-manipulation ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Main skill card */}
                <div className={`relative backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 border group-hover:scale-105 group-hover:shadow-2xl overflow-hidden ${
                  sectionTheme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10 border-white/10'
                    : 'bg-black/5 hover:bg-black/10 border-black/10'
                }`}>
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
                  
                  {/* Skill header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
                    <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
                      <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                        <IconComponent className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className={`text-sm sm:text-lg lg:text-xl font-bold truncate transition-colors duration-1000 ${
                          sectionTheme === 'dark' ? 'text-white' : 'text-black'
                        }`}>{skill.name}</h3>
                        <span className={`text-xs sm:text-sm transition-colors duration-1000 ${
                          sectionTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>{skill.category}</span>
                      </div>
                    </div>
                    <div className={`text-lg sm:text-xl lg:text-2xl font-black flex-shrink-0 transition-colors duration-1000 ${
                      sectionTheme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {skill.level}%
                    </div>
                  </div>
                  
                  {/* Revolutionary progress visualization */}
                  <div className="relative">
                    {/* Background track */}
                    <div className={`w-full h-2 sm:h-3 rounded-full overflow-hidden ${
                      sectionTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                    }`}>
                      {/* Animated progress bar */}
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.05}s`
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Floating percentage indicator */}
                    <div 
                      className={`absolute -top-6 sm:-top-8 px-2 sm:px-3 py-1 rounded-full text-xs font-bold transition-all duration-700 shadow-lg ${
                        sectionTheme === 'dark' 
                          ? 'bg-white text-black' 
                          : 'bg-black text-white'
                      }`}
                      style={{
                        left: isVisible ? `${Math.max(skill.level - 5, 0)}%` : '0%',
                        transitionDelay: `${index * 0.05 + 0.2}s`
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                  {/* Magnetic hover effect */}
                  <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-xl ${
                    sectionTheme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                  }`}></div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 scale-110`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
