
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [apiCount, setApiCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
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
    if (isVisible) {
      // Animate counters
      const experienceTimer = setInterval(() => {
        setExperienceCount(prev => {
          if (prev < 2.5) return prev + 0.1;
          return 2.5;
        });
      }, 50);

      const projectTimer = setInterval(() => {
        setProjectCount(prev => {
          if (prev < 15) return prev + 1;
          return 15;
        });
      }, 100);

      const apiTimer = setInterval(() => {
        setApiCount(prev => {
          if (prev < 25) return prev + 1;
          return 25;
        });
      }, 80);

      return () => {
        clearInterval(experienceTimer);
        clearInterval(projectTimer);
        clearInterval(apiTimer);
      };
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate Node.js backend developer with 2.5 years of experience 
              building robust, scalable systems. I specialize in creating efficient APIs, 
              designing database architectures, and implementing secure authentication systems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My expertise spans across modern JavaScript ecosystem, cloud technologies, 
              and DevOps practices. I'm driven by clean code principles and always eager 
              to learn new technologies that can solve complex problems.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">
                  {experienceCount.toFixed(1)}+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">
                  {Math.floor(projectCount)}+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">
                  {Math.floor(apiCount)}+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  APIs Created
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-black">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-black">API Development</h4>
                      <p className="text-gray-600">RESTful APIs with Express.js, authentication & authorization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-black">Database Design</h4>
                      <p className="text-gray-600">MongoDB, PostgreSQL, Redis for optimal data architecture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-black">Cloud Deployment</h4>
                      <p className="text-gray-600">AWS, Docker containerization, CI/CD pipelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-black">Performance Optimization</h4>
                      <p className="text-gray-600">Caching, query optimization, scalable architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
