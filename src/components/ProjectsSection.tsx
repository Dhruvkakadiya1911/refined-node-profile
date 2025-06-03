
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
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
              className="glass rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl touch-manipulation"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-black mb-3 text-sm sm:text-base">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-dark rounded-lg p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1">Impact:</div>
                    <div className="text-sm sm:text-base text-black font-medium">{project.impact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white touch-manipulation min-h-[44px]"
                      size="sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button className="bg-black text-white hover:bg-gray-800 touch-manipulation min-h-[44px]" size="sm">
                      Live Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`glass rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-105' : ''
                  }`}>
                    <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-500 ml-2 sm:ml-4 text-xs">server.js</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm overflow-x-auto">
                      <div className="text-gray-600">// {project.title}</div>
                      <div className="text-black">const app = express();</div>
                      <div className="text-black">app.use(middleware);</div>
                      <div className="text-gray-600">// Built with {project.technologies[0]}</div>
                      <div className="text-black">app.listen(3000);</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white touch-manipulation min-h-[44px] w-full sm:w-auto"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
