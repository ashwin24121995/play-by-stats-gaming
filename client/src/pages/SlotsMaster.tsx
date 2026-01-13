import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Trophy } from 'lucide-react';

/**
 * Slots Master Game
 * Realistic 3D-style casino slot machine
 * Three reels with various symbols
 * Different multipliers based on matches
 */
export default function SlotsMaster() {
  const [player, setPlayer] = useState<any>(null);
  const [betAmount, setBetAmount] = useState(10);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  // Get player profile
  const { data: playerData } = trpc.game.getPlayer.useQuery();

  useEffect(() => {
    if (playerData) {
      setPlayer(playerData);
    }
  }, [playerData]);

  // Play slots mutation
  const playSlotsMutation = trpc.game.playSlots.useMutation({
    onSuccess: (data) => {
      setResult(data);
      setPlayer(data.player);
      setShowResult(true);
      setTimeout(() => {
        setIsSpinning(false);
      }, 3000);
    },
    onError: (error) => {
      console.error('Error playing slots:', error);
      setIsSpinning(false);
    },
  });

  const handleSpin = () => {
    if (!player || player.coins < betAmount) {
      alert('Insufficient coins!');
      return;
    }

    setIsSpinning(true);
    setShowResult(false);
    setResult(null);

    playSlotsMutation.mutate({
      playerId: player.id,
      betAmount,
    });
  };

  const SlotReel = ({ symbol, isSpinning: spinning }: { symbol: string; isSpinning: boolean }) => {
    const symbols = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣"];
    
    return (
      <div className="relative w-32 h-40 bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-xl border-4 border-[#a855f7] overflow-hidden shadow-2xl">
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          animate={spinning ? {
            y: [-400, 0],
          } : {}}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        >
          {spinning ? (
            // Show scrolling symbols during spin
            <div className="flex flex-col gap-4">
              {[...symbols, ...symbols, ...symbols].map((s, i) => (
                <div key={i} className="text-6xl">
                  {s}
                </div>
              ))}
            </div>
          ) : (
            // Show final symbol
            <div className="text-7xl">
              {symbol}
            </div>
          )}
        </motion.div>
        
        {/* Highlight line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#ec4899] opacity-50 transform -translate-y-1/2"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            🎰 Slots Master
          </h1>
          <p className="text-xl text-gray-300">
            Spin the reels for big wins • Match 3 symbols for massive payouts
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#a855f7]/20 border-2 border-[#a855f7] rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-white font-bold">100% FREE • NO REAL MONEY • PURE FUN</span>
          </div>
        </motion.div>

        {/* Player Stats */}
        {player && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-[#ec4899] to-[#f43f5e] border-0 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div className="flex items-center gap-3">
                  <Coins className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Virtual Coins</p>
                    <p className="text-2xl font-bold">{player.coins}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Games Won</p>
                    <p className="text-2xl font-bold">{player.totalWins}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8" />
                  <div>
                    <p className="text-sm opacity-90">Win Rate</p>
                    <p className="text-2xl font-bold">
                      {player.totalWins + player.totalLosses > 0
                        ? Math.round((player.totalWins / (player.totalWins + player.totalLosses)) * 100)
                        : 0}%
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Slot Machine */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border-2 border-[#ec4899]/30 min-h-[500px]"
          >
            {/* Slot Machine Frame */}
            <div className="bg-gradient-to-b from-[#a855f7] to-[#ec4899] rounded-3xl p-8 shadow-2xl">
              <div className="flex gap-4 mb-6">
                {result ? (
                  <>
                    <SlotReel symbol={result.reel1} isSpinning={isSpinning} />
                    <SlotReel symbol={result.reel2} isSpinning={isSpinning} />
                    <SlotReel symbol={result.reel3} isSpinning={isSpinning} />
                  </>
                ) : (
                  <>
                    <SlotReel symbol="🍒" isSpinning={isSpinning} />
                    <SlotReel symbol="🍒" isSpinning={isSpinning} />
                    <SlotReel symbol="🍒" isSpinning={isSpinning} />
                  </>
                )}
              </div>

              {/* Payout Table */}
              <div className="bg-[#0f172a]/50 rounded-xl p-4 text-white text-sm">
                <p className="font-bold mb-2 text-center">💰 Payouts</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>7️⃣ 7️⃣ 7️⃣ → 50x</div>
                  <div>💎 💎 💎 → 25x</div>
                  <div>🍇 🍇 🍇 → 10x</div>
                  <div>Any 2 → 2x</div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {showResult && result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`mt-6 text-center p-6 rounded-xl ${
                    result.won
                      ? 'bg-gradient-to-r from-[#22c55e] to-[#16a34a]'
                      : 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'
                  }`}
                >
                  <p className="text-3xl font-bold text-white mb-2">
                    {result.won ? `${result.multiplier}x Multiplier!` : 'No Match'}
                  </p>
                  <p className="text-xl text-white">
                    {result.won ? `🎉 You Won ${result.winAmount} Coins!` : '😢 Try Again!'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <Card className="bg-[#1e293b] border-[#ec4899]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Place Your Bet</h3>
              
              {/* Bet Amount */}
              <div className="mb-6">
                <label className="text-white text-sm mb-2 block">Bet Amount</label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 25, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => setBetAmount(amount)}
                      variant={betAmount === amount ? 'default' : 'outline'}
                      className={betAmount === amount ? 'bg-[#ec4899] hover:bg-[#db2777]' : 'border-[#ec4899] text-white hover:bg-[#ec4899]/20'}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Spin Button */}
              <Button
                onClick={handleSpin}
                disabled={isSpinning || !player || player.coins < betAmount}
                className="w-full bg-gradient-to-r from-[#ec4899] to-[#f43f5e] hover:from-[#db2777] hover:to-[#e11d48] text-white font-bold py-6 text-lg"
              >
                {isSpinning ? '🎰 Spinning...' : '🎰 Spin Reels'}
              </Button>

              {player && player.coins < betAmount && (
                <p className="text-red-400 text-sm mt-2 text-center">
                  Insufficient coins! You have {player.coins} coins.
                </p>
              )}
            </Card>

            {/* How to Play */}
            <Card className="bg-[#1e293b] border-[#ec4899]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">How to Play</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Choose your bet amount (10-100 coins)</li>
                <li>• Click "Spin Reels" to play</li>
                <li>• Match 3 symbols for big wins!</li>
                <li>• 7️⃣ 7️⃣ 7️⃣ pays 50x your bet</li>
                <li>• 💎 💎 💎 pays 25x your bet</li>
                <li>• Any 2 matching symbols pays 2x</li>
              </ul>
            </Card>

            {/* Symbol Guide */}
            <Card className="bg-[#1e293b] border-[#ec4899]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">Symbols</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣"].map((symbol) => (
                  <div key={symbol} className="text-4xl">
                    {symbol}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            ⚠️ <strong>Entertainment Only:</strong> This is a free-to-play game. No real money involved. Must be 18+.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
