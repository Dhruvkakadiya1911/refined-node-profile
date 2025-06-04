
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce API Platform",
      description: "Scalable REST API for e-commerce platform handling 10k+ daily transactions with payment processing, inventory management, and real-time notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Stripe", "Socket.io"],
      features: ["JWT Authentication", "Payment Processing", "Real-time Updates", "Rate Limiting"],
      impact: "Reduced response time by 40% and increased user engagement by 25%"
    },
    {
      id: 2,
      title: "Microservices Architecture",
      description: "Designed and implemented microservices architecture for a SaaS application with service discovery, load balancing, and distributed logging.",
      technologies: ["Node.js", "Docker", "AWS", "PostgreSQL", "RabbitMQ", "Nginx"],
      features: ["Service Discovery", "Load Balancing", "Message Queues", "Health Monitoring"],
      impact: "Improved system reliability to 99.9% uptime and 50% faster deployment"
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description: "Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.",
      technologies: ["Node.js", "WebSocket", "ClickHouse", "Redis", "AWS Lambda"],
      features: ["Real-time Processing", "Data Aggregation", "Scalable WebSockets", "Event Streaming"],
      impact: "Processes 1M+ events daily with sub-second latency"
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

    const element = document.getElementById('projects');
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50 relative overflow-hidden">
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating cubes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 transform rotate-12 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform -rotate-12" style={{ animation: 'float 15s ease-in-out infinite' }}></div>
        
        {/* Floating spheres effect */}
        <div className="absolute top-40 right-10 w-8 h-8 bg-gradient-radial from-orange-500/30 to-red-500/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-40 w-6 h-6 bg-gradient-radial from-cyan-500/30 to-blue-500/30 rounded-full" style={{ animation: 'float 12s ease-in-out infinite, pulse 4s ease-in-out infinite' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 text-black">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Backend systems that solve real-world problems at scale
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-700 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 touch-manipulation ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`space-y-4 sm:space-y-6 transform transition-all duration-500 ${
                  hoveredProject === project.id ? 'translate-x-2' : ''
                } ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 transition-colors duration-300 hover:text-blue-600">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="transform transition-all duration-500 hover:translate-x-1">
                    <h4 className="font-semibold text-black mb-3 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div 
                          key={feature} 
                          className={`flex items-center space-x-2 transition-all duration-300 ${
                            hoveredProject === project.id ? 'animate-slide-in-left' : ''
                          }`}
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 transition-all duration-300 hover:bg-blue-600 hover:scale-150"></div>
                          <span className="text-xs sm:text-sm text-gray-600 transition-colors duration-300 hover:text-black">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`glass-dark rounded-lg p-3 sm:p-4 transform transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-105 shadow-lg' : ''
                  }`}>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Impact:</div>
                    <div className="text-sm sm:text-base text-black font-medium">{project.impact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono transform transition-all duration-300 hover:scale-110 hover:bg-blue-600 ${
                          hoveredProject === project.id ? 'animate-bounce' : ''
                        }`}
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white touch-manipulation min-h-[44px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      size="sm"
                    >
                      <Github className="w-4 h-4 mr-2 transition-transform duration-300 hover:rotate-12" />
                      Code
                    </Button>
                    <Button className="bg-black text-white hover:bg-gray-800 touch-manipulation min-h-[44px] transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20" size="sm">
                      Live Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`glass rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm transition-all duration-700 transform ${
                    hoveredProject === project.id ? 'scale-110 rotate-1 shadow-2xl shadow-blue-500/20' : ''
                  }`}>
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-gray-500 ml-2 sm:ml-4 text-xs">server.js</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm overflow-x-auto">
                      <div className="text-gray-600 transition-all duration-300 hover:text-blue-600">// {project.title}</div>
                      <div className="text-black transition-all duration-300 hover:text-green-600">const app = express();</div>
                      <div className="text-black transition-all duration-300 hover:text-purple-600">app.use(middleware);</div>
                      <div className="text-gray-600 transition-all duration-300 hover:text-blue-600">// Built with {project.technologies[0]}</div>
                      <div className="text-black transition-all duration-300 hover:text-red-600">app.listen(3000);</div>
                    </div>
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

export default ProjectsSection;
