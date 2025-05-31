
import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  
  const loadingSteps = [
    'Initializing backend services...',
    'Connecting to database...',
    'Loading API endpoints...',
    'Deployment ready!'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Updated to 3 seconds

    // Typing animation
    let typeIndex = 0;
    const typeTimer = setInterval(() => {
      if (typeIndex < loadingSteps[currentStep].length) {
        setTypedText(loadingSteps[currentStep].substring(0, typeIndex + 1));
        typeIndex++;
      } else {
        setTimeout(() => {
          if (currentStep < loadingSteps.length - 1) {
            setCurrentStep(prev => prev + 1);
            setTypedText('');
            typeIndex = 0;
          }
        }, 500); // Increased back to 500ms for better readability
      }
    }, 60); // Slightly slower typing for better effect

    return () => {
      clearTimeout(timer);
      clearInterval(typeTimer);
    };
  }, [currentStep, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Server nodes animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 border border-white/30 rounded-sm"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + (i % 2) * 80}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Data flow lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '0%',
              right: '0%',
              animation: `slide-right ${2 + i * 0.3}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Terminal window */}
      <div className="relative z-10 bg-black border border-white/30 rounded-lg p-6 max-w-md mx-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
          <div className="w-3 h-3 bg-white/40 rounded-full"></div>
          <div className="w-3 h-3 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="font-mono text-sm text-white">
          <div className="text-white/60">$ npm start</div>
          <div className="mt-2">
            {typedText}
            <span className="animate-ping">|</span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / loadingSteps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
