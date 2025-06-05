import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { getSectionTheme, isTransitioning } = useTheme();

  const sectionTheme = getSectionTheme('experience');

  const experiences = [
    {
      company: "TechFlow Solutions",
      position: "Senior Backend Developer",
      duration: "2023 - Present",
      location: "San Francisco, CA",
      description: "Leading backend development for a fintech platform serving 100k+ users. Architected microservices infrastructure and implemented real-time payment processing systems.",
      achievements: [
        "Reduced API response time by 60% through optimization",
        "Led team of 4 developers in critical system migrations",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ],
      technologies: ["Node.js", "AWS", "PostgreSQL", "Redis", "Docker"]
    },
    {
      company: "StartupHub Inc",
      position: "Backend Developer",
      duration: "2022 - 2023",
      location: "Austin, TX",
      description: "Developed scalable REST APIs for SaaS platform. Built authentication systems, payment integrations, and real-time notification services.",
      achievements: [
        "Built REST APIs handling 1M+ requests daily",
        "Integrated multiple payment gateways (Stripe, PayPal)",
        "Designed database schema for optimal performance"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "AWS"]
    },
    {
      company: "Digital Innovations",
      position: "Junior Backend Developer",
      duration: "2021 - 2022",
      location: "Remote",
      description: "Started career building backend services for e-commerce platform. Learned best practices in API design, database optimization, and cloud deployment.",
      achievements: [
        "Developed 10+ RESTful APIs from scratch",
        "Implemented automated testing increasing coverage to 90%",
        "Collaborated with frontend team on API specifications"
      ],
      technologies: ["Node.js", "Express", "MySQL", "Git", "Postman"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('experience');
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
      id="experience" 
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        sectionTheme === 'dark' 
          ? 'bg-gray-900' 
          : 'bg-white'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* 3D Background Elements with theme awareness */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className={`absolute top-10 right-10 w-24 h-24 transform rotate-45 transition-all duration-1000 ${
          sectionTheme === 'dark'
            ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
            : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10'
        }`} style={{ animation: 'float 20s ease-in-out infinite' }}></div>
        <div className={`absolute top-1/3 left-5 w-16 h-16 rounded-full transition-all duration-1000 ${
          sectionTheme === 'dark'
            ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20'
            : 'bg-gradient-to-br from-green-500/10 to-blue-500/10'
        }`} style={{ animation: 'float 15s ease-in-out infinite reverse' }}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-20 h-20 transform -rotate-12 transition-all duration-1000 ${
          sectionTheme === 'dark'
            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
            : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
        }`} style={{ animation: 'float 18s ease-in-out infinite' }}></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/2 left-0 w-full h-px transform -translate-y-1/2 transition-all duration-1000 ${
          sectionTheme === 'dark'
            ? 'bg-gradient-to-r from-transparent via-blue-500/40 to-transparent'
            : 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent'
        }`} style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000 ${
            sectionTheme === 'dark' 
              ? 'text-white' 
              : 'text-black'
          }`}>
            Experience
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-1000 ${
            sectionTheme === 'dark' 
              ? 'text-gray-300' 
              : 'text-gray-600'
          }`}>
            My journey in backend development and system architecture
          </p>
        </div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full opacity-50"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-0 md:mr-auto md:w-1/2 md:pr-8' : 'md:ml-auto md:w-1/2 md:pl-8'
              } ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-20'}`}
              style={{ animationDelay: `${index * 0.4}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Enhanced timeline dot with pulse effect */}
              <div className={`absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${
                index % 2 === 0 
                  ? 'left-1 md:right-0 md:left-auto md:translate-x-3' 
                  : 'left-1 md:left-0 md:-translate-x-3'
              } top-6  shadow-lg shadow-blue-500/50 transition-all duration-300 ${
                activeCard === index ? 'scale-150' : ''
              }`}>
                <div className="w-full h-full bg-white rounded-full transform scale-50"></div>
              </div>

              <div className="ml-12 md:ml-0">
                <div className={`backdrop-blur-sm rounded-xl p-6 transition-all duration-500 transform border ${
                  sectionTheme === 'dark'
                    ? 'bg-white/5 border-white/10 hover:border-white/20'
                    : 'bg-white/10 border-gray-900/10 hover:border-gray-900/20'
                } ${
                  activeCard === index 
                    ? 'hover:shadow-2xl hover:shadow-blue-500/20 scale-105 rotate-1' 
                    : 'hover:shadow-lg hover:shadow-gray-500/10'
                }`}>
                  <div className="mb-4">
                    <h3 className={`text-xl font-bold transition-all duration-300 ${
                      sectionTheme === 'dark'
                        ? activeCard === index ? 'text-blue-400' : 'text-white'
                        : activeCard === index ? 'text-blue-600' : 'text-black'
                    }`}>{exp.position}</h3>
                    <div className={`text-lg font-semibold transition-all duration-300 ${
                      sectionTheme === 'dark'
                        ? activeCard === index ? 'text-purple-400' : 'text-gray-300'
                        : activeCard === index ? 'text-purple-600' : 'text-gray-700'
                    }`}>{exp.company}</div>
                    <div className={`text-sm flex items-center space-x-4 transition-colors duration-1000 ${
                      sectionTheme === 'dark' 
                        ? 'text-gray-400' 
                        : 'text-gray-500'
                    }`}>
                      <span className="transition-all duration-300 hover:text-blue-600">{exp.duration}</span>
                      <span>•</span>
                      <span className="transition-all duration-300 hover:text-purple-600">{exp.location}</span>
                    </div>
                  </div>

                  <p className={`mb-4 leading-relaxed transition-all duration-300 ${
                    sectionTheme === 'dark'
                      ? 'text-gray-300 hover:text-gray-100'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}>
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className={`font-semibold mb-2 transition-colors duration-1000 ${
                      sectionTheme === 'dark' 
                        ? 'text-white' 
                        : 'text-black'
                    }`}>Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex} 
                          className={`flex items-start space-x-2 transition-all duration-300 ${
                            activeCard === index ? 'animate-slide-in-left' : ''
                          }`}
                          style={{ animationDelay: `${achIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-150"></div>
                          <span className={`text-sm transition-all duration-300 ${
                            sectionTheme === 'dark'
                              ? 'text-gray-300 hover:text-white'
                              : 'text-gray-600 hover:text-black'
                          }`}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 hover:scale-110 ${
                          sectionTheme === 'dark'
                            ? 'bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
                        }`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
