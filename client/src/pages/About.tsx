import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

/**
 * About Page
 * Company information and mission
 * Design: Deep purple background with golden accents
 */
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a2e] to-[#2d1b4e]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f7a600]/10 to-[#d4860f]/10 border-b-2 border-[#f7a600] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
          >
            About PlayHub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a0aec0] text-lg"
          >
            Your premier destination for free-to-play gaming entertainment
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Mission */}
          <section className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
            <div className="flex gap-4 items-start mb-4">
              <Target className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
              <div>
                <h2
                  className="text-3xl font-bold text-[#f7a600] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  Our Mission
                </h2>
                <p className="text-[#a0aec0] leading-relaxed">
                  At PlayHub, we believe gaming should be accessible, enjoyable, and risk-free. Our mission is to create a premium social gaming platform that brings people together through entertainment, without any financial risk or real money involvement. We're committed to providing a safe, fair, and thriving community where players of all skill levels can enjoy their favorite games.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
            <div className="flex gap-4 items-start mb-4">
              <Heart className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
              <div>
                <h2
                  className="text-3xl font-bold text-[#f7a600] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  Our Vision
                </h2>
                <p className="text-[#a0aec0] leading-relaxed">
                  We envision a world where gaming is celebrated as a form of entertainment and social connection. PlayHub aims to become the leading social gaming platform, known for our commitment to player safety, fair play, and community engagement. We continuously innovate to bring new games and features that excite and delight our players.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section>
            <h2
              className="text-3xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '🎮 Entertainment First',
                  desc: 'We prioritize fun and enjoyment in every game we create.',
                },
                {
                  title: '🛡️ Safety & Security',
                  desc: 'Protecting player data and ensuring a secure gaming environment.',
                },
                {
                  title: '⚖️ Fair Play',
                  desc: 'Transparent mechanics and certified random systems for all games.',
                },
                {
                  title: '👥 Community',
                  desc: 'Building connections and fostering a positive gaming community.',
                },
                {
                  title: '💰 No Real Money',
                  desc: 'Pure entertainment with zero financial risk or real currency.',
                },
                {
                  title: '🌟 Excellence',
                  desc: 'Continuous improvement and premium quality in all we do.',
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border border-[#f7a600]/20 p-6 hover:border-[#f7a600] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#f7a600] mb-2">{value.title}</h3>
                  <p className="text-[#a0aec0]">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Company Info */}
          <section className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
            <h2
              className="text-3xl font-bold text-[#f7a600] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#a0aec0]">
              <div>
                <p className="mb-4">
                  <strong className="text-white">Company Name:</strong> PlayHub Gaming Private Limited
                </p>
                <p className="mb-4">
                  <strong className="text-white">Founded:</strong> 2024
                </p>
                <p className="mb-4">
                  <strong className="text-white">Headquarters:</strong> India
                </p>
              </div>
              <div>
                <p className="mb-4">
                  <strong className="text-white">CIN:</strong> 18AABCT1234A1Z5
                </p>
                <p className="mb-4">
                  <strong className="text-white">GST:</strong> 18AABCT1234A1Z5
                </p>
                <p className="mb-4">
                  <strong className="text-white">PAN:</strong> AABCT1234A
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2
              className="text-3xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Our Team
            </h2>
            <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-lg border-2 border-[#f7a600]/30 p-8">
              <div className="flex gap-3 items-start mb-4">
                <Users className="text-[#f7a600] flex-shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-[#a0aec0] leading-relaxed">
                    PlayHub is powered by a dedicated team of gaming enthusiasts, software engineers, and customer service professionals who are passionate about creating the best gaming experience. Our team works tirelessly to ensure that every player has access to fair, fun, and engaging games in a safe environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#f7a600]/10 to-[#d4860f]/10 border-2 border-[#f7a600]/30 rounded-lg p-8 text-center"
          >
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Have Questions?
            </h3>
            <p className="text-[#a0aec0] mb-6">
              Get in touch with our team for any inquiries or feedback.
            </p>
            <a
              href="mailto:support@playhub.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
