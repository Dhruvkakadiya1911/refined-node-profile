
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, X, Zap, Sparkles, Layers } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  impact?: string;
  color: string;
  icon: any;
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

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce API Platform',
      description: 'Scalable REST API for e-commerce platform handling 10k+ daily transactions with payment processing, inventory management, and real-time notifications.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'Socket.io'],
      features: ['JWT Authentication', 'Payment Processing', 'Real-time Updates', 'Rate Limiting'],
      color: 'from-purple-500 to-pink-500',
      icon: Zap,
    },
    {
      id: 2,
      title: 'Microservices Architecture',
      description: 'Designed and implemented microservices architecture for a SaaS application with service discovery, load balancing, and distributed logging.',
      technologies: ['Node.js', 'Docker', 'AWS', 'PostgreSQL', 'RabbitMQ', 'Nginx'],
      features: ['Service Discovery', 'Load Balancing', 'Message Queues', 'Health Monitoring'],
      color: 'from-blue-500 to-cyan-500',
      icon: Layers,
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Backend system for real-time analytics dashboard processing millions of events daily with WebSocket connections and data aggregation.',
      technologies: ['Node.js', 'WebSocket', 'ClickHouse', 'Redis', 'AWS Lambda'],
      features: ['Real-time Processing', 'Data Aggregation', 'Scalable WebSockets', 'Event Streaming'],
      impact: 'Processes 1M+ events daily with sub-second latency',
      color: 'from-green-500 to-emerald-500',
      icon: Sparkles,
    },
    {
      id: 4,
      title: 'AI-Powered Data Pipeline',
      description: 'Machine learning pipeline for processing and analyzing large datasets with automated feature extraction and model training.',
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'Docker'],
      features: ['Automated ML', 'Feature Engineering', 'Model Deployment', 'Real-time Inference'],
      color: 'from-orange-500 to-red-500',
      icon: Zap,
    },
    {
      id: 5,
      title: 'Blockchain DeFi Protocol',
      description: 'Decentralized finance protocol with smart contracts for lending, borrowing, and yield farming on Ethereum blockchain.',
      technologies: ['Solidity', 'Web3.js', 'Hardhat', 'OpenZeppelin', 'IPFS'],
      features: ['Smart Contracts', 'Yield Farming', 'Liquidity Pools', 'Governance Token'],
      color: 'from-indigo-500 to-purple-500',
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

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Interactive Mouse Trail */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent relative">
              Featured Projects
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 animate-pulse" />
            </h2>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(project)}
              >
                {/* Card Container */}
                <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                  
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`} />
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between text-white">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:rotate-180">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 transform transition-all duration-300 group-hover:translate-x-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/90 text-sm leading-relaxed mb-6 transform transition-all duration-300 group-hover:translate-x-1">
                        {project.description.substring(0, 120)}...
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:bg-white/30"
                            style={{ transitionDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Impact Badge */}
                      {project.impact && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full text-xs font-medium">
                          <Sparkles className="w-3 h-3" />
                          {project.impact}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                    <div className="w-full h-full rounded-3xl bg-transparent" />
                  </div>
                </div>

                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl transform translate-y-4 translate-x-4 -z-10 transition-all duration-500 group-hover:translate-y-8 group-hover:translate-x-8 blur-lg" />
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {currentPage < totalPages && (
          <div className="mt-16 text-center">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Load More Projects
                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-500 ${
            isModalVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-500 shadow-2xl ${
              isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`relative h-48 bg-gradient-to-br ${selectedProject.color} rounded-t-3xl overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20" />
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="absolute bottom-6 left-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <selectedProject.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                    <p className="text-white/90">Advanced Backend System</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Features */}
                <div>
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2 group"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-rotate-1 cursor-default"
                        style={{ transitionDelay: `${index * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <Button className="flex-1 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105 group">
                  <Github className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                  View Source Code
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105 group">
                  Live Demo
                  <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
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
