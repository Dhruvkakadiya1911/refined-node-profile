
const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Alex<span className="text-gray-400">Chen</span>
            </div>
            <p className="text-gray-400">
              Backend Node.js Developer
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Made with ❤️ using Node.js & React
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Alex Chen. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center transition-colors duration-300">
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
