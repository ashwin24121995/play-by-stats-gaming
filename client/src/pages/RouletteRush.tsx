import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Trophy } from 'lucide-react';
import { gameSounds } from '@/utils/soundManager';

/**
 * Roulette Rush Game
 * Realistic 3D-style casino roulette
 * Bet on numbers, colors, or even/odd
 * Different payouts based on bet type
 */
export default function RouletteRush() {
  const [player, setPlayer] = useState<any>(null);
  const [betAmount, setBetAmount] = useState(10);
  const [betType, setBetType] = useState<'number' | 'red' | 'black' | 'even' | 'odd'>('red');
  const [betValue, setBetValue] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [gameHistory, setGameHistory] = useState<any[]>([]);

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
    const history = localStorage.getItem('rouletteHistory');
    if (history) {
      setGameHistory(JSON.parse(history));
    }
  }, []);

  // Play roulette mutation


  const handleSpin = () => {
    if (!player || player.coins < betAmount) {
      alert('Insufficient coins!');
      return;
    }

    if (betType === 'number' && (betValue < 0 || betValue > 36)) {
      alert('Please select a number between 0 and 36');
      return;
    }

    setIsSpinning(true);
    setShowResult(false);
    setResult(null);

    // Play roulette wheel spinning sound
    gameSounds.roulette.spin();
    
    // Play ball land sound after 2 seconds
    // Ball lands after spin

    // Simulate roulette spin
    const winningNumber = Math.floor(Math.random() * 37);
    const isRed = redNumbers.includes(winningNumber);
    
    let won = false;
    let multiplier = 0;

    if (betType === 'number' && winningNumber === betValue) {
      won = true;
      multiplier = 35;
    } else if (betType === 'red' && isRed) {
      won = true;
      multiplier = 1;
    } else if (betType === 'black' && !isRed && winningNumber !== 0) {
      won = true;
      multiplier = 1;
    } else if (betType === 'even' && winningNumber > 0 && winningNumber % 2 === 0) {
      won = true;
      multiplier = 1;
    } else if (betType === 'odd' && winningNumber > 0 && winningNumber % 2 === 1) {
      won = true;
      multiplier = 1;
    }

    const winAmount = won ? betAmount * (multiplier + 1) : 0;
    const wheelRotationAngle = (winningNumber * 360) / 37 + 3600;
    setWheelRotation(wheelRotationAngle);

    const gameResult = {
      winningNumber,
      isRed,
      won,
      multiplier,
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
    
    // Wait for wheel to stop spinning (3 seconds), then show result
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      setPlayer(updatedPlayer);
      localStorage.setItem('playerData', JSON.stringify(updatedPlayer));
      
      // Save to game history (keep last 15 games)
      const newHistory = [
        {
          timestamp: new Date().toISOString(),
          winningNumber,
          betType,
          betValue,
          bet: betAmount,
          won,
          winAmount,
          multiplier,
        },
        ...gameHistory,
      ].slice(0, 15);
      setGameHistory(newHistory);
      localStorage.setItem('rouletteHistory', JSON.stringify(newHistory));
      
      // Play win/loss sound after showing result
      if (won) {
        gameSounds.roulette.win();
      }
    }, 3000);
  };

  const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

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
            🎡 Roulette Rush
          </h1>
          <p className="text-xl text-gray-300">
            Spin the wheel and predict the outcome • 35x payout for exact number
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#f43f5e]/20 border-2 border-[#f43f5e] rounded-full px-6 py-2">
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
            <Card className="bg-gradient-to-r from-[#f43f5e] to-[#fbbf24] border-0 p-6">
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
          {/* Roulette Wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-8 border-2 border-[#f43f5e]/30 min-h-[500px]"
          >
            {/* Wheel Container */}
            <div className="relative w-80 h-80">
              {/* Wheel */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-8 border-[#fbbf24] shadow-2xl overflow-hidden"
                animate={{
                  rotate: isSpinning ? wheelRotation : 0,
                }}
                transition={{
                  duration: isSpinning ? 3 : 0,
                  ease: "easeOut",
                }}
              >
                {/* Wheel segments */}
                {Array.from({ length: 37 }, (_, i) => {
                  const angle = (i * 360) / 37;
                  const isRed = redNumbers.includes(i);
                  const color = i === 0 ? '#22c55e' : isRed ? '#ef4444' : '#1f1f2e';
                  
                  return (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 origin-left"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        width: '50%',
                        height: '2px',
                      }}
                    >
                      <div
                        className="absolute right-0 w-12 h-8 flex items-center justify-center text-white text-xs font-bold"
                        style={{
                          backgroundColor: color,
                          transform: 'translateX(50%) translateY(-50%)',
                          borderRadius: '4px',
                        }}
                      >
                        {i}
                      </div>
                    </div>
                  );
                })}
                
                {/* Center circle */}
                <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] border-4 border-white shadow-lg"></div>
              </motion.div>
              
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-[#fbbf24]"></div>
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
                  <p className="text-4xl font-bold text-white mb-2">
                    {result.winningNumber}
                  </p>
                  <p className="text-lg text-white mb-2">
                    {result.winningNumber === 0 ? 'Green' : result.isRed ? 'Red' : 'Black'}
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
            <Card className="bg-[#1e293b] border-[#f43f5e]/30 p-6">
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
                      className={betAmount === amount ? 'bg-[#f43f5e] hover:bg-[#e11d48]' : 'border-[#f43f5e] text-white hover:bg-[#f43f5e]/20'}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Bet Type */}
              <div className="mb-6">
                <label className="text-white text-sm mb-2 block">Bet Type</label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { type: 'red' as const, label: 'Red (1:1)', color: 'bg-red-600' },
                    { type: 'black' as const, label: 'Black (1:1)', color: 'bg-gray-900' },
                    { type: 'number' as const, label: 'Number (35:1)', color: 'bg-[#fbbf24]' },
                  ].map((option) => (
                    <Button
                      key={option.type}
                      onClick={() => setBetType(option.type)}
                      variant={betType === option.type ? 'default' : 'outline'}
                      className={`${betType === option.type ? option.color : 'border-[#f43f5e]'} text-white text-xs`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { type: 'even' as const, label: 'Even (1:1)' },
                    { type: 'odd' as const, label: 'Odd (1:1)' },
                  ].map((option) => (
                    <Button
                      key={option.type}
                      onClick={() => setBetType(option.type)}
                      variant={betType === option.type ? 'default' : 'outline'}
                      className={betType === option.type ? 'bg-[#f43f5e] hover:bg-[#e11d48]' : 'border-[#f43f5e] text-white hover:bg-[#f43f5e]/20'}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Number Selection */}
              {betType === 'number' && (
                <div className="mb-6">
                  <label className="text-white text-sm mb-2 block">
                    Select Number (0-36) • Current: {betValue}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="36"
                    value={betValue}
                    onChange={(e) => setBetValue(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-[#0f172a] border-2 border-[#f43f5e] rounded-lg text-white"
                    disabled={isSpinning}
                  />
                </div>
              )}

              {/* Spin Button */}
              <Button
                onClick={handleSpin}
                disabled={isSpinning || !player || player.coins < betAmount}
                className="w-full bg-gradient-to-r from-[#f43f5e] to-[#fbbf24] hover:from-[#e11d48] hover:to-[#f59e0b] text-white font-bold py-6 text-lg"
              >
                {isSpinning ? '🎡 Spinning...' : '🎡 Spin Wheel'}
              </Button>

              {player && player.coins < betAmount && (
                <p className="text-red-400 text-sm mt-2 text-center">
                  Insufficient coins! You have {player.coins} coins.
                </p>
              )}
            </Card>

            {/* How to Play */}
            <Card className="bg-[#1e293b] border-[#f43f5e]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-3">How to Play</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Choose your bet amount (10-100 coins)</li>
                <li>• Select bet type: Red, Black, Even, Odd, or Number</li>
                <li>• Click "Spin Wheel" to play</li>
                <li>• Exact number match wins 35x your bet!</li>
                <li>• Color/Even/Odd matches win 1x your bet</li>
              </ul>
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
