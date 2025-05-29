
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hey, I'm Alex Chen – Backend Node.js Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
          Building fast, scalable, and secure backend systems that power modern applications
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-gray-400" />
        </div>
      </div>

      {/* Floating code snippet */}
      <div className="absolute bottom-10 right-10 hidden lg:block glass rounded-lg p-4 font-mono text-sm animate-float">
        <div className="text-gray-600">// Building with passion</div>
        <div className="text-black">const developer = new NodeJSDev();</div>
        <div className="text-black">developer.code(passion, skill);</div>
      </div>
    </section>
  );
};

export default HeroSection;
