
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { theme, isTransitioning } = useTheme();

  // In dark theme: Contact should be black
  // In light theme: Contact should be white
  const sectionTheme = theme === 'dark' ? 'dark' : 'light';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      className={`py-20 transition-all duration-1000 ${
        sectionTheme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-white text-black'
      } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000 ${
            sectionTheme === 'dark' 
              ? 'text-white' 
              : 'text-black'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-1000 ${
            sectionTheme === 'dark' 
              ? 'text-gray-300' 
              : 'text-gray-700'
          }`}>
            Ready to build something amazing? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-1000 ${
                sectionTheme === 'dark' 
                  ? 'text-white' 
                  : 'text-black'
              }`}>Get In Touch</h3>
              <p className={`leading-relaxed mb-8 transition-colors duration-1000 ${
                sectionTheme === 'dark' 
                  ? 'text-gray-300' 
                  : 'text-gray-700'
              }`}>
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Whether you need a backend developer for 
                your startup or want to chat about Node.js, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:dhruvkakadiya1911@gmail.com"
                className={`flex items-center space-x-4 transition-colors group ${
                  sectionTheme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  sectionTheme === 'dark'
                    ? 'bg-white/10 group-hover:bg-white/20'
                    : 'bg-black/10 group-hover:bg-black/20'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className={`text-sm transition-colors duration-1000 ${
                    sectionTheme === 'dark' 
                      ? 'text-gray-400' 
                      : 'text-gray-600'
                  }`}>dhruvkakadiya1911@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 transition-colors group ${
                  sectionTheme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  sectionTheme === 'dark'
                    ? 'bg-white/10 group-hover:bg-white/20'
                    : 'bg-black/10 group-hover:bg-black/20'
                }`}>
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className={`text-sm transition-colors duration-1000 ${
                    sectionTheme === 'dark' 
                      ? 'text-gray-400' 
                      : 'text-gray-600'
                  }`}>@Dhruvkakadiya1911</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 transition-colors group ${
                  sectionTheme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  sectionTheme === 'dark'
                    ? 'bg-white/10 group-hover:bg-white/20'
                    : 'bg-black/10 group-hover:bg-black/20'
                }`}>
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className={`text-sm transition-colors duration-1000 ${
                    sectionTheme === 'dark' 
                      ? 'text-gray-400' 
                      : 'text-gray-600'
                  }`}>Dhruv Kakadiya</div>
                </div>
              </a>
            </div>
          </div>

          <div className={`rounded-2xl p-8 backdrop-blur-md border transition-all duration-1000 ${
            sectionTheme === 'dark'
              ? 'bg-black/10 border-black/20'
              : 'bg-white/10 border-white/20'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-1000 ${
              sectionTheme === 'dark' 
                ? 'text-white' 
                : 'text-black'
            }`}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`border transition-all duration-1000 ${
                    sectionTheme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                      : 'bg-black/10 border-black/20 text-black placeholder-gray-600 focus:border-black/40'
                  }`}
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`border transition-all duration-1000 ${
                    sectionTheme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                      : 'bg-black/10 border-black/20 text-black placeholder-gray-600 focus:border-black/40'
                  }`}
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`border resize-none transition-all duration-1000 ${
                    sectionTheme === 'dark'
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40'
                      : 'bg-black/10 border-black/20 text-black placeholder-gray-600 focus:border-black/40'
                  }`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full transition-all duration-300 disabled:opacity-50 hover:scale-105 ${
                  sectionTheme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
