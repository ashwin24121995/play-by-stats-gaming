import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Zap, Shield, Users, CheckCircle, Trophy, Gamepad2, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import LazyBackgroundSection from '@/components/LazyBackgroundSection';

/**
 * Home Page - Play By Stats
 * Premium gaming platform landing page with Teal & Gold design
 * Design: Teal (#14b8a6) primary, Gold (#fbbf24) accents, Dark navy background (#0f172a)
 * Compliance: Full Google Ads Social Casino Policy compliance
 * Focus: Free-to-play emphasis, detailed information, engaging visuals
 */
export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const faqItems = [
    {
      question: 'Is Play By Stats completely free to play?',
      answer: 'Yes, 100% free. Play By Stats is entirely free-to-play with no real money involved. You can play all our games without spending any money. There are no hidden costs, no in-app purchases required to play, and no pay-to-win mechanics. All games are accessible to every player at no cost.',
    },
    {
      question: 'Can I win real money on Play By Stats?',
      answer: 'No. Play By Stats is purely for entertainment purposes. While you can earn virtual achievements, badges, and track your statistics, these have no real-world monetary value. This is a social gaming platform designed for fun and community engagement, not for financial gain.',
    },
    {
      question: 'Is there any financial risk involved?',
      answer: 'Absolutely not. Since no real money is involved in any aspect of the platform, there is zero financial risk. You cannot lose money, and you cannot gain money. All gameplay is purely for entertainment and personal achievement tracking.',
    },
    {
      question: 'Do I need to provide payment information?',
      answer: 'No payment information is required. You can play all games without providing any credit card, bank details, or payment methods. Our platform operates entirely on a free-to-play model with no monetization.',
    },
    {
      question: 'What age do I need to be to play?',
      answer: 'Players must be 18 years of age or older to use Play By Stats. This is in accordance with responsible gaming practices and platform policies. We encourage all players to engage responsibly.',
    },
    {
      question: 'Are my statistics and achievements real?',
      answer: 'Your statistics and achievements are tracked in real-time and reflect your actual gameplay performance. However, these achievements are for entertainment and personal satisfaction only. They do not translate into any real-world benefits or financial value.',
    },
    {
      question: 'How is my data protected?',
      answer: 'We use enterprise-level security measures to protect your data. Your privacy is our priority, and we never share personal information with third parties. All data is encrypted and stored securely.',
    },
    {
      question: 'Can I play without creating an account?',
      answer: 'Yes! You can start playing immediately without registration. No account creation is required to enjoy our games. If you want to track your statistics and compete on leaderboards, you can optionally create an account.',
    },
  ];

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

        {/* Animated Gaming Character */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-0 bottom-0 hidden lg:block h-full w-1/3 overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="h-full flex items-center justify-center"
          >
            <img
              src="/images/hero-character.webp"
              alt="Gaming Character"
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </LazyBackgroundSection>

      {/* Top Awesome Games Section */}
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
              Top Awesome Games
            </h2>
            <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto">
              Experience our collection of premium free-to-play games. Each game is designed for maximum entertainment with zero financial commitment. Play instantly, no downloads required.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                name: '🎰 Lucky Slots',
                desc: 'Classic slot machine experience',
                details: 'Spin the reels and enjoy the thrill of slot gaming. Completely free with no real money involved. Track your spin statistics, unlock achievements, and compete on leaderboards. Experience authentic slot machine gameplay with stunning graphics and smooth animations.',
              },
              {
                name: '🎡 Roulette Spin',
                desc: 'Timeless roulette entertainment',
                details: 'Experience the excitement of roulette in a safe, free-to-play environment. Place virtual bets, watch the wheel spin, and enjoy pure entertainment. No financial risk, no real money—just fun and statistics tracking.',
              },
              {
                name: '♠️ Blackjack Pro',
                desc: 'Strategic card game mastery',
                details: 'Master the classic card game of Blackjack. Play against our dealer, develop strategies, and track your win statistics. Completely free gameplay with real-time performance metrics. Perfect for learning and entertainment.',
              },
              {
                name: '🎲 Dice Roller',
                desc: 'Simple yet thrilling dice games',
                details: 'Roll the dice and test your luck in this classic game of chance. Free-to-play with instant results and achievement tracking. No stakes, no financial risk—pure entertainment and fun.',
              },
            ].map((game, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border-2 border-[#14b8a6]/30 hover:border-[#fbbf24] transition-all duration-300 p-8 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#14b8a6]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="text-[#fbbf24] font-semibold mb-4">{game.desc}</p>
                  <p className="text-[#cbd5e1] mb-6 leading-relaxed">{game.details}</p>
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
                Explore All Games
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Play Our Casino Section */}
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
              Why Play Our Casino?
            </h2>
            <p className="text-[#cbd5e1] text-lg max-w-3xl mx-auto">
              Play By Stats offers a unique gaming experience that prioritizes your safety, enjoyment, and entertainment. Here's why thousands of players choose us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <CheckCircle size={32} />,
                title: '100% Free Forever',
                desc: 'Absolutely no real money involved. Play all games completely free with zero financial risk or hidden costs.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Safe & Secure',
                desc: 'Enterprise-level security protects your data. Your privacy is guaranteed. No personal information is shared.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Instant Play',
                desc: 'No downloads or registration required. Start playing immediately in your browser. Instant access to all games.',
              },
              {
                icon: <Trophy size={32} />,
                title: 'Track Performance',
                desc: 'Real-time statistics and achievement tracking. Monitor your progress and compete on global leaderboards.',
              },
              {
                icon: <Users size={32} />,
                title: 'Thriving Community',
                desc: 'Connect with thousands of players worldwide. Compete, share achievements, and build friendships.',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Fair Gaming',
                desc: 'Transparent algorithms ensure fair gameplay. No pay-to-win mechanics. Everyone plays on equal footing.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 rounded-lg border border-[#14b8a6]/20 p-8 text-center hover:border-[#14b8a6] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-lg items-center justify-center text-[#14b8a6] mb-4">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#cbd5e1] text-sm">{item.desc}</p>
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
              Getting started with Play By Stats is simple, straightforward, and completely free. Follow these easy steps to begin your gaming journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                step: '1',
                title: 'Visit & Play Instantly',
                desc: 'No registration or downloads needed. Simply visit Play By Stats and start playing immediately. All games are accessible right away with zero barriers to entry.',
              },
              {
                step: '2',
                title: 'Enjoy Free Games',
                desc: 'Play any of our games completely free with zero financial commitment. No real money is involved at any point. Every game is designed for pure entertainment.',
              },
              {
                step: '3',
                title: 'Track Your Stats',
                desc: 'Monitor your performance in real-time. Track wins, losses, achievements, and statistics. Compete with friends on leaderboards and unlock badges.',
              },
              {
                step: '4',
                title: 'Have Fun & Compete',
                desc: 'Enjoy pure entertainment without financial risk. Compete globally, build your community, and celebrate achievements. Gaming should be fun—and it is!',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-md bg-gradient-to-br from-[#14b8a6] to-[#0d9488] text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
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
              Frequently Asked Questions
            </h2>
            <p className="text-[#cbd5e1] text-lg">
              Have questions about Play By Stats? We've answered the most common questions below.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border border-[#14b8a6]/20 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#14b8a6]/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white text-left">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#14b8a6] transition-transform flex-shrink-0 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 border-t border-[#14b8a6]/20 bg-[#0f172a]/50"
                  >
                    <p className="text-[#cbd5e1] leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ready to Play Section */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/games">
                <a className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform hover:scale-105">
                  Start Playing Now
                  <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/disclaimer">
                <a className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-[#14b8a6] text-[#14b8a6] font-bold rounded-lg hover:bg-[#14b8a6]/10 transition-all duration-300">
                  Read Disclaimer
                  <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsible Gaming Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1e293b]/50 border-t border-[#334155]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            ⚠️ <strong>Responsible Gaming & Compliance Notice:</strong> Play By Stats is a free-to-play social gaming platform designed for entertainment purposes only. No real money is involved in any aspect of gameplay. All players must be 18 years of age or older. This platform complies with Google Ads Social Casino Policy. All games are completely free with no financial transactions. Play responsibly and have fun!
          </p>
          <Link href="/disclaimer">
            <a className="text-[#14b8a6] hover:text-[#0d9488] font-semibold text-sm mt-4 inline-block transition-colors">
              Read Full Disclaimer & Terms →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
