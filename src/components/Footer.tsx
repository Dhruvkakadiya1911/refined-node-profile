
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { getSectionTheme } = useTheme();
  const sectionTheme = getSectionTheme('footer');

  return (
    <footer className={`py-8 sm:py-12 lg:py-16 transition-colors duration-1000 ${
      sectionTheme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Brand section */}
          <div className="text-center lg:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Dhruv<span className={`transition-colors duration-1000 ${
                sectionTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>Kakadiya</span>
            </div>
            <p className={`text-sm sm:text-base lg:text-lg transition-colors duration-1000 ${
              sectionTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Backend Node.js Developer
            </p>
          </div>

          {/* Tech info */}
          <div className="text-center lg:text-right">
            <p className={`text-sm sm:text-base mb-2 transition-colors duration-1000 ${
              sectionTheme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Made with ❤️ using Node.js & React
            </p>
            <p className={`text-xs sm:text-sm transition-colors duration-1000 ${
              sectionTheme === 'light' ? 'text-gray-500' : 'text-gray-500'
            }`}>
              © 2024 Dhruv Kakadiya. All rights reserved.
            </p>
          </div>
        </div>

        {/* Enhanced responsive navigation */}
        <div className={`border-t mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 transition-colors duration-1000 ${
          sectionTheme === 'light' ? 'border-gray-200' : 'border-gray-800'
        }`}>
          {/* Mobile navigation - Stack vertically on small screens */}
          <div className="flex flex-col sm:hidden space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#about" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                Skills
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#projects" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                Experience
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <a 
                href="#contact" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200'
                    : 'text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Tablet navigation - 3 columns for medium screens */}
          <div className="hidden sm:flex md:hidden justify-center">
            <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
              <a 
                href="#about" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] col-start-2 ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className={`flex items-center justify-center py-3 px-4 text-sm transition-colors rounded-lg touch-manipulation min-h-[48px] ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop navigation - Horizontal layout for large screens */}
          <div className="hidden md:flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-12">
              <a 
                href="#about" 
                className={`py-2 px-4 lg:px-6 text-sm lg:text-base transition-colors rounded-lg cursor-pointer ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                About
              </a>
              <a 
                href="#skills" 
                className={`py-2 px-4 lg:px-6 text-sm lg:text-base transition-colors rounded-lg cursor-pointer ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className={`py-2 px-4 lg:px-6 text-sm lg:text-base transition-colors rounded-lg cursor-pointer ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className={`py-2 px-4 lg:px-6 text-sm lg:text-base transition-colors rounded-lg cursor-pointer ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className={`py-2 px-4 lg:px-6 text-sm lg:text-base transition-colors rounded-lg cursor-pointer ${
                  sectionTheme === 'light'
                    ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
