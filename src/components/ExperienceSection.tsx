
import { useState, useEffect } from 'react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in backend development and system architecture
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-0 md:mr-auto md:w-1/2 md:pr-8' : 'md:ml-auto md:w-1/2 md:pl-8'
              } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute w-4 h-4 bg-black rounded-full ${
                index % 2 === 0 
                  ? 'left-2 md:right-0 md:left-auto md:translate-x-2' 
                  : 'left-2 md:left-0 md:-translate-x-2'
              } top-6`}></div>

              <div className="ml-12 md:ml-0">
                <div className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-black">{exp.position}</h3>
                    <div className="text-lg font-semibold text-gray-700">{exp.company}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-mono"
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
