
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Framework' },
    { name: 'JavaScript', level: 90, category: 'Language' },
    { name: 'TypeScript', level: 80, category: 'Language' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Redis', level: 70, category: 'Cache' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Docker', level: 80, category: 'DevOps' },
    { name: 'Git', level: 85, category: 'Tools' },
  ];

  const categories = ['All', 'Backend', 'Database', 'Cloud', 'Tools'];
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

    const element = document.getElementById('skills');
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies I use to build robust backend systems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-black">{skill.name}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {skill.category}
                </span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 mt-2 block text-right">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-black">Core Tech Stack</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((tech, index) => (
              <div
                key={tech}
                className={`glass rounded-lg px-6 py-3 font-mono text-sm transition-all duration-500 hover:scale-110 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
