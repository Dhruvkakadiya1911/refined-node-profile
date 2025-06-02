
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cloud, Server, Zap, Globe } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    // { name: 'Docker', level: 85, category: 'DevOps', icon: Globe, color: 'from-cyan-400 to-cyan-600' },
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
      className="py-32 bg-gradient-to-br from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white transition-all duration-1000 relative overflow-hidden"
    >
      {/* Interactive background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0px 0px, rgba(255,255,255,0.3) 0%, transparent 50%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 50px 50px, 50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-white dark:from-black dark:via-gray-700 dark:to-black bg-clip-text text-transparent">
            Expertise
          </h2>
          <p className="text-2xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto font-light">
            Technologies that power modern digital experiences
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-8 py-4 rounded-full transition-all duration-500 font-semibold overflow-hidden group ${
                activeCategory === category
                  ? 'bg-white text-black dark:bg-black dark:text-white shadow-2xl scale-110'
                  : 'bg-white/10 dark:bg-black/10 text-white dark:text-black hover:bg-white/20 dark:hover:bg-black/20 backdrop-blur-md'
              }`}
            >
              <span className="relative z-10">{category}</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-white/40 dark:from-black/20 dark:to-black/40 transform transition-transform duration-300 ${
                activeCategory === category ? 'scale-100' : 'scale-0 group-hover:scale-100'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Revolutionary Skills Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Main skill card */}
                <div className="relative bg-white/5 dark:bg-black/5 backdrop-blur-2xl rounded-3xl p-8 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-500 border border-white/10 dark:border-black/10 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden">
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Skill header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-black">{skill.name}</h3>
                        <span className="text-sm text-gray-400 dark:text-gray-600">{skill.category}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-white dark:text-black">
                      {skill.level}%
                    </div>
                  </div>
                  
                  {/* Revolutionary progress visualization */}
                  <div className="relative">
                    {/* Background track */}
                    <div className="w-full h-3 bg-white/10 dark:bg-black/10 rounded-full overflow-hidden">
                      {/* Animated progress bar */}
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1}s`
                        }}
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Floating percentage indicator */}
                    <div 
                      className="absolute -top-8 bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded-full text-xs font-bold transition-all duration-1500 shadow-lg"
                      style={{
                        left: isVisible ? `${skill.level - 5}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                  {/* Magnetic hover effect */}
                  <div className="absolute inset-0 bg-white/5 dark:bg-black/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 scale-110`}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Tech Stack Visualization */}
        {/* <div className="mt-24 text-center">
          <h3 className="text-4xl font-black mb-12 text-white dark:text-black">Core Arsenal</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className={`relative group bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl px-8 py-4 font-mono text-lg font-bold text-white dark:text-black transition-all duration-500 hover:scale-110 hover:bg-white/20 dark:hover:bg-black/20 cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
