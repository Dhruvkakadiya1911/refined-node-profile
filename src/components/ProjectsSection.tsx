import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, X } from 'lucide-react';

const ITEMS_PER_PAGE = 6; // Show 6 projects (2 rows of 3) per page

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  impact?: string;
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce API Platform',
      description:
        'Scalable REST API for e-commerce platform handling 10k+ daily transactions with payment processing, inventory management, and real-time notifications.',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'Redis',
        'Stripe',
        'Socket.io',
      ],
      features: [
        'JWT Authentication',
        'Payment Processing',
        'Real-time Updates',
        'Rate Limiting',
      ],
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      description:
        'Designed and implemented microservices architecture for a SaaS application with service discovery, load balancing, and distributed logging.',
      technologies: [
        'Node.js',
        'Docker',
        'AWS',
        'PostgreSQL',
        'RabbitMQ',
        'Nginx',
      ],
      features: [
        'Service Discovery',
        'Load Balancing',
        'Message Queues',
        'Health Monitoring',
      ],
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description:
        'Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.',
      technologies: [
        'Node.js',
        'WebSocket',
        'ClickHouse',
        'Redis',
        'AWS Lambda',
      ],
      features: [
        'Real-time Processing',
        'Data Aggregation',
        'Scalable WebSockets',
        'Event Streaming',
      ],
      impact: 'Processes 1M+ events daily with sub-second latency',
    },
    {
      id: 4,
      title: 'Real-time Analytics Dashboard',
      description:
        'Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.',
      technologies: [
        'Node.js',
        'WebSocket',
        'ClickHouse',
        'Redis',
        'AWS Lambda',
      ],
      features: [
        'Real-time Processing',
        'Data Aggregation',
        'Scalable WebSockets',
        'Event Streaming',
      ],
    },
    {
      id: 5,
      title: 'Real-time Analytics Dashboard',
      description:
        'Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.',
      technologies: [
        'Node.js',
        'WebSocket',
        'ClickHouse',
        'Redis',
        'AWS Lambda',
      ],
      features: [
        'Real-time Processing',
        'Data Aggregation',
        'Scalable WebSockets',
        'Event Streaming',
      ],
    },

  ];

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
      }, 300);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-45 animate-spin"
          style={{ animationDuration: '20s' }}
        ></div>
        <div
          className="absolute top-60 right-20 w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 transform rotate-12 animate-pulse"
          style={{ animationDuration: '8s' }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform -rotate-12"
          style={{ animation: 'float 15s ease-in-out infinite' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 text-black">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Backend systems that solve real-world problems at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                willChange: 'transform, opacity'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 transition-colors duration-300 group-hover:text-blue-600">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 hover:scale-110 hover:bg-blue-600 transform hover:rotate-1"
                      style={{ transitionDelay: `${techIndex * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono transition-all duration-300 hover:scale-110 hover:bg-blue-600">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentPage < totalPages && (
          <div className="mt-12 text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
            >
              <span className="relative z-10">{isLoading ? 'Loading...' : 'Load More Projects'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </Button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isModalVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 ${
              isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors group"
            >
              <X className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90" />
            </button>
            
            <div className="p-8">
              <div className="relative mb-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75"></div>
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <div 
                      key={feature} 
                      className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, index: number) => (
                    <span
                      key={tech}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm font-mono transition-all duration-300 hover:scale-110 hover:bg-blue-600 transform hover:rotate-1"
                      style={{ transitionDelay: `${index * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  className="bg-black text-white hover:bg-gray-800 min-h-[44px] transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  size="sm"
                >
                  <Github className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  View Code
                </Button>
                <Button
                  className="bg-black text-white hover:bg-gray-800 min-h-[44px] transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  size="sm"
                >
                  Live Demo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
