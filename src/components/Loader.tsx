
import { useEffect, useState } from 'react';
import { SiPostman, SiMongodb, SiNodedotjs, SiDocker, SiExpress, SiRedis, SiMysql } from 'react-icons/si';


const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');

  const loadingSteps = [
    'Initializing backend services...',
    'Connecting to database...',
    'All systems online ✅'
  ];

  useEffect(() => {
    let charIndex = 0;
    let currentMessage = loadingSteps[currentStep];

    const interval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setTypedText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        if (currentStep < loadingSteps.length - 1) {
          setTimeout(() => {
            setCurrentStep(prev => prev + 1);
            setTypedText('');
          }, 500); // Delay between steps
        } else {
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [currentStep, onComplete]);

  // Total number of characters across all steps
  const totalCharacters = loadingSteps.reduce((acc, step) => acc + step.length, 0);

  // Characters typed so far
  const typedCharacters = loadingSteps
    .slice(0, currentStep)
    .reduce((acc, step) => acc + step.length, 0) + typedText.length;

  // Progress as a percentage
  const progressPercent = (typedCharacters / totalCharacters) * 100;

  const backendIcons = [
    { icon: SiPostman, color: '#FF6C37' },
    { icon: SiMongodb, color: '#4DB33D' },
    { icon: SiNodedotjs, color: '#339933' },
    { icon: SiDocker, color: '#0db7ed' },
    { icon: SiExpress, color: '#ffffff' },
    { icon: SiRedis, color: '#D82C20' },
    { icon: SiMysql, color: '#00758F' }
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Server nodes animation */}
      {/* <div className="absolute inset-0 overflow-hidden">
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
      </div> */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backendIcons.map((item, i) => {
          const Icon = item.icon;
          const size = 30 + (i % 3) * 10; // Randomize size a bit
          return (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + (i % 2) * 80}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <Icon style={{ color: item.color, fontSize: `${size}px` }} />
            </div>
          );
        })}
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
      <div className="relative z-10 bg-black border border-white/30 rounded-lg p-6 w-[330px] mx-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
            className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
