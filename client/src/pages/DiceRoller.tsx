import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Trophy } from 'lucide-react';
import { gameSounds } from '@/utils/soundManager';

/**
 * Dice Roller Game
 * Realistic 3D-style casino dice game
 * Players predict the sum of two dice (2-12)
 * 10x payout for exact match
 */
export default function DiceRoller() {
  const [player, setPlayer] = useState<any>(null);
  const [betAmount, setBetAmount] = useState(10);
  const [prediction, setPrediction] = useState(7);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameHistory, setGameHistory] = useState<any[]>([]);
  const [showStats, setShowStats] = useState(false);

  // Dice probability calculator
  const diceProbabilities: Record<number, { ways: number; probability: string }> = {
    2: { ways: 1, probability: '2.78%' },
    3: { ways: 2, probability: '5.56%' },
    4: { ways: 3, probability: '8.33%' },
    5: { ways: 4, probability: '11.11%' },
    6: { ways: 5, probability: '13.89%' },
    7: { ways: 6, probability: '16.67%' },
    8: { ways: 5, probability: '13.89%' },
    9: { ways: 4, probability: '11.11%' },
    10: { ways: 3, probability: '8.33%' },
    11: { ways: 2, probability: '5.56%' },
    12: { ways: 1, probability: '2.78%' },
  };

  // Get player profile and game history from localStorage
  useEffect(() => {
    const playerData = localStorage.getItem('playerData');
    if (playerData) {
      setPlayer(JSON.parse(playerData));
    } else {
      // Initialize default player data
      const defaultPlayer = {
        coins: 1000,
        totalWins: 0,
        totalLosses: 0,
        totalGames: 0
      };
      localStorage.setItem('playerData', JSON.stringify(defaultPlayer));
      setPlayer(defaultPlayer);
    }

    // Load game history
    const history = localStorage.getItem('diceHistory');
    if (history) {
      setGameHistory(JSON.parse(history));
    }
  }, []);

  const handleRoll = () => {
    if (!player || player.coins < betAmount) {
      alert('Insufficient coins!');
      return;
    }

    setIsRolling(true);
    setShowResult(false);
    setResult(null);

    // Play dice roll sound
    gameSounds.dice.roll();

    // Simulate dice roll
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2;
    const won = total === prediction;
    const winAmount = won ? betAmount * 10 : 0;

    const gameResult = {
      dice1,
      dice2,
      total,
      won,
      winAmount,
    };

    // Store result but don't show it yet
    setResult(gameResult);
    
    // Update player stats
    const updatedPlayer = {
      ...player,
      coins: player.coins - betAmount + winAmount,
      totalWins: player.totalWins + (won ? 1 : 0),
      totalLosses: player.totalLosses + (won ? 0 : 1),
    };
    
    // Wait for dice to finish rolling (2 seconds), then show result
    setTimeout(() => {
      setIsRolling(false);
      setShowResult(true);
      setPlayer(updatedPlayer);
      localStorage.setItem('playerData', JSON.stringify(updatedPlayer));
      
      // Save to game history (keep last 15 games)
      const newHistory = [
        {
          timestamp: new Date().toISOString(),
          prediction,
          result: total,
          dice1,
          dice2,
          bet: betAmount,
          won,
          winAmount,
        },
        ...gameHistory,
      ].slice(0, 15);
      setGameHistory(newHistory);
      localStorage.setItem('diceHistory', JSON.stringify(newHistory));
      
      // Play win/loss sound after showing result
      if (won) {
        gameSounds.dice.win();
      } else {
        gameSounds.dice.loss();
      }
    }, 2000);
  };

  const DiceFace = ({ value, isRolling: rolling }: { value: number; isRolling: boolean }) => {
    const dots = Array.from({ length: value }, (_, i) => i);
    
    return (
      <motion.div
        className="relative w-24 h-24 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-2xl border-2 border-gray-300"
        animate={rolling ? {
          rotateX: [0, 360, 720, 1080],
          rotateY: [0, 360, 720, 1080],
          rotateZ: [0, 180, 360, 540],
        } : {}}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dice dots */}
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <div className={`grid gap-2 w-full h-full ${
            value === 1 ? 'grid-cols-1' :
            value === 2 || value === 3 ? 'grid-cols-2' :
            'grid-cols-3'
          }`}>
            {value === 1 && (
              <div className="col-span-1 flex items-center justify-center">
                <div className="w-4 h-4 bg-[#a855f7] rounded-full shadow-lg" />
              </div>
            )}
            {value === 2 && (
              <>
                <div className="flex items-start justify-start">
                  <div className="w-4 h-4 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-end justify-end">
                  <div className="w-4 h-4 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
              </>
            )}
            {value === 3 && (
              <>
                <div className="flex items-start justify-start">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-end justify-end col-start-2">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
              </>
            )}
            {value === 4 && (
              <>
                {dots.map((i) => (
                  <div key={i} className={`flex ${i % 2 === 0 ? 'items-start justify-start' : 'items-end justify-end'} ${i < 2 ? '' : 'col-start-3'}`}>
                    <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                  </div>
                ))}
              </>
            )}
            {value === 5 && (
              <>
                <div className="flex items-start justify-start">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-center justify-center row-span-2">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-start justify-end">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-end justify-start">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
                <div className="flex items-end justify-end">
                  <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                </div>
              </>
            )}
            {value === 6 && (
              <>
                {dots.map((i) => (
                  <div key={i} className={`flex ${i % 2 === 0 ? 'items-start' : 'items-end'} ${i < 3 ? 'justify-start' : 'justify-end'} ${i === 2 || i === 5 ? 'col-start-3' : i === 1 || i === 4 ? 'col-start-1' : ''}`}>
                    <div className="w-3 h-3 bg-[#a855f7] rounded-full shadow-lg" />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] pt-16 pb-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-3"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            🎲 Dice Roller
          </h1>
          <p className="text-xl text-gray-300">
            Predict the sum of two dice • 10x payout for exact match
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
            className="mb-3"
          >
            <Card className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] border-0 p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Dice Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-4 border-2 border-[#a855f7]/30"
          >
            <div className="flex gap-8 mb-8">
              {result ? (
                <>
                  <DiceFace value={result.dice1} isRolling={isRolling} />
                  <DiceFace value={result.dice2} isRolling={isRolling} />
                </>
              ) : (
                <>
                  <DiceFace value={6} isRolling={isRolling} />
                  <DiceFace value={6} isRolling={isRolling} />
                </>
              )}
            </div>

            <AnimatePresence>
              {showResult && result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`text-center p-6 rounded-xl ${
                    result.won
                      ? 'bg-gradient-to-r from-[#22c55e] to-[#16a34a]'
                      : 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'
                  }`}
                >
                  <p className="text-3xl font-bold text-white mb-2">
                    Total: {result.total}
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
            <Card className="bg-[#1e293b] border-[#a855f7]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Place Your Bet</h3>
              
              {/* Bet Amount */}
              <div className="mb-6">
                <label className="text-white text-sm mb-2 block">Bet Amount</label>
                <div className="flex gap-2">
                  {[10, 25, 50, 100].map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => setBetAmount(amount)}
                      variant={betAmount === amount ? 'default' : 'outline'}
                      className={betAmount === amount ? 'bg-[#a855f7] hover:bg-[#9333ea]' : 'border-[#a855f7] text-white hover:bg-[#a855f7]/20'}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Prediction */}
              <div className="mb-6">
                <label className="text-white text-sm mb-2 block">
                  Predict Sum (2-12) • Current: {prediction}
                </label>
                <input
                  type="range"
                  min="2"
                  max="12"
                  value={prediction}
                  onChange={(e) => setPrediction(Number(e.target.value))}
                  className="w-full h-2 bg-[#0f172a] rounded-lg appearance-none cursor-pointer accent-[#a855f7]"
                  disabled={isRolling}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>2</span>
                  <span>7</span>
                  <span>12</span>
                </div>
                {/* Probability Display */}
                <div className="mt-3 p-3 bg-[#0f172a] rounded-lg border border-[#a855f7]/30">
                  <p className="text-white text-sm">
                    <span className="text-[#a855f7] font-bold">Odds:</span> {diceProbabilities[prediction].probability} chance
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {diceProbabilities[prediction].ways} way{diceProbabilities[prediction].ways > 1 ? 's' : ''} to roll {prediction}
                  </p>
                </div>
              </div>

              {/* Roll Button */}
              <Button
                onClick={handleRoll}
                disabled={isRolling || !player || player.coins < betAmount}
                className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white font-bold py-6 text-lg"
              >
                {isRolling ? '🎲 Rolling...' : '🎲 Roll Dice'}
              </Button>

              {player && player.coins < betAmount && (
                <p className="text-red-400 text-sm mt-2 text-center">
                  Insufficient coins! You have {player.coins} coins.
                </p>
              )}
            </Card>

            {/* How to Play */}
            <Card className="bg-[#1e293b] border-[#a855f7]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">How to Play</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Choose your bet amount (10-100 coins)</li>
                <li>• Predict the sum of two dice (2-12)</li>
                <li>• Click "Roll Dice" to play</li>
                <li>• Exact match wins 10x your bet!</li>
                <li>• Start with 1000 free coins</li>
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Game History */}
        {gameHistory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <Card className="bg-[#1e293b] border-[#a855f7]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-4">📊 Recent Games</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-[#a855f7]/30">
                      <th className="text-left py-2">Time</th>
                      <th className="text-center py-2">Prediction</th>
                      <th className="text-center py-2">Result</th>
                      <th className="text-center py-2">Dice</th>
                      <th className="text-right py-2">Bet</th>
                      <th className="text-right py-2">Win/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gameHistory.slice(0, 10).map((game, index) => (
                      <tr key={index} className="border-b border-[#a855f7]/10 text-gray-300">
                        <td className="py-2">
                          {new Date(game.timestamp).toLocaleTimeString()}
                        </td>
                        <td className="text-center">{game.prediction}</td>
                        <td className="text-center font-bold">{game.result}</td>
                        <td className="text-center text-xs">
                          {game.dice1} + {game.dice2}
                        </td>
                        <td className="text-right">{game.bet}</td>
                        <td className={`text-right font-bold ${
                          game.won ? 'text-[#22c55e]' : 'text-[#ef4444]'
                        }`}>
                          {game.won ? `+${game.winAmount}` : `-${game.bet}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

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
