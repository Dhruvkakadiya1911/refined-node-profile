
import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ColorThemePicker from './ColorThemePicker';
import Floating3DShapes from './Floating3DShapes';

const ContactSection = () => {
  const [colorTheme, setColorTheme] = useState<'blue' | 'pink' | 'purple'>('blue');
  const { getSectionTheme, isTransitioning } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  const sectionTheme = getSectionTheme('contact');

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`py-16 md:py-24 lg:py-32 transition-all duration-1000 relative overflow-hidden min-h-screen flex items-center ${
        sectionTheme === 'light' 
          ? 'bg-gradient-to-br from-gray-50 via-white to-blue-50' 
          : 'bg-gradient-to-br from-gray-950 via-black to-purple-950'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      {/* Floating 3D Shapes Background */}
      <Floating3DShapes sectionTheme={sectionTheme} />
      
      {/* Animated mesh background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        sectionTheme === 'light'
          ? 'bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1)_0%,transparent_50%)]'
          : 'bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.2)_0%,transparent_50%)]'
      }`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header Section with 3D Effects */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative inline-block">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 transition-all duration-1000 transform hover:scale-105 ${
              sectionTheme === 'light' 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-pink-400'
            }`}>
              Let's Create Magic
            </h2>
            {/* 3D text shadow effect */}
            <div className={`absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -z-10 transform translate-x-2 translate-y-2 ${
              sectionTheme === 'light' ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Let's Create Magic
            </div>
          </div>
          
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 transition-all duration-1000 transform hover:scale-105 ${
            sectionTheme === 'light' 
              ? 'text-gray-600' 
              : 'text-gray-300'
          }`}>
            Ready to bring your wildest ideas to life? Let's build something extraordinary together.
          </p>
          
          {/* Enhanced Color theme picker with 3D effects */}
          {/* <div className="transform hover:scale-110 transition-all duration-300">
            <ColorThemePicker 
              currentTheme={colorTheme}
              onThemeChange={setColorTheme}
              sectionTheme={sectionTheme}
            />
          </div> */}
        </div>

        {/* Main Content Grid with 3D Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Info Card with 3D Effects */}
          <div className={`relative group transform hover:scale-105 transition-all duration-500 ${
            sectionTheme === 'light'
              ? 'hover:shadow-2xl hover:shadow-blue-200/50'
              : 'hover:shadow-2xl hover:shadow-purple-500/30'
          }`}>
            <div className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-blue-200 to-purple-200 opacity-30 group-hover:opacity-50'
                : 'bg-gradient-to-r from-cyan-500 to-pink-500 opacity-20 group-hover:opacity-40'
            }`} />
            <div className="relative">
              <ContactInfo sectionTheme={sectionTheme} />
            </div>
          </div>
          
          {/* Contact Form Card with 3D Effects */}
          <div className={`relative group transform hover:scale-105 transition-all duration-500 ${
            sectionTheme === 'light'
              ? 'hover:shadow-2xl hover:shadow-purple-200/50'
              : 'hover:shadow-2xl hover:shadow-cyan-500/30'
          }`}>
            <div className={`absolute inset-0 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-purple-200 to-pink-200 opacity-30 group-hover:opacity-50'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 group-hover:opacity-40'
            }`} />
            <div className="relative">
              <ContactForm sectionTheme={sectionTheme} />
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
         <div className="mt-12 sm:mt-16 md:mt-24 text-center">
          <div
            className={`inline-flex items-center space-x-4 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-lg border transition-all duration-1000 hover:scale-105 hover:shadow-lg ${
              sectionTheme === 'light'
                ? 'bg-white/20 border-gray-200/50 text-gray-700 hover:shadow-blue-200/50'
                : 'bg-black/20 border-gray-700/50 text-gray-300 hover:shadow-purple-500/30'
            }`}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium text-sm sm:text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 transition-all duration-500">
              Available for exciting projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
