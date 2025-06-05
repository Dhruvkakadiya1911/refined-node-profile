
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, X, Zap, Sparkles, Layers } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FloatingElements from './FloatingElements';

const ITEMS_PER_PAGE = 6;

interface Project {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { theme, isTransitioning } = useTheme();

  // In dark theme: Projects should be white
  // In light theme: Projects should be black
  const sectionTheme = theme === 'dark' ? 'light' : 'dark';

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce API Platform',
      description: 'Scalable REST API for e-commerce platform handling 10k+ daily transactions with payment processing, inventory management, and real-time notifications.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'Socket.io'],
      features: ['JWT Authentication', 'Payment Processing', 'Real-time Updates', 'Rate Limiting'],
      color: 'from-slate-100 to-slate-200',
      icon: Zap,
    },
    {
      id: '2',
      title: 'Microservices Architecture',
      description: 'Designed and implemented microservices architecture for a SaaS application with service discovery, load balancing, and distributed logging.',
      technologies: ['Node.js', 'Docker', 'AWS', 'PostgreSQL', 'RabbitMQ', 'Nginx'],
      features: ['Service Discovery', 'Load Balancing', 'Message Queues', 'Health Monitoring'],
      color: 'from-blue-50 to-blue-100',
      icon: Layers,
    },
    {
      id: '3',
      title: 'Real-time Analytics Dashboard',
      description: 'Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.',
      technologies: ['Node.js', 'WebSocket', 'ClickHouse', 'Redis', 'AWS Lambda'],
      features: ['Real-time Processing', 'Data Aggregation', 'Scalable WebSockets', 'Event Streaming'],
      impact: 'Processes 1M+ events daily with sub-second latency',
      color: 'from-green-50 to-green-100',
      icon: Sparkles,
    },
    {
      id: '4',
      title: 'AI-Powered Data Pipeline',
      description: 'Machine learning pipeline for processing and analyzing large datasets with automated feature extraction and model training.',
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'Docker'],
      features: ['Automated ML', 'Feature Engineering', 'Model Deployment', 'Real-time Inference'],
      color: 'from-orange-50 to-orange-100',
      icon: Zap,
    },
    {
      id: '5',
      title: 'Blockchain DeFi Protocol',
      description: 'Decentralized finance protocol with smart contracts for lending, borrowing, and yield farming on Ethereum blockchain.',
      technologies: ['Solidity', 'Web3.js', 'Hardhat', 'OpenZeppelin', 'IPFS'],
      features: ['Smart Contracts', 'Yield Farming', 'Liquidity Pools', 'Governance Token'],
      color: 'from-indigo-50 to-indigo-100',
      icon: Layers,
    },
  ];

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoading(false);
      }, 300);
    }
  };

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
      ref={sectionRef}
      id="projects"
      className={`relative min-h-screen py-20 overflow-hidden transition-all duration-1000 ${
        sectionTheme === 'light' 
          ? 'bg-gradient-to-br from-slate-50 via-white to-slate-100' 
          : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* Floating Elements Background */}
      <FloatingElements density={25} sectionTheme={sectionTheme} />

      {/* Interactive Mouse Trail */}
      <div
        className={`absolute w-32 h-32 rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-r from-blue-500/5 to-purple-500/5'
            : 'bg-gradient-to-r from-blue-500/15 to-purple-500/15'
        }`}
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="relative inline-block mb-6">
            <h2 className={`text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r bg-clip-text text-transparent relative transition-all duration-1000 ${
              sectionTheme === 'light'
                ? 'from-gray-900 via-blue-900 to-purple-900'
                : 'from-gray-100 via-blue-100 to-purple-100'
            }`}>
              Featured Projects
              <div className={`absolute -inset-1 rounded-lg blur-lg opacity-0 animate-pulse transition-all duration-1000 ${
                sectionTheme === 'light'
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                  : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
              }`} />
            </h2>
            <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce transition-all duration-1000 ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                : 'bg-gradient-to-r from-yellow-500 to-orange-600'
            }`} style={{ animationDelay: '0.5s' }} />
            <div className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full animate-bounce transition-all duration-1000 ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-green-400 to-blue-500'
                : 'bg-gradient-to-r from-green-500 to-blue-600'
            }`} style={{ animationDelay: '1s' }} />
          </div>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-1000 ${
            sectionTheme === 'light' 
              ? 'text-gray-600' 
              : 'text-gray-400'
          }`}>
            Innovative solutions crafted with cutting-edge technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`group relative cursor-pointer transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => setHoveredProject(Number(project.id))}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                {/* Card Container */}
                <div className={`relative h-full min-h-[400px] rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1 shadow-xl group-hover:shadow-2xl ${
                  sectionTheme === 'light'
                    ? 'bg-white'
                    : 'bg-gray-800'
                }`}>
                  {/* Light Gradient Background */}
                  <div className={`absolute inset-0 transition-opacity duration-1000 ${
                    sectionTheme === 'light'
                      ? `bg-gradient-to-br ${project.color}`
                      : `bg-gradient-to-br ${project.color} opacity-20`
                  }`} />
                  
                  {/* Glass Overlay */}
                  <div className={`absolute inset-0 backdrop-blur-sm transition-all duration-1000 ${
                    sectionTheme === 'light'
                      ? 'bg-white/50'
                      : 'bg-gray-900/50'
                  }`} />
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${
                    sectionTheme === 'light'
                      ? `${project.color}`
                      : `${project.color} group-hover:opacity-10`
                  }`} />
                  
                  {/* Content */}
                  <div className={`relative h-full p-8 flex flex-col justify-between transition-colors duration-1000 ${
                    sectionTheme === 'light'
                      ? 'text-gray-800'
                      : 'text-gray-200'
                  }`}>
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 shadow-lg rounded-2xl backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                          sectionTheme === 'light'
                            ? 'bg-white/60'
                            : 'bg-gray-700/60'
                        }`}>
                          <IconComponent className={`w-8 h-8 transition-colors duration-1000 ${
                            sectionTheme === 'light'
                              ? 'text-gray-700'
                              : 'text-gray-300'
                          }`} />
                        </div>
                        <div className={`w-12 h-12 shadow-md rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:rotate-180 ${
                          sectionTheme === 'light'
                            ? 'bg-white/40'
                            : 'bg-gray-700/40'
                        }`}>
                          <ArrowRight className={`w-6 h-6 transition-colors duration-1000 ${
                            sectionTheme === 'light'
                              ? 'text-gray-600'
                              : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:translate-x-2 ${
                        sectionTheme === 'light'
                          ? 'text-gray-900'
                          : 'text-white'
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 transform transition-all duration-300 group-hover:translate-x-1 ${
                        sectionTheme === 'light'
                          ? 'text-gray-700'
                          : 'text-gray-300'
                      }`}>
                        {project.description.substring(0, 120)}...
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-300 ${
                            sectionTheme === 'light'
                              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
            );
          })}
        </div>

        {/* Load More Button */}
        {currentPage < totalPages && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`relative px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              }`}
            >
              {isLoading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {isModalVisible && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden transition-colors duration-1000 ${
            sectionTheme === 'light'
              ? 'bg-white'
              : 'bg-gray-800'
          }`}>
            <button
              onClick={handleCloseModal}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                sectionTheme === 'light'
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-8">
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-1000 ${
                sectionTheme === 'light'
                  ? 'text-gray-900'
                  : 'text-white'
              }`}>{selectedProject.title}</h3>
              <p className={`mb-6 transition-colors duration-1000 ${
                sectionTheme === 'light'
                  ? 'text-gray-700'
                  : 'text-gray-300'
              }`}>{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className={`font-semibold mb-2 transition-colors duration-1000 ${
                  sectionTheme === 'light'
                    ? 'text-gray-900'
                    : 'text-white'
                }`}>Key Features:</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className={`flex items-center transition-colors duration-1000 ${
                      sectionTheme === 'light'
                        ? 'text-gray-700'
                        : 'text-gray-300'
                    }`}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.impact && (
                <div className="mb-6">
                  <h4 className={`font-semibold mb-2 transition-colors duration-1000 ${
                    sectionTheme === 'light'
                      ? 'text-gray-900'
                      : 'text-white'
                  }`}>Impact:</h4>
                  <p className={`transition-colors duration-1000 ${
                    sectionTheme === 'light'
                      ? 'text-gray-700'
                      : 'text-gray-300'
                  }`}>{selectedProject.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 text-sm font-mono rounded-full transition-colors duration-1000 ${
                      sectionTheme === 'light'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
