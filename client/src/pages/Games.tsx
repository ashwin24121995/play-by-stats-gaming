import { motion } from 'framer-motion';
import { Dices, RotateCcw, Spade } from 'lucide-react';
import LazyBackgroundSection from '@/components/LazyBackgroundSection';

/**
 * Games Page
 * Showcase of available games with 3D card design
 * Design: Deep purple background with golden accents, floating animations
 */
export default function Games() {
  const games = [
    {
      id: 1,
      name: 'Lucky Slots',
      description: 'Spin the reels and test your luck with our classic slot machine game. Free spins, exciting animations, and instant wins!',
      icon: <Dices size={32} />,
      color: 'from-purple-600 to-purple-800',
      href: '#play-slots',
    },
    {
      id: 2,
      name: 'Roulette Spin',
      description: 'Place your bets and watch the wheel spin. Choose your numbers, colors, or combinations for thrilling gameplay.',
      icon: <RotateCcw size={32} />,
      color: 'from-indigo-600 to-indigo-800',
      href: '#play-roulette',
    },
    {
      id: 3,
      name: 'Blackjack Pro',
      description: 'Classic card game where strategy meets luck. Beat the dealer and showcase your skills in this timeless favorite.',
      icon: <Spade size={32} />,
      color: 'from-violet-600 to-violet-800',
      href: '#play-blackjack',
    },
    {
      id: 4,
      name: 'Dice Roller',
      description: 'Roll the dice and predict outcomes. Simple yet engaging gameplay with multiple betting options and instant results.',
      icon: <Dices size={32} />,
      color: 'from-fuchsia-600 to-fuchsia-800',
      href: '#play-dice',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      {/* Hero Section */}
      <LazyBackgroundSection
        imageSrc="/images/games-showcase-bg.webp"
        className="relative h-96 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 to-[#1e293b]/90"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
          >
            Explore Our Games
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#cbd5e1] max-w-2xl"
          >
            Choose from our collection of exciting free-to-play games. No real money, pure entertainment!
          </motion.p>
        </div>
      </LazyBackgroundSection>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl border-2 border-[#14b8a6]/30 hover:border-[#14b8a6] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#14b8a6]/20 p-6 flex flex-col"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#14b8a6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon */}
                <div className="relative z-10 mb-4 inline-flex w-16 h-16 bg-gradient-to-br from-[#14b8a6]/20 to-[#0d9488]/20 rounded-lg items-center justify-center text-[#14b8a6] group-hover:scale-110 transition-transform duration-300">
                  {game.icon}
                </div>

                {/* Content */}
                <h3
                  className="relative z-10 text-xl font-bold text-white mb-2 group-hover:text-[#14b8a6] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
                >
                  {game.name}
                </h3>
                <p className="relative z-10 text-[#cbd5e1] text-sm mb-6 flex-grow">
                  {game.description}
                </p>

                {/* CTA Button */}
                <button className="relative z-10 w-full px-4 py-2 bg-gradient-to-r from-[#14b8a6] to-[#0d9488] text-[#0f172a] font-bold rounded-lg hover:shadow-lg hover:shadow-[#14b8a6]/50 transition-all duration-300 transform group-hover:scale-105">
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1e293b]/50 py-20 border-t border-[#14b8a6]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center text-white mb-12"
            style={{ fontFamily: 'Poppins, sans-serif', fontStyle: 'italic' }}
          >
            Why Play With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '🎮 Free to Play',
                desc: 'No real money, no downloads, no registration required.',
              },
              {
                title: '🛡️ Safe & Secure',
                desc: 'Your data is protected with enterprise-level security.',
              },
              {
                title: '⚡ Instant Play',
                desc: 'Play directly in your browser on any device.',
              },
              {
                title: '👥 Community',
                desc: 'Join thousands of players and compete on leaderboards.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg border border-[#14b8a6]/20 p-6 text-center hover:border-[#14b8a6] transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#14b8a6] mb-2">{feature.title}</h3>
                <p className="text-[#cbd5e1] text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
