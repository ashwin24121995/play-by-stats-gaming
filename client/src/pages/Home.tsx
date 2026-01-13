import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Zap, Shield, Users, CheckCircle, Trophy, Gamepad2, TrendingUp } from 'lucide-react';
import LazyBackgroundSection from '@/components/LazyBackgroundSection';

/**
 * Home Page - Play By Stats
 * Premium gaming platform landing page with Teal & Gold design
 * Design: Teal (#14b8a6) primary, Gold (#fbbf24) accents, Dark navy background (#0f172a)
 * Focus: Free-to-play emphasis, detailed information, engaging visuals
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Hero Section */}
      <LazyBackgroundSection
        imageSrc="/images/hero-gaming-bg-teal.webp"
        className="relative h-screen overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#0f172a]/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#14b8a6]/20 border border-[#14b8a6]/50 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#14b8a6] rounded-full animate-pulse"></span>
              <span className="text-[#14b8a6] text-sm font-semibold">100% FREE • NO REAL MONEY • PURE FUN</span>
            </motion.div>

            <h1
              className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Your Performance,<br />Your Rewards
            </h1>
            <p className="text-xl text-[#cbd5e1] mb-8 leading-relaxed max-w-2xl">
              Play By Stats is your ultimate free-to-play gaming platform. Enjoy exciting games with zero financial risk, track your performance with real-time statistics, and compete with a thriving community. Entertainment that's completely free, forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/games">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105 group">
                  Play Games Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Link>
              <Link href="/disclaimer">
                <a className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] font-bold rounded-lg hover:bg-[#14b8a6]/10 transition-all duration-300">
                  Learn About Free-to-Play
                </a>
              </Link>
            </div>

            {/* Stats Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 bg-[#1e293b]/80 border border-[#14b8a6]/30 rounded-full px-6 py-3"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#14b8a6] rounded-full animate-pulse"></span>
                <span className="text-[#cbd5e1] text-sm">🎮 1000+ Players Online</span>
              </div>
              <div className="w-px h-6 bg-[#334155]"></div>
              <span className="text-[#fbbf24] text-sm font-semibold">✨ 100% Free Forever</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Gaming Icon */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 right-10 opacity-20 hidden lg:block"
        >
          <div className="text-9xl">🎲</div>
        </motion.div>
      </LazyBackgroundSection>

      {/* Free-to-Play Guarantee Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
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
              100% Free-to-Play Guarantee
            </h2>
            <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto">
              At Play By Stats, we believe gaming should be accessible to everyone. That's why we're completely free—no hidden costs, no real money required, no pay-to-win mechanics.
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
              {
                icon: <CheckCircle size={32} />,
                title: 'No Real Money',
                desc: 'Play completely free. No purchases, no transactions, no financial risk.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Safe & Secure',
                desc: 'Your data is protected with enterprise-level security. Privacy guaranteed.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Instant Access',
                desc: 'No downloads, no registration required. Play directly in your browser.',
              },
              {
                icon: <Trophy size={32} />,
                title: 'Pure Entertainment',
                desc: 'All achievements are for fun. No real-world financial implications.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border-2 border-[#14b8a6]/30 hover:border-[#14b8a6] transition-all duration-300 p-6 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#14b8a6]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-lg items-center justify-center text-[#14b8a6] mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
            <p className="text-[#cbd5e1] text-lg max-w-2xl mx-auto">
              Discover our collection of exciting free-to-play games designed for entertainment and fun. No real money involved—pure gaming enjoyment.
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
              { name: '🎰 Lucky Slots', desc: 'Spin the reels and win big—completely free!' },
              { name: '🎡 Roulette Spin', desc: 'Classic roulette with entertainment value' },
              { name: '♠️ Blackjack Pro', desc: 'Beat the dealer in this timeless card game' },
              { name: '🎲 Dice Roller', desc: 'Roll the dice and test your luck' },
            ].map((game, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border-2 border-[#14b8a6]/30 hover:border-[#fbbf24] transition-all duration-300 p-6 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#14b8a6]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="text-[#cbd5e1] mb-4">{game.desc}</p>
                  <button className="text-[#14b8a6] font-bold hover:translate-x-2 transition-transform inline-flex items-center gap-2 group/btn">
                    Play Free <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/games">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105">
                View All Games
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Play By Stats Section */}
      <LazyBackgroundSection
        imageSrc="/images/features-bg-teal.webp"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 to-[#1e293b]/90"></div>

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
              Why Choose Play By Stats?
            </h2>
            <p className="text-[#cbd5e1] text-lg max-w-2xl mx-auto">
              Experience gaming the way it should be—free, fair, and focused on fun.
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
              {
                icon: <Gamepad2 size={32} />,
                title: 'Instant Play',
                desc: 'No downloads or registration. Play directly in your browser instantly.',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Track Stats',
                desc: 'Monitor your performance with real-time statistics and achievements.',
              },
              {
                icon: <Users size={32} />,
                title: 'Community',
                desc: 'Connect with thousands of players worldwide in a thriving community.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Free Forever',
                desc: 'No real money, no hidden costs, no pay-to-win. Pure entertainment.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-lg border border-[#14b8a6]/20 p-8 text-center hover:border-[#14b8a6] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-lg items-center justify-center text-[#14b8a6] mb-4">
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#cbd5e1] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </LazyBackgroundSection>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="max-w-4xl mx-auto">
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
              How It Works
            </h2>
            <p className="text-[#cbd5e1] text-lg">
              Getting started with Play By Stats is simple and straightforward.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                step: '1',
                title: 'Visit & Play',
                desc: 'No registration needed. Visit our site and start playing immediately. All games are accessible right away.',
              },
              {
                step: '2',
                title: 'Enjoy Free Games',
                desc: 'Play any of our games with zero financial commitment. Every game is completely free, forever.',
              },
              {
                step: '3',
                title: 'Track Performance',
                desc: 'Monitor your stats, achievements, and progress in real-time. Compete with friends on leaderboards.',
              },
              {
                step: '4',
                title: 'Have Fun',
                desc: 'Enjoy pure entertainment without any real-money risk. Gaming should be fun—and it is!',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#cbd5e1]">{item.desc}</p>
                </div>
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
            className="bg-gradient-to-r from-[#14b8a6]/10 to-[#0d9488]/10 border-2 border-[#14b8a6]/30 rounded-2xl p-12 text-center"
          >
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
            >
              Ready to Play?
            </h2>
            <p className="text-[#cbd5e1] text-lg mb-8">
              Join our community of gamers and start playing today. It's free, safe, and fun. No real money, no risk, just pure entertainment.
            </p>
            <Link href="/games">
              <a className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105">
                Start Playing Now
                <ArrowRight size={20} />
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1e293b]/50 border-t border-[#334155]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#94a3b8] text-sm">
            ⚠️ <strong>Responsible Gaming:</strong> This platform is for entertainment purposes only. No real money is involved. 
            All players must be 18 years or older. Play responsibly and have fun!
          </p>
          <Link href="/disclaimer">
            <a className="text-[#14b8a6] hover:text-[#0d9488] font-semibold text-sm mt-4 inline-block transition-colors">
              Read Full Disclaimer →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
