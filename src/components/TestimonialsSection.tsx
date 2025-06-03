
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Dhruv's backend development skills are exceptional. He delivered a robust API system that handles our complex business logic flawlessly. His attention to performance optimization reduced our response times by 60%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer at StartupHub",
      company: "StartupHub Inc",
      content: "Working with Dhruv was a game-changer for our project. His expertise in Node.js and database optimization helped us scale from 100 to 100k+ users seamlessly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at Digital Innovations",
      company: "Digital Innovations",
      content: "Dhruv consistently delivered high-quality code ahead of deadlines. His proactive communication and technical insights made our development process smooth and efficient.",
      rating: 5,
      avatar: "ER"
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

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 xs:py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-2 xs:px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 text-black dark:text-white transition-colors duration-300">
            What Clients Say
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300 px-2">
            Testimonials from clients and colleagues I've worked with
          </p>
        </div>

        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="glass dark:glass-dark rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 transition-all duration-300">
            <div className="text-center mb-6 xs:mb-8">
              <div className="flex justify-center mb-3 xs:mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 xs:w-5 h-4 xs:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-4 xs:mb-6 transition-colors duration-300">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </div>

            <div className="flex items-center justify-center space-x-3 xs:space-x-4">
              <div className="w-10 xs:w-12 h-10 xs:h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold transition-colors duration-300 text-sm xs:text-base">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-center">
                <div className="font-semibold text-black dark:text-white transition-colors duration-300 text-sm xs:text-base">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-2xs xs:text-xs text-gray-500 dark:text-gray-500 transition-colors duration-300">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-6 xs:mt-8 space-x-3 xs:space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-1.5 xs:p-2 rounded-full glass dark:glass-dark hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 touch-manipulation min-h-[40px] xs:min-h-[44px] min-w-[40px] xs:min-w-[44px]"
            >
              <ChevronLeft className="w-4 xs:w-5 h-4 xs:h-5 text-black dark:text-white" />
            </button>

            <div className="flex space-x-1 xs:space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full transition-all duration-300 touch-manipulation min-h-[32px] min-w-[32px] flex items-center justify-center ${
                    index === currentIndex 
                      ? 'bg-black dark:bg-white' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-1.5 xs:p-2 rounded-full glass dark:glass-dark hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 touch-manipulation min-h-[40px] xs:min-h-[44px] min-w-[40px] xs:min-w-[44px]"
            >
              <ChevronRight className="w-4 xs:w-5 h-4 xs:h-5 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
