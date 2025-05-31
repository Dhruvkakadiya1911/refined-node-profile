
import { useEffect, useState } from 'react';
import { Terminal, Database, Server } from 'lucide-react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const codeLines = [
    'npm install backend-magic',
    'Connecting to database...',
    'Initializing server...',
    'Ready to code!'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (currentStep < codeLines.length) {
      const currentLine = codeLines[currentStep];
      const typingInterval = setInterval(() => {
        setTypedText(prev => {
          if (prev.length < currentLine.length) {
            return currentLine.slice(0, prev.length + 1);
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setCurrentStep(prev => prev + 1);
              setTypedText('');
            }, 500);
            return prev;
          }
        });
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [currentStep]);

  if (isComplete) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-out">
        <div className="text-white text-2xl font-mono opacity-0">Loading complete...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-white animate-pulse"
            style={{
              left: `${(i + 1) * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-white animate-pulse"
            style={{
              top: `${(i + 1) * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Floating icons */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="animate-float">
            <Terminal className="w-12 h-12 text-white opacity-60" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <Database className="w-12 h-12 text-white opacity-60" />
          </div>
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <Server className="w-12 h-12 text-white opacity-60" />
          </div>
        </div>

        {/* Terminal window */}
        <div className="bg-gray-900 border border-gray-600 rounded-lg p-6 font-mono text-left max-w-lg mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-400 ml-4">backend-terminal</span>
          </div>
          
          <div className="space-y-2">
            {codeLines.slice(0, currentStep).map((line, index) => (
              <div key={index} className="text-green-400">
                <span className="text-gray-500">$</span> {line}
              </div>
            ))}
            {currentStep < codeLines.length && (
              <div className="text-green-400">
                <span className="text-gray-500">$</span> {typedText}
                <span className="animate-ping text-white">|</span>
              </div>
            )}
          </div>
        </div>

        {/* Loading progress */}
        <div className="mt-8 max-w-xs mx-auto">
          <div className="bg-gray-800 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / codeLines.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
