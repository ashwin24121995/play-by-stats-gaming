import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useAuth } from '@/_core/hooks/useAuth';
import { ArrowRight, Zap, Shield, Users, CheckCircle, Trophy, Gamepad2, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * Home Page - Play By Stats
 * Redesigned with PlayIQ Sports visual style
 * Design: Purple (#a855f7) & Pink (#ec4899) with bright green accents
 * Layout: Hero with floating badges, feature cards, stadium imagery
 */
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Is Play By Stats completely free to play?',
      answer: 'Yes, 100% free. Play By Stats is entirely free-to-play with no real money involved. You can play all our games without spending any money. There are no hidden costs, no in-app purchases required to play, and no pay-to-win mechanics.',
    },
    {
      question: 'Can I win real money on Play By Stats?',
      answer: 'No. Play By Stats is purely for entertainment purposes. All achievements are for fun and personal satisfaction only. This is a social gaming platform designed for entertainment and community engagement.',
    },
    {
      question: 'Is there any financial risk involved?',
      answer: 'Absolutely not. Since no real money is involved, there is zero financial risk. You cannot lose money, and you cannot gain money. All gameplay is purely for entertainment.',
    },
    {
      question: 'Do I need to provide payment information?',
      answer: 'No payment information is required. You can play all games without providing any credit card, bank details, or payment methods. Our platform operates entirely on a free-to-play model.',
    },
    {
      question: 'What age do I need to be to play?',
      answer: 'Players must be 18 years of age or older to use Play By Stats. This is in accordance with responsible gaming practices and platform policies.',
    },
    {
      question: 'Do I need to register or login to play?',
      answer: 'No! You can start playing immediately - completely anonymous. Just click "Play Now" and start playing instantly. No registration, no login, no personal data needed. 100% anonymous gaming.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-[#faf5ff]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-stadium-purple.webp"
            alt="Gaming Stadium"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ff] via-[#f5f3ff]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#a855f7]/10 border-2 border-[#a855f7] rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse"></span>
                <span className="text-[#a855f7] text-sm font-bold">100% Free Platform • No Real Money • Pure Fun</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-[#1f1f2e]">Experience Casino</span>
                <br />
                <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">Fun & Entertainment</span>
              </h1>

              <p className="text-xl text-[#4b5563] mb-8 leading-relaxed max-w-2xl">
                Play exciting casino games instantly - no account needed. Test your luck anonymously and enjoy pure entertainment without any financial pressure or risk.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🎮', label: 'Entertainment Platform' },
                  { icon: '🎲', label: 'Games of Chance' },
                  { icon: '✨', label: 'Zero Financial Risk' },
                  { icon: '🏆', label: 'Test Your Luck' },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-[#e5e7eb]"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-sm font-semibold text-[#1f1f2e]">{feature.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/games">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#a855f7]/40 transition-all duration-300 transform hover:scale-105 group">
                    Start Playing Free
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </Link>
                <Link href="/disclaimer">
                  <a className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#a855f7] text-[#a855f7] font-bold rounded-lg hover:bg-[#f5f3ff] transition-all duration-300">
                    Learn How to Play
                  </a>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Gaming Character with Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] hidden lg:flex items-center justify-center"
            >
              {/* Main Character */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-10"
              >
                <img
                  src="/images/gaming-character-custom.webp"
                  alt="Gaming Character"
                  className="h-[500px] w-auto drop-shadow-2xl" style={{height: '844px'}}
                />
              </motion.div>

              {/* Floating Trophy Badge */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 left-0 z-20"
              >
                <div className="bg-gradient-to-br from-[#ec4899] to-[#f43f5e] rounded-full p-4 shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-bold text-white mt-2 bg-[#ec4899] rounded px-2 py-1">Top 100</p>
              </motion.div>

              {/* Floating Star Badge */}
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-32 right-0 z-20"
              >
                <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full p-4 shadow-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                
              </motion.div>

              {/* Floating Games Badge */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 right-10 z-20"
              >
                <div className="bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-lg p-4 shadow-lg">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs font-bold text-white mt-2 bg-[#22c55e] rounded px-2 py-1">Learn Strategy</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Play Our Casino Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-[85%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1f1f2e] mb-4">
              Why Play Our Casino?
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Everything you need to enjoy casino entertainment in a risk-free environment
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <CheckCircle size={32} />,
                title: '100% Free to Play',
                desc: 'No deposits, no real money transactions, absolutely no financial pressure. Focus purely on entertainment and having fun.',
              },
              {
                icon: <Zap size={32} />,
                title: 'Instant Play',
                desc: 'No downloads or registration required. Start playing immediately in your browser. Instant access to all games.',
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Track Performance',
                desc: 'Real-time statistics and achievement tracking. Monitor your progress and track your gaming journey.',
              },
              {
                icon: <Users size={32} />,
                title: 'Thriving Community',
                desc: 'Connect with thousands of players worldwide. Compete, share achievements, and build friendships.',
              },
              {
                icon: <Shield size={32} />,
                title: 'Safe & Secure',
                desc: 'Enterprise-level security protects your data. Your privacy is guaranteed. No personal information is shared.',
              },
              {
                icon: <Trophy size={32} />,
                title: 'Fair Gaming',
                desc: 'Transparent algorithms ensure fair gameplay. No pay-to-win mechanics. Everyone plays on equal footing.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#f5f3ff] to-white rounded-xl border-2 border-[#e5e7eb] hover:border-[#a855f7] p-8 transition-all duration-300"
              >
                <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20 rounded-lg items-center justify-center text-[#a855f7] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1f1f2e] mb-2">{item.title}</h3>
                <p className="text-[#6b7280]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#2d2d44]">
        <div className="w-full max-w-[85%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Choose Your Game
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Click any game to start playing instantly - No registration required
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Dice Roller',
                image: '/images/game-dice-roller.webp',
                description: 'Roll the dice and predict the outcome. Test your luck with probability-based gameplay.',
                link: '/games/dice',
                color: 'from-[#a855f7] to-[#ec4899]',
              },
              {
                title: 'Slots Master',
                image: '/images/game-slots-master.webp',
                description: 'Spin the reels and match symbols. Classic slot machine fun with exciting combinations.',
                link: '/games/slots',
                color: 'from-[#ec4899] to-[#f43f5e]',
              },
              {
                title: 'Roulette Rush',
                image: '/images/game-roulette-rush.webp',
                description: 'Place your bets and spin the wheel. Experience the thrill of classic roulette.',
                link: '/games/roulette',
                color: 'from-[#f59e0b] to-[#fbbf24]',
              },
              {
                title: 'Blackjack Pro',
                image: '/images/game-blackjack-pro.webp',
                description: 'Beat the dealer in this classic card game. Try your luck at reaching 21.',
                link: '/games/blackjack',
                color: 'from-[#22c55e] to-[#16a34a]',
              },
            ].map((game, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={game.link}>
                  <a className="block bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Game Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${game.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    </div>

                    {/* Game Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#a855f7] transition-colors">
                        {game.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">
                        {game.description}
                      </p>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${game.color} text-white font-bold rounded-lg group-hover:shadow-lg transition-all duration-300`}>
                        Play Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a855f7]/5 to-[#ec4899]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1f1f2e] mb-4">How to Get Started</h2>
            <p className="text-xl text-[#6b7280]">Start playing instantly - No registration required</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                step: '1',
                title: 'Click Play Now',
                desc: 'No registration, no login, no personal information needed. Just click "Play Games" and start instantly. 100% anonymous gaming.',
              },
              {
                step: '2',
                title: 'Choose Your Game',
                desc: 'Select from our collection of exciting casino games - Slots, Roulette, Blackjack, and Dice. Each game is completely free with virtual coins.',
              },
              {
                step: '3',
                title: 'Play & Improve',
                desc: 'Test your luck and enjoy the excitement. Your progress is saved locally on your device. Play anytime, anywhere - completely free.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-[#1f1f2e] mb-2">{item.title}</h3>
                  <p className="text-[#6b7280] text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#1f1f2e] mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-[#6b7280]">Have questions? We've got answers</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-r from-[#f5f3ff] to-white rounded-lg border-2 border-[#e5e7eb] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#a855f7]/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#1f1f2e] text-left">{item.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-[#a855f7] transition-transform flex-shrink-0 ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-4 border-t-2 border-[#e5e7eb] bg-white"
                  >
                    <p className="text-[#6b7280] leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ready to Play CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#a855f7] to-[#ec4899]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">Ready to Test Your Luck?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of players enjoying casino entertainment on our free-to-play platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/games">
                <a className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#a855f7] font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Start in 60 Seconds
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Link>
              <Link href="/disclaimer">
                <a className="inline-flex items-center justify-center px-10 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300">
                  Read Disclaimer
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f3ff] border-t-2 border-[#e5e7eb]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6b7280] text-sm leading-relaxed">
            ⚠️ <strong>Responsible Gaming & Compliance:</strong> Play By Stats is a free-to-play social gaming platform designed for entertainment purposes only. No real money is involved. All players must be 18 years or older. This platform complies with responsible gaming standards. Play responsibly and have fun!
          </p>
          <Link href="/disclaimer">
            <a className="text-[#a855f7] hover:text-[#ec4899] font-semibold text-sm mt-4 inline-block transition-colors">
              Read Full Disclaimer & Terms →
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
