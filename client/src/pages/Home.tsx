import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

/**
 * Home Page
 * Premium gaming platform landing page with 3D design
 * Design: Deep purple background with golden accents, floating animations
 */
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center overflow-hidden flex items-center"
        style={{
          backgroundImage: 'url(/images/hero-gaming-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/80 via-[#1a0a2e]/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1
              className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Your Performance, Your Rewards
            </h1>
            <p className="text-xl text-[#a0aec0] mb-8 leading-relaxed">
              Play By Stats - Where gaming meets statistics. Free-to-play, risk-free entertainment with exciting games and a thriving community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/games">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105 group">
                  Play Games
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Link>
              <Link href="/about">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#f7a600] text-[#f7a600] font-bold rounded-lg hover:bg-[#f7a600]/10 transition-all duration-300">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-12 inline-flex items-center gap-2 bg-[#2d1b4e]/80 border border-[#f7a600]/30 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-[#f7a600] rounded-full animate-pulse"></span>
              <span className="text-[#a0aec0] text-sm">🎮 1000+ Players Online Now</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Floating Elements */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-10 opacity-20 hidden lg:block"
        >
          <div className="text-9xl">🎲</div>
        </motion.div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Featured Games
            </h2>
            <p className="text-[#a0aec0] text-lg max-w-2xl mx-auto">
              Discover our collection of exciting free-to-play games designed for entertainment and fun.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: '🎰 Lucky Slots', desc: 'Spin the reels' },
              { name: '🎡 Roulette Spin', desc: 'Place your bets' },
              { name: '♠️ Blackjack Pro', desc: 'Beat the dealer' },
              { name: '🎲 Dice Roller', desc: 'Roll the dice' },
            ].map((game, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#2d1b4e] to-[#1a0a2e] rounded-xl border-2 border-[#f7a600]/30 hover:border-[#f7a600] transition-all duration-300 p-6 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#f7a600]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7a600]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="text-[#a0aec0] mb-4">{game.desc}</p>
                  <button className="text-[#f7a600] font-bold hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Play <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/games">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105">
                View All Games
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Play Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/features-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/90 to-[#2d1b4e]/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Why Choose PlayHub?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Zap size={32} />,
                title: 'Instant Play',
                desc: 'No downloads or registration. Play directly in your browser.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Safe & Secure',
                desc: 'Enterprise-level security protects your data and privacy.',
              },
              {
                icon: <Users size={32} />,
                title: 'Community',
                desc: 'Connect with thousands of players worldwide.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Free Forever',
                desc: 'No real money, no hidden costs, pure entertainment.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#2d1b4e]/80 to-[#1a0a2e]/80 rounded-lg border border-[#f7a600]/20 p-8 text-center hover:border-[#f7a600] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#f7a600]/20 to-[#d4860f]/20 rounded-lg items-center justify-center text-[#f7a600] mb-4">
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#a0aec0] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#f7a600]/10 to-[#d4860f]/10 border-2 border-[#f7a600]/30 rounded-2xl p-12 text-center"
          >
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Ready to Play?
            </h2>
            <p className="text-[#a0aec0] text-lg mb-8">
              Join our community of gamers and start playing today. It's free, safe, and fun!
            </p>
            <Link href="/games">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f7a600] to-[#d4860f] text-[#1a0a2e] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f7a600]/50 transition-all duration-300 transform hover:scale-105">
                Start Playing Now
                <ArrowRight size={20} />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
