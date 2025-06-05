
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  sectionTheme: 'light' | 'dark';
}

const ContactForm = ({ sectionTheme }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    <div className={`rounded-2xl p-8 backdrop-blur-md border transition-all duration-1000 shadow-xl ${
      sectionTheme === 'light'
        ? 'bg-white/80 border-gray-200 shadow-gray-200/50'
        : 'bg-black/80 border-gray-700 shadow-black/50'
    }`}>
      <h3 className={`text-2xl font-bold mb-6 transition-colors duration-1000 ${
        sectionTheme === 'light' 
          ? 'text-black' 
          : 'text-white'
      }`}>Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative group">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`border-2 transition-all duration-300 rounded-xl shadow-md group-hover:shadow-lg focus:shadow-xl ${
              sectionTheme === 'light'
                ? 'bg-white border-gray-200 text-black placeholder-gray-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                : 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100/20 hover:border-gray-500'
            }`}
          />
        </div>

        <div className="relative group">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`border-2 transition-all duration-300 rounded-xl shadow-md group-hover:shadow-lg focus:shadow-xl ${
              sectionTheme === 'light'
                ? 'bg-white border-gray-200 text-black placeholder-gray-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                : 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100/20 hover:border-gray-500'
            }`}
          />
        </div>

        <div className="relative group">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`border-2 resize-none transition-all duration-300 rounded-xl shadow-md group-hover:shadow-lg focus:shadow-xl ${
              sectionTheme === 'light'
                ? 'bg-white border-gray-200 text-black placeholder-gray-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 hover:border-gray-300'
                : 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100/20 hover:border-gray-500'
            }`}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className={`w-full transition-all duration-300 disabled:opacity-50 hover:scale-105 rounded-xl py-3 relative overflow-hidden group shadow-lg hover:shadow-xl ${
            sectionTheme === 'light'
              ? 'bg-black text-white hover:bg-gray-800 border-2 border-transparent hover:border-blue-300 hover:shadow-blue-200/50'
              : 'bg-white text-black hover:bg-gray-200 border-2 border-transparent hover:border-purple-400 hover:shadow-purple-300/50'
          }`}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${
            sectionTheme === 'light'
              ? 'bg-gradient-to-r from-blue-100/20 to-pink-100/20'
              : 'bg-gradient-to-r from-purple-300/20 to-pink-300/20'
          }`}></div>
          
          <span className="relative z-10">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
