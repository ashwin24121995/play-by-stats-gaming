import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

/**
 * Leaderboard Page
 * Global rankings for all players
 * Daily, Weekly, Monthly, and All-Time periods
 */
export default function Leaderboard() {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'alltime'>('alltime');

  // Get leaderboard data
  const leaderboard: any[] = [];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-8 h-8 text-[#fbbf24]" />;
    if (rank === 2) return <Medal className="w-8 h-8 text-[#94a3b8]" />;
    if (rank === 3) return <Award className="w-8 h-8 text-[#d97706]" />;
    return <span className="text-2xl font-bold text-gray-400">#{rank}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-[#fbbf24] to-[#f59e0b]';
    if (rank === 2) return 'bg-gradient-to-r from-[#94a3b8] to-[#64748b]';
    if (rank === 3) return 'bg-gradient-to-r from-[#d97706] to-[#b45309]';
    return 'bg-[#1e293b]';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] pt-24 pb-12 px-4">
      <div className="w-full max-w-[85%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            🏆 Global Leaderboard
          </h1>
          <p className="text-xl text-gray-300">
            Compete with players worldwide • Climb the rankings
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#a855f7]/20 border-2 border-[#a855f7] rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-white font-bold">100% FREE • NO REAL MONEY • PURE FUN</span>
          </div>
        </motion.div>

        {/* Period Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="bg-[#1e293b] border-[#a855f7]/30 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 'daily' as const, label: '📅 Daily', desc: 'Last 24 hours' },
                { value: 'weekly' as const, label: '📊 Weekly', desc: 'Last 7 days' },
                { value: 'monthly' as const, label: '📈 Monthly', desc: 'Last 30 days' },
                { value: 'alltime' as const, label: '🌟 All Time', desc: 'Since launch' },
              ].map((option) => (
                <Button
                  key={option.value}
                  onClick={() => setPeriod(option.value)}
                  variant={period === option.value ? 'default' : 'outline'}
                  className={`flex flex-col h-auto py-4 ${
                    period === option.value
                      ? 'bg-gradient-to-r from-[#a855f7] to-[#ec4899]'
                      : 'border-[#a855f7] text-white hover:bg-[#a855f7]/20'
                  }`}
                >
                  <span className="text-lg font-bold">{option.label}</span>
                  <span className="text-xs opacity-80">{option.desc}</span>
                </Button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-[#1e293b] border-[#a855f7]/30 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] p-6">
              <div className="grid grid-cols-12 gap-4 text-white font-bold">
                <div className="col-span-2 text-center">Rank</div>
                <div className="col-span-6">Player</div>
                <div className="col-span-4 text-right">Total Coins</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[#a855f7]/20">
              {false ? (
                <div className="p-12 text-center text-gray-400">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                  <p>Loading leaderboard...</p>
                </div>
              ) : leaderboard && leaderboard.length > 0 ? (
                leaderboard.map((entry, index) => {
                  const rank = index + 1;
                  return (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`${getRankBg(rank)} hover:bg-[#a855f7]/10 transition-colors`}
                    >
                      <div className="grid grid-cols-12 gap-4 p-6 items-center">
                        {/* Rank */}
                        <div className="col-span-2 flex justify-center">
                          {getRankIcon(rank)}
                        </div>

                        {/* Player Info */}
                        <div className="col-span-6">
                          <p className="text-white font-bold text-lg">
                            Player #{entry.playerId}
                          </p>
                          <p className="text-gray-400 text-sm">
                            Anonymous Player
                          </p>
                        </div>

                        {/* Total Coins */}
                        <div className="col-span-4 text-right">
                          <p className="text-white font-bold text-2xl">
                            {entry.totalCoins.toLocaleString()}
                          </p>
                          <p className="text-gray-400 text-sm">coins</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="p-12 text-center text-gray-400">
                  <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">No rankings yet</p>
                  <p className="text-sm">Be the first to climb the leaderboard!</p>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {[
            {
              icon: <Trophy className="w-8 h-8" />,
              title: 'Compete Globally',
              desc: 'Challenge players from around the world',
              color: 'from-[#fbbf24] to-[#f59e0b]',
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: 'Track Progress',
              desc: 'Monitor your ranking across different periods',
              color: 'from-[#a855f7] to-[#ec4899]',
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: 'Earn Recognition',
              desc: 'Top players get featured on the leaderboard',
              color: 'from-[#ec4899] to-[#f43f5e]',
            },
          ].map((card, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${card.color} border-0 p-6 text-white`}
            >
              <div className="flex items-center gap-4 mb-3">
                {card.icon}
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
              <p className="text-white/90">{card.desc}</p>
            </Card>
          ))}
        </motion.div>

        {/* How Rankings Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="bg-[#1e293b] border-[#a855f7]/30 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">How Rankings Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-bold text-white mb-2">🎮 Play Games</h4>
                <p className="text-sm">
                  Every game you win adds to your total coin count. The more you win, the higher you climb!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">📊 Multiple Periods</h4>
                <p className="text-sm">
                  Rankings are tracked daily, weekly, monthly, and all-time. Compete in your preferred timeframe.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">🏆 Top 100</h4>
                <p className="text-sm">
                  Only the top 100 players are displayed. Keep winning to secure your spot!
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">✨ Fair Play</h4>
                <p className="text-sm">
                  All rankings are based purely on gameplay. No pay-to-win mechanics.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            ⚠️ <strong>Entertainment Only:</strong> Rankings are for fun and competition. No real prizes or money involved. Must be 18+.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
