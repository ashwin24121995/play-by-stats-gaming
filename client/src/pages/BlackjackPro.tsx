import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Coins, TrendingUp, Trophy } from 'lucide-react';
import { gameSounds } from '@/utils/soundManager';

/**
 * Blackjack Pro Game
 * Realistic 3D-style casino blackjack
 * Classic 21 card game against the dealer
 * Hit, Stand, and strategic gameplay
 */
export default function BlackjackPro() {
  const [player, setPlayer] = useState<any>(null);
  const [betAmount, setBetAmount] = useState(10);
  const [gameState, setGameState] = useState<'betting' | 'playing' | 'finished'>('betting');
  const [playerHand, setPlayerHand] = useState<number[]>([]);
  const [dealerHand, setDealerHand] = useState<number[]>([]);
  const [playerValue, setPlayerValue] = useState(0);
  const [dealerValue, setDealerValue] = useState(0);
  const [result, setResult] = useState<any>(null);
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
    const history = localStorage.getItem('blackjackHistory');
    if (history) {
      setGameHistory(JSON.parse(history));
    }
  }, []);

  // Play blackjack mutation


  const handleDeal = () => {
    if (!player || player.coins < betAmount) {
      alert('Insufficient coins!');
      return;
    }

    setGameState('playing');
    setResult(null);
    
    // Play shuffle sound before dealing
    gameSounds.blackjack.shuffle();
    
    // Play card dealing sounds with delays
    setTimeout(() => gameSounds.blackjack.deal(0), 300);
    setTimeout(() => gameSounds.blackjack.deal(0), 500);
    setTimeout(() => gameSounds.blackjack.deal(0), 700);
    setTimeout(() => gameSounds.blackjack.deal(0), 900);
    
    // Game logic will be implemented here
  };

  const handleHit = () => {
    // Play card flip sound
    gameSounds.blackjack.flip();
    
    // Game logic will be implemented here
  };

  const handleStand = () => {
    // Play card flip sound for dealer's cards
    gameSounds.blackjack.flip();
    
    // Game logic will be implemented here
  };

  const handleNewGame = () => {
    setGameState('betting');
    setPlayerHand([]);
    setDealerHand([]);
    setPlayerValue(0);
    setDealerValue(0);
    setResult(null);
  };

  const getCardDisplay = (value: number) => {
    if (value === 1) return 'A';
    if (value === 11) return 'J';
    if (value === 12) return 'Q';
    if (value === 13) return 'K';
    return value.toString();
  };

  const PlayingCard = ({ value, hidden = false }: { value: number; hidden?: boolean }) => {
    const suits = ['♠', '♥', '♦', '♣'];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const isRed = suit === '♥' || suit === '♦';

    return (
      <motion.div
        initial={{ opacity: 0, y: -20, rotateY: 180 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-24 h-36 bg-white rounded-lg shadow-2xl border-2 border-gray-300 flex flex-col items-center justify-center"
      >
        {hidden ? (
          <div className="w-full h-full bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-lg flex items-center justify-center">
            <div className="text-4xl">🎴</div>
          </div>
        ) : (
          <>
            <div className={`text-3xl font-bold ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
              {getCardDisplay(value)}
            </div>
            <div className={`text-4xl ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
              {suit}
            </div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] pt-4 pb-1 px-4">
      <div className="w-full max-w-[85%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-1"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            🃏 Blackjack Pro
          </h1>
          <p className="text-xl text-gray-300">
            Beat the dealer to 21 • Classic casino card game
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#fbbf24]/20 border-2 border-[#fbbf24] rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse"></span>
            <span className="text-white font-bold">100% FREE • NO REAL MONEY • PURE FUN</span>
          </div>
        </motion.div>

        {/* Player Stats */}
        {player && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-1"
          >
            <Card className="bg-gradient-to-r from-[#fbbf24] to-[#a855f7] border-0 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-white">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Game Table */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#16a34a] to-[#15803d] rounded-2xl p-8 border-2 border-[#fbbf24]/30 min-h-[600px]"
          >
            {/* Dealer's Hand */}
            <div className="mb-12">
              <h3 className="text-white text-xl font-bold mb-4 text-center">
                Dealer's Hand {gameState !== 'betting' && `(${dealerValue})`}
              </h3>
              <div className="flex gap-2 justify-center">
                {dealerHand.length > 0 ? (
                  dealerHand.map((card, index) => (
                    <PlayingCard
                      key={index}
                      value={card}
                      hidden={gameState === 'playing' && index === 1}
                    />
                  ))
                ) : (
                  <div className="text-white text-lg">Waiting for deal...</div>
                )}
              </div>
            </div>

            {/* Player's Hand */}
            <div>
              <h3 className="text-white text-xl font-bold mb-4 text-center">
                Your Hand {gameState !== 'betting' && `(${playerValue})`}
              </h3>
              <div className="flex gap-2 justify-center">
                {playerHand.length > 0 ? (
                  playerHand.map((card, index) => (
                    <PlayingCard key={index} value={card} />
                  ))
                ) : (
                  <div className="text-white text-lg">Waiting for deal...</div>
                )}
              </div>
            </div>

            {/* Result */}
            <AnimatePresence>
              {gameState === 'finished' && result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`mt-8 text-center p-6 rounded-xl ${
                    result.won
                      ? 'bg-gradient-to-r from-[#22c55e] to-[#16a34a]'
                      : 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'
                  }`}
                >
                  <p className="text-3xl font-bold text-white mb-2">
                    {result.playerValue === 21 && playerHand.length === 2
                      ? 'Blackjack!'
                      : result.won && result.winAmount === betAmount
                      ? 'Push!'
                      : result.won
                      ? 'You Win!'
                      : 'Dealer Wins'}
                  </p>
                  <p className="text-xl text-white">
                    {result.won && result.winAmount > betAmount
                      ? `🎉 You Won ${result.winAmount} Coins!`
                      : result.won && result.winAmount === betAmount
                      ? '🤝 Bet Returned'
                      : '😢 Try Again!'}
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
            {gameState === 'betting' && (
              <Card className="bg-[#1e293b] border-[#fbbf24]/30 p-6">
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
                        className={betAmount === amount ? 'bg-[#fbbf24] hover:bg-[#f59e0b] text-black' : 'border-[#fbbf24] text-white hover:bg-[#fbbf24]/20'}
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Deal Button */}
                <Button
                  onClick={handleDeal}
                  disabled={!player || player.coins < betAmount}
                  className="w-full bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#d97706] text-black font-bold py-6 text-lg"
                >
                  🃏 Deal Cards
                </Button>

                {player && player.coins < betAmount && (
                  <p className="text-red-400 text-sm mt-2 text-center">
                    Insufficient coins! You have {player.coins} coins.
                  </p>
                )}
              </Card>
            )}

            {gameState === 'playing' && (
              <Card className="bg-[#1e293b] border-[#fbbf24]/30 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Your Move</h3>
                
                <div className="space-y-4">
                  <Button
                    onClick={handleHit}
                    disabled={playerValue >= 21}
                    className="w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-bold py-2 text-lg"
                  >
                    👊 Hit (Draw Card)
                  </Button>
                  
                  <Button
                    onClick={handleStand}
                    className="w-full bg-gradient-to-r from-[#ef4444] to-[#dc2626] hover:from-[#dc2626] hover:to-[#b91c1c] text-white font-bold py-2 text-lg"
                  >
                    ✋ Stand (End Turn)
                  </Button>
                </div>

                {playerValue > 21 && (
                  <p className="text-red-400 text-center mt-4 font-bold">
                    Bust! You went over 21.
                  </p>
                )}
              </Card>
            )}

            {gameState === 'finished' && (
              <Card className="bg-[#1e293b] border-[#fbbf24]/30 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Game Over</h3>
                
                <Button
                  onClick={handleNewGame}
                  className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white font-bold py-6 text-lg"
                >
                  🎴 New Game
                </Button>
              </Card>
            )}

            {/* How to Play */}
            <Card className="hidden hidden bg-[#1e293b] border-[#fbbf24]/30 p-6">
              <h3 className="hidden text-xl font-bold text-white mb-1">How to Play</h3>
              <ul className="hidden hidden text-gray-300 space-y-2 text-sm">
                <li>• Choose your bet amount (10-100 coins)</li>
                <li>• Click "Deal Cards" to start</li>
                <li>• Get as close to 21 as possible</li>
                <li>• Hit to draw another card</li>
                <li>• Stand to end your turn</li>
                <li>• Beat the dealer without going over 21!</li>
                <li>• Blackjack (21 with 2 cards) pays 2.5x</li>
              </ul>
            </Card>

            {/* Card Values */}
            <Card className="bg-[#1e293b] border-[#fbbf24]/30 p-6">
              <h3 className="text-xl font-bold text-white mb-1">Card Values</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Number cards: Face value (2-10)</li>
                <li>• Face cards (J, Q, K): 10 points</li>
                <li>• Ace: 1 or 11 points (best for hand)</li>
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
