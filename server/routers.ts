import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  getOrCreatePlayer,
  updatePlayerStats,
  recordGameSession,
  updateLeaderboard,
  getLeaderboard,
  getPlayerRank,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Game procedures
  game: router({
    // Get or create player profile
    getPlayer: publicProcedure.query(async ({ ctx }) => {
      const userId = ctx.user?.id;
      return await getOrCreatePlayer(userId);
    }),

    // Play Dice Roller
    playDice: publicProcedure
      .input(
        z.object({
          playerId: z.number(),
          betAmount: z.number().min(1),
          prediction: z.number().min(2).max(12),
        })
      )
      .mutation(async ({ input }) => {
        const { playerId, betAmount, prediction } = input;

        // Roll two dice
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        const total = dice1 + dice2;

        const won = total === prediction;
        const winAmount = won ? betAmount * 10 : 0; // 10x payout for exact match
        const coinsChange = won ? winAmount : -betAmount;

        // Update player stats
        const updatedPlayer = await updatePlayerStats(playerId, coinsChange, won);

        // Record session
        await recordGameSession({
          playerId,
          gameType: "dice",
          betAmount,
          winAmount,
          result: JSON.stringify({ dice1, dice2, total, prediction }),
        });

        // Update leaderboard if won
        if (won) {
          await updateLeaderboard(playerId, winAmount, "alltime");
        }

        return {
          dice1,
          dice2,
          total,
          won,
          winAmount,
          player: updatedPlayer,
        };
      }),

    // Play Slots
    playSlots: publicProcedure
      .input(
        z.object({
          playerId: z.number(),
          betAmount: z.number().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const { playerId, betAmount } = input;

        // Slot symbols
        const symbols = ["🍒", "🍋", "🍊", "🍇", "💎", "7️⃣"];
        
        // Spin 3 reels
        const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
        const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

        // Check win conditions
        let multiplier = 0;
        if (reel1 === reel2 && reel2 === reel3) {
          // All three match
          multiplier = reel1 === "7️⃣" ? 50 : reel1 === "💎" ? 25 : 10;
        } else if (reel1 === reel2 || reel2 === reel3) {
          // Two match
          multiplier = 2;
        }

        const won = multiplier > 0;
        const winAmount = won ? betAmount * multiplier : 0;
        const coinsChange = won ? winAmount : -betAmount;

        // Update player stats
        const updatedPlayer = await updatePlayerStats(playerId, coinsChange, won);

        // Record session
        await recordGameSession({
          playerId,
          gameType: "slots",
          betAmount,
          winAmount,
          result: JSON.stringify({ reel1, reel2, reel3, multiplier }),
        });

        // Update leaderboard if won
        if (won) {
          await updateLeaderboard(playerId, winAmount, "alltime");
        }

        return {
          reel1,
          reel2,
          reel3,
          multiplier,
          won,
          winAmount,
          player: updatedPlayer,
        };
      }),

    // Play Roulette
    playRoulette: publicProcedure
      .input(
        z.object({
          playerId: z.number(),
          betAmount: z.number().min(1),
          betType: z.enum(["number", "red", "black", "even", "odd"]),
          betValue: z.number().min(0).max(36).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { playerId, betAmount, betType, betValue } = input;

        // Spin the wheel (0-36)
        const winningNumber = Math.floor(Math.random() * 37);
        
        // Red numbers in roulette
        const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        const isRed = redNumbers.includes(winningNumber);
        const isBlack = winningNumber !== 0 && !isRed;
        const isEven = winningNumber !== 0 && winningNumber % 2 === 0;
        const isOdd = winningNumber !== 0 && winningNumber % 2 === 1;

        // Check win conditions
        let won = false;
        let multiplier = 0;

        if (betType === "number" && betValue === winningNumber) {
          won = true;
          multiplier = 35; // 35:1 payout for single number
        } else if (betType === "red" && isRed) {
          won = true;
          multiplier = 1; // 1:1 payout
        } else if (betType === "black" && isBlack) {
          won = true;
          multiplier = 1;
        } else if (betType === "even" && isEven) {
          won = true;
          multiplier = 1;
        } else if (betType === "odd" && isOdd) {
          won = true;
          multiplier = 1;
        }

        const winAmount = won ? betAmount * multiplier : 0;
        const coinsChange = won ? winAmount : -betAmount;

        // Update player stats
        const updatedPlayer = await updatePlayerStats(playerId, coinsChange, won);

        // Record session
        await recordGameSession({
          playerId,
          gameType: "roulette",
          betAmount,
          winAmount,
          result: JSON.stringify({ winningNumber, betType, betValue, isRed, isBlack }),
        });

        // Update leaderboard if won
        if (won) {
          await updateLeaderboard(playerId, winAmount, "alltime");
        }

        return {
          winningNumber,
          isRed,
          isBlack,
          won,
          winAmount,
          multiplier,
          player: updatedPlayer,
        };
      }),

    // Play Blackjack
    playBlackjack: publicProcedure
      .input(
        z.object({
          playerId: z.number(),
          betAmount: z.number().min(1),
          action: z.enum(["deal", "hit", "stand"]),
          playerHand: z.array(z.number()).optional(),
          dealerHand: z.array(z.number()).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { playerId, betAmount, action, playerHand = [], dealerHand = [] } = input;

        // Helper to draw a card (1-11, where 1 is Ace, 11-13 are face cards valued at 10)
        const drawCard = () => {
          const card = Math.floor(Math.random() * 13) + 1;
          return card > 10 ? 10 : card;
        };

        // Helper to calculate hand value
        const calculateHandValue = (hand: number[]) => {
          let value = hand.reduce((sum, card) => sum + card, 0);
          let aces = hand.filter(card => card === 1).length;
          
          // Convert Aces from 1 to 11 if beneficial
          while (aces > 0 && value + 10 <= 21) {
            value += 10;
            aces--;
          }
          
          return value;
        };

        let newPlayerHand = [...playerHand];
        let newDealerHand = [...dealerHand];
        let gameOver = false;
        let won = false;
        let winAmount = 0;

        if (action === "deal") {
          // Initial deal: 2 cards each
          newPlayerHand = [drawCard(), drawCard()];
          newDealerHand = [drawCard(), drawCard()];
          
          // Check for blackjack
          const playerValue = calculateHandValue(newPlayerHand);
          if (playerValue === 21) {
            gameOver = true;
            won = true;
            winAmount = betAmount * 2.5; // Blackjack pays 3:2
          }
        } else if (action === "hit") {
          // Player draws another card
          newPlayerHand.push(drawCard());
          const playerValue = calculateHandValue(newPlayerHand);
          
          if (playerValue > 21) {
            // Bust
            gameOver = true;
            won = false;
          }
        } else if (action === "stand") {
          // Dealer plays
          while (calculateHandValue(newDealerHand) < 17) {
            newDealerHand.push(drawCard());
          }
          
          const playerValue = calculateHandValue(newPlayerHand);
          const dealerValue = calculateHandValue(newDealerHand);
          
          gameOver = true;
          
          if (dealerValue > 21 || playerValue > dealerValue) {
            won = true;
            winAmount = betAmount * 2; // Standard win pays 1:1
          } else if (playerValue === dealerValue) {
            // Push - return bet
            winAmount = betAmount;
            won = true;
          }
        }

        const playerValue = calculateHandValue(newPlayerHand);
        const dealerValue = calculateHandValue(newDealerHand);

        // Update player stats if game is over
        let updatedPlayer;
        if (gameOver) {
          const coinsChange = won ? winAmount : -betAmount;
          updatedPlayer = await updatePlayerStats(playerId, coinsChange, won);

          // Record session
          await recordGameSession({
            playerId,
            gameType: "blackjack",
            betAmount,
            winAmount,
            result: JSON.stringify({ playerHand: newPlayerHand, dealerHand: newDealerHand, playerValue, dealerValue }),
          });

          // Update leaderboard if won
          if (won && winAmount > betAmount) {
            await updateLeaderboard(playerId, winAmount - betAmount, "alltime");
          }
        }

        return {
          playerHand: newPlayerHand,
          dealerHand: newDealerHand,
          playerValue,
          dealerValue,
          gameOver,
          won,
          winAmount,
          player: updatedPlayer,
        };
      }),
  }),

  // Leaderboard procedures
  leaderboard: router({
    getTopPlayers: publicProcedure
      .input(
        z.object({
          period: z.enum(["daily", "weekly", "monthly", "alltime"]),
          limit: z.number().min(1).max(100).default(100),
        })
      )
      .query(async ({ input }) => {
        return await getLeaderboard(input.period, input.limit);
      }),

    getPlayerRank: publicProcedure
      .input(
        z.object({
          playerId: z.number(),
          period: z.enum(["daily", "weekly", "monthly", "alltime"]),
        })
      )
      .query(async ({ input }) => {
        return await getPlayerRank(input.playerId, input.period);
      }),
  }),
});

export type AppRouter = typeof appRouter;
