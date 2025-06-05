
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactInfoProps {
  sectionTheme: 'light' | 'dark';
}

const ContactInfo = ({ sectionTheme }: ContactInfoProps) => {
  const contactLinks = [
    {
      href: "mailto:dhruvkakadiya1911@gmail.com",
      icon: Mail,
      label: "Email",
      value: "dhruvkakadiya1911@gmail.com"
    },
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
      value: "@Dhruvkakadiya1911",
      external: true
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Dhruv Kakadiya",
      external: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className={`text-2xl font-bold mb-6 transition-colors duration-1000 ${
          sectionTheme === 'light' 
            ? 'text-black' 
            : 'text-white'
        }`}>Get In Touch</h3>
        <p className={`leading-relaxed mb-8 transition-colors duration-1000 ${
          sectionTheme === 'light' 
            ? 'text-gray-700' 
            : 'text-gray-300'
        }`}>
          I'm always open to discussing new opportunities, interesting projects, 
          or potential collaborations. Whether you need a backend developer for 
          your startup or want to chat about Node.js, feel free to reach out.
        </p>
      </div>

      <div className="space-y-4">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              className={`flex items-center space-x-4 transition-all duration-300 group rounded-xl p-4 ${
                sectionTheme === 'light'
                  ? 'text-gray-700 hover:text-black hover:bg-gray-50 hover:shadow-md'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/30 hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg ${
                sectionTheme === 'light'
                  ? 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-pink-100'
                  : 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-purple-600/30 group-hover:to-pink-600/30'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">{link.label}</div>
                <div className={`text-sm transition-colors duration-1000 ${
                  sectionTheme === 'light' 
                    ? 'text-gray-600' 
                    : 'text-gray-400'
                }`}>{link.value}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
