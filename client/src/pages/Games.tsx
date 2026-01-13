import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Dice6, Gamepad2, RotateCcw, Zap } from 'lucide-react';

/**
 * Games Page - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899) with detailed game information
 * Features: Game showcase with descriptions, free-to-play emphasis, no real money messaging
 */
export default function Games() {
  const games = [
    {
      id: 1,
      name: 'Dice Roller',
      description: 'Roll the dice and test your luck! Simple, exciting, and completely free.',
      details: 'Experience the thrill of rolling virtual dice with realistic physics and animations. Compete with other players on the leaderboard and track your rolling statistics. No real money involved - pure entertainment and skill-based gaming.',
      icon: Dice6,
      image: '/images/game-dice-roller.webp',
      color: 'from-[#a855f7] to-[#ec4899]',
      features: ['Real-time Leaderboards', 'Stat Tracking', '100% Free', 'No Registration Required'],
    },
    {
      id: 2,
      name: 'Slots Master',
      description: 'Spin the reels and enjoy classic slot machine fun. Free coins every day!',
      details: 'Enjoy the excitement of slot machines without any financial risk. Earn free coins daily, unlock special achievements, and climb the global rankings. Our slots are designed purely for entertainment with fair odds and transparent mechanics.',
      icon: RotateCcw,
      image: '/images/game-slots-master.webp',
      color: 'from-[#ec4899] to-[#f43f5e]',
      features: ['Daily Free Coins', 'Achievement System', 'Fair Odds', 'Social Sharing'],
    },
    {
      id: 3,
      name: 'Roulette Rush',
      description: 'Spin the wheel and predict the outcome. Fast-paced and thrilling!',
      details: 'Experience the suspense of roulette in a safe, entertainment-focused environment. Practice strategy, learn probability, and enjoy the rush of the game without any real-world consequences. Perfect for learning and having fun.',
      icon: Gamepad2,
      image: '/images/game-roulette-rush.webp',
      color: 'from-[#f43f5e] to-[#fbbf24]',
      features: ['Strategy Learning', 'Instant Results', 'No Real Money', 'Instant Play'],
    },
    {
      id: 4,
      name: 'Blackjack Pro',
      description: 'Play classic blackjack against the dealer. Master the strategy!',
      details: 'Test your card skills in our free blackjack game. Learn basic strategy, improve your decision-making, and enjoy competitive gameplay. All wins are virtual achievements that contribute to your profile and leaderboard position.',
      icon: Zap,
      image: '/images/game-blackjack-pro.webp',
      color: 'from-[#fbbf24] to-[#a855f7]',
      features: ['Strategy Guide', 'Skill-Based', 'Achievement Badges', 'Multiplayer Challenges'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f3ff]">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Games</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Explore our collection of free-to-play casino games. No real money, no financial risk, just pure entertainment and fun!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Free-to-Play Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-[#a855f7]/10 to-[#ec4899]/10 border-2 border-[#a855f7] rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-3">
            ✨ 100% Free • No Real Money • Pure Entertainment ✨
          </h2>
          <p className="text-[#6b7280] text-lg">
            All our games are completely free to play. You earn virtual coins and achievements, not real money. Play for fun, learn strategy, and compete with friends - with zero financial risk!
          </p>
        </motion.div>
      </div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Game Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#a855f7]/20 to-[#ec4899]/20">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Game Header */}
                  <div className={`bg-gradient-to-r ${game.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-2">{game.name}</h3>
                      <p className="text-white/90 text-lg">{game.description}</p>
                    </div>
                  </div>

                  {/* Game Details */}
                  <div className="p-8">
                    <p className="text-[#6b7280] text-base leading-relaxed mb-6">
                      {game.details}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-[#1a1a2e] mb-4">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {game.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#a855f7] rounded-full"></span>
                            <span className="text-[#6b7280] text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="/">
                      <a className="w-full inline-block px-6 py-3 bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-bold rounded-lg text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Play {game.name}
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Why Our Games Section */}
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Play By Stats Games?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '100% Free Forever',
                description: 'No hidden charges, no premium features requiring payment. Every game is completely free to play, forever.',
              },
              {
                title: 'Zero Financial Risk',
                description: 'Virtual coins only. You cannot win or lose real money. Play purely for entertainment and skill development.',
              },
              {
                title: 'Fair & Transparent',
                description: 'All games use fair algorithms. No rigged outcomes. Your success depends on strategy and luck, not manipulation.',
              },
              {
                title: 'Track Your Stats',
                description: 'Monitor your performance with detailed statistics. Compete on leaderboards and earn achievements.',
              },
              {
                title: 'Safe & Secure',
                description: 'No real money transactions. Your data is protected. Play with complete peace of mind.',
              },
              {
                title: 'Community Focused',
                description: 'Compete with friends, share achievements, and be part of a thriving gaming community.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-[#a855f7] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-[#a855f7]">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl text-white/90 mb-8">
            Start playing our games right now. No registration required. No real money. Just pure fun!
          </p>
          <Link href="/">
            <a className="inline-block px-8 py-4 bg-white text-[#a855f7] font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Playing Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
