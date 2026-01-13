import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a2e] to-[#2d1b4e]">
      <div className="bg-gradient-to-r from-[#f7a600]/10 to-[#d4860f]/10 border-b-2 border-[#f7a600] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
          >
            Contact Play By Stats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a0aec0] text-lg"
          >
            We would love to hear from you. Get in touch with the Play By Stats team.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8"
          >
            <h2
              className="text-2xl font-bold text-[#f7a600] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#a0aec0] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a0a2e] border border-[#f7a600]/30 rounded-lg text-white placeholder-[#6b5b95] focus:border-[#f7a600] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[#a0aec0] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a0a2e] border border-[#f7a600]/30 rounded-lg text-white placeholder-[#6b5b95] focus:border-[#f7a600] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[#a0aec0] text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a0a2e] border border-[#f7a600]/30 rounded-lg text-white placeholder-[#6b5b95] focus:border-[#f7a600] focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-[#a0aec0] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[#1a0a2e] border border-[#f7a600]/30 rounded-lg text-white placeholder-[#6b5b95] focus:border-[#f7a600] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
              <div className="flex gap-4 items-start">
                <Mail className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3
                    className="text-xl font-bold text-[#f7a600] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    Email
                  </h3>
                  <p className="text-[#a0aec0]">
                    <a href="mailto:support@playbystats.com" className="hover:text-[#f7a600] transition-colors">
                      support@playbystats.com
                    </a>
                  </p>
                  <p className="text-[#a0aec0] text-sm mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
              <div className="flex gap-4 items-start">
                <Phone className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3
                    className="text-xl font-bold text-[#f7a600] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    Phone
                  </h3>
                  <p className="text-[#a0aec0]">
                    <a href="tel:+919876543210" className="hover:text-[#f7a600] transition-colors">
                      +91 (987) 654-3210
                    </a>
                  </p>
                  <p className="text-[#a0aec0] text-sm mt-1">
                    Available 24/7 for support
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3
                    className="text-xl font-bold text-[#f7a600] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    Location
                  </h3>
                  <p className="text-[#a0aec0]">
                    SDSURABHI INFRA PRIVATE LIMITED<br />
                    Lucknow, Uttar Pradesh, India
                  </p>
                  <p className="text-[#a0aec0] text-sm mt-1">
                    Global operations with local support
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
              <h3
                className="text-xl font-bold text-[#f7a600] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
              >
                Business Hours
              </h3>
              <div className="text-[#a0aec0] space-y-2">
                <p>Monday - Friday: 9:00 AM - 9:00 PM IST</p>
                <p>Saturday - Sunday: 10:00 AM - 8:00 PM IST</p>
                <p className="text-sm mt-4">Support available 24/7 for urgent issues</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
