import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

/**
 * About Page
 * Company information and mission
 * Design: Deep purple background with golden accents
 */
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border-b-2 border-[#14b8a6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
          >
            About Play By Stats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#cbd5e1] text-lg"
          >
            Where gaming meets statistics - Your premier destination for free-to-play gaming entertainment
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
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-4 items-start mb-4">
              <Target className="text-[#14b8a6] flex-shrink-0 mt-1" size={28} />
              <div>
                <h2
                  className="text-3xl font-bold text-[#14b8a6] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  Our Mission
                </h2>
                <p className="text-[#cbd5e1] leading-relaxed">
                  At Play By Stats, we believe gaming should be accessible, enjoyable, and risk-free. Our mission is to create a premium social gaming platform that brings people together through entertainment, without any financial risk or real money involvement. We're committed to providing a safe, fair, and thriving community where players of all skill levels can enjoy their favorite games.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <div className="flex gap-4 items-start mb-4">
              <Heart className="text-[#14b8a6] flex-shrink-0 mt-1" size={28} />
              <div>
                <h2
                  className="text-3xl font-bold text-[#14b8a6] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  Our Vision
                </h2>
                <p className="text-[#cbd5e1] leading-relaxed">
                  We envision a world where gaming is celebrated as a form of entertainment and social connection. Play By Stats aims to become the leading social gaming platform, known for our commitment to player safety, fair play, and community engagement. We continuously innovate to bring new games and features that excite and delight our players.
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
                  className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border border-[#14b8a6]/20 p-6 hover:border-[#14b8a6] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#14b8a6] mb-2">{value.title}</h3>
                  <p className="text-[#cbd5e1]">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Company Info */}
          <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
            <h2
              className="text-3xl font-bold text-[#14b8a6] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#cbd5e1]">
              <div>
                <p className="text-[#cbd5e1] mb-4">
                  <strong className="text-white">Company Name:</strong> SDSURABHI INFRA PRIVATE LIMITED
                </p>
                <p className="mb-4">
                  <strong className="text-white">Founded:</strong> 26/12/2023
                </p>
                <p className="mb-4">
                  <strong className="text-white">Headquarters:</strong> Lucknow, Uttar Pradesh, India
                </p>
              </div>
              <div>
                <p className="text-[#cbd5e1] mb-4">
                  <strong className="text-white">CIN:</strong> U41002UP2023PTC194590
                </p>
                <p className="text-[#cbd5e1] mb-4">
                  <strong className="text-white">PAN:</strong> ABMCS3759A
                </p>
                <p className="text-[#cbd5e1]">
                  <strong className="text-white">TAN:</strong> LKNS26029D
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
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border-2 border-[#14b8a6]/30 p-8">
              <div className="flex gap-3 items-start mb-4">
                <Users className="text-[#14b8a6] flex-shrink-0 mt-1" size={28} />
                <div>
                  <p className="text-[#cbd5e1] leading-relaxed">
                    Play By Stats is powered by a dedicated team of gaming enthusiasts, software engineers, and customer service professionals who are passionate about creating the best gaming experience. Our team works tirelessly to ensure that every player has access to fair, fun, and engaging games in a safe environment.
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
            className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border-2 border-[#14b8a6]/30 rounded-lg p-8 text-center"
          >
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Have Questions?
            </h3>
            <p className="text-[#cbd5e1] mb-6">
              Get in touch with our team for any inquiries or feedback.
            </p>
            <a
              href="mailto:support@playbystats.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-[#0f172a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
