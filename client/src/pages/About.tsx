import { motion } from 'framer-motion';
import { Heart, Shield, Users, Zap } from 'lucide-react';

/**
 * About Page - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899) with comprehensive company information
 * Features: Mission, vision, values, team, and free-to-play commitment
 */
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Play By Stats</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Revolutionizing free-to-play gaming with transparency, fairness, and pure entertainment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Info */}
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#1a1a2e] mb-6">Who We Are</h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-4">
              Play By Stats is a free-to-play gaming platform operated by <strong>SDSURABHI INFRA PRIVATE LIMITED</strong>, a registered company in India. We're dedicated to providing the most transparent, fair, and entertaining gaming experience without any financial risk.
            </p>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-4">
              Founded with a mission to democratize gaming entertainment, we believe that fun shouldn't come with financial consequences. Every game on our platform is designed with one principle: entertainment first, zero financial risk always.
            </p>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              Our team of experienced developers, designers, and gaming enthusiasts work tirelessly to deliver the best free-to-play experience. We're not just a gaming platform; we're a community dedicated to responsible, enjoyable gaming.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-2xl p-8 border-2 border-[#a855f7]/30"
          >
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Company Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">Company Name</p>
                <p className="text-lg text-[#1a1a2e] font-bold">SDSURABHI INFRA PRIVATE LIMITED</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">CIN (Corporate Identification Number)</p>
                <p className="text-lg text-[#1a1a2e] font-bold">U41002UP2023PTC194590</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">PAN (Permanent Account Number)</p>
                <p className="text-lg text-[#1a1a2e] font-bold">ABMCS3759A</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">TAN (Tax Deduction Account Number)</p>
                <p className="text-lg text-[#1a1a2e] font-bold">LKNS26029D</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">Incorporation Date</p>
                <p className="text-lg text-[#1a1a2e] font-bold">26th December 2023</p>
              </div>
              <div>
                <p className="text-sm text-[#6b7280] font-semibold">Location</p>
                <p className="text-lg text-[#1a1a2e] font-bold">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] text-white py-20">
        <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#a855f7]">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To provide the world's most transparent, fair, and entertaining free-to-play gaming platform where players can enjoy casino games without any financial risk. We're committed to making gaming accessible to everyone, regardless of their financial situation, while maintaining the highest standards of responsible gaming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#ec4899]">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To become the leading free-to-play gaming platform globally, recognized for our commitment to player safety, fairness, and entertainment. We envision a world where gaming is purely about fun and skill development, never about financial risk or exploitation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#1a1a2e] mb-16"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Heart,
              title: 'Entertainment First',
              description: 'Every decision we make prioritizes player enjoyment and fun. Gaming should be entertaining, not stressful.',
            },
            {
              icon: Shield,
              title: 'Transparency & Fairness',
              description: 'All our games use fair algorithms. We believe in complete transparency about how our platform works.',
            },
            {
              icon: Users,
              title: 'Community Focus',
              description: 'We build a thriving community where players can compete, share achievements, and support each other.',
            },
            {
              icon: Zap,
              title: 'Responsible Gaming',
              description: 'We promote responsible gaming practices and provide resources for players to maintain healthy gaming habits.',
            },
          ].map((value, idx) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-xl p-8 border border-[#a855f7]/20 hover:border-[#a855f7] transition-all duration-300"
              >
                <IconComponent size={40} className="text-[#a855f7] mb-4" />
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{value.title}</h3>
                <p className="text-[#6b7280]">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Free-to-Play Commitment */}
      <div className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Free-to-Play Commitment</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We are 100% committed to keeping all our games completely free. No hidden charges. No premium features requiring payment. No real money transactions. Ever.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'No Real Money', desc: 'You cannot win or lose real money on our platform.' },
                { title: 'No Ads Interrupting Gameplay', desc: 'Enjoy uninterrupted gaming without annoying ads.' },
                { title: 'No Hidden Charges', desc: 'What you see is what you get - completely free.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-[#1a1a2e] mb-16"
        >
          Why Choose Play By Stats?
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              title: 'Completely Free Forever',
              description: 'Every game is 100% free. No registration required. No payment methods needed. Just pure entertainment.',
            },
            {
              title: 'Zero Financial Risk',
              description: 'Play with virtual coins only. You cannot win or lose real money. Gaming is purely for fun and skill development.',
            },
            {
              title: 'Fair & Transparent Gaming',
              description: 'All our games use certified fair algorithms. No rigged outcomes. Your success depends on strategy and luck, not manipulation.',
            },
            {
              title: 'Responsible Gaming Focus',
              description: 'We promote healthy gaming habits. Players must be 18+ to play. We provide resources for responsible gaming.',
            },
            {
              title: 'Secure & Safe',
              description: 'No real money transactions mean no financial data at risk. Your information is protected with enterprise-level security.',
            },
            {
              title: 'Community & Competition',
              description: 'Compete on leaderboards, earn achievements, and be part of a thriving community of gamers.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gradient-to-r from-[#a855f7]/5 to-[#ec4899]/5 rounded-lg p-6 border-l-4 border-[#a855f7]"
            >
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
              <p className="text-[#6b7280]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the best free-to-play gaming platform. No registration. No real money. Just pure fun!
          </p>
          <a href="/" className="inline-block px-8 py-4 bg-white text-[#a855f7] font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Playing Now
          </a>
        </div>
      </div>
    </div>
  );
}
