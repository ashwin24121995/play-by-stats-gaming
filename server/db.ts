import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

// ============================================
// Game Database Functions
// ============================================

import { players, gameSessions, leaderboard } from "../drizzle/schema";
import type { InsertPlayer, InsertGameSession, InsertLeaderboard } from "../drizzle/schema";
import { desc, and } from "drizzle-orm";

/**
 * Create or get anonymous player by userId
 * Returns player with virtual coins
 */
export async function getOrCreatePlayer(userId?: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if player exists
  if (userId) {
    const existing = await db.select().from(players).where(eq(players.userId, userId)).limit(1);
    if (existing.length > 0) {
      return existing[0];
    }
  }

  // For anonymous players, create new player every time
  // Create new player with starting coins
  const newPlayer: InsertPlayer = {
    userId: null,
    username: `Player${Math.floor(Math.random() * 10000)}`,
    coins: 1000, // Starting coins
    totalWins: 0,
    totalLosses: 0,
  };

  const result = await db.insert(players).values(newPlayer);
  const playerId = Number(result[0].insertId);
  
  const created = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return created[0];
}

/**
 * Update player coins and stats
 */
export async function updatePlayerStats(
  playerId: number,
  coinsChange: number,
  won: boolean
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const player = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  if (player.length === 0) throw new Error("Player not found");

  const current = player[0];
  
  await db.update(players)
    .set({
      coins: current.coins + coinsChange,
      totalWins: won ? current.totalWins + 1 : current.totalWins,
      totalLosses: won ? current.totalLosses : current.totalLosses + 1,
    })
    .where(eq(players.id, playerId));

  // Return updated player
  const updated = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return updated[0];
}

/**
 * Record game session
 */
export async function recordGameSession(session: InsertGameSession) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(gameSessions).values(session);
}

/**
 * Update leaderboard
 */
export async function updateLeaderboard(
  playerId: number,
  score: number,
  period: 'daily' | 'weekly' | 'monthly' | 'alltime'
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if entry exists
  const existing = await db.select()
    .from(leaderboard)
    .where(and(
      eq(leaderboard.playerId, playerId),
      eq(leaderboard.period, period)
    ))
    .limit(1);

  if (existing.length > 0) {
    // Update existing entry
    const current = existing[0];
    await db.update(leaderboard)
      .set({
        totalCoins: current.totalCoins + score,
        updatedAt: new Date(),
      })
      .where(eq(leaderboard.id, current.id));
  } else {
    // Create new entry - calculate rank as 0 initially
    const newEntry: InsertLeaderboard = {
      playerId,
      totalCoins: score,
      rank: 0,
      period,
    };
    await db.insert(leaderboard).values(newEntry);
  }
}

/**
 * Get leaderboard rankings
 */
export async function getLeaderboard(
  period: 'daily' | 'weekly' | 'monthly' | 'alltime',
  limit: number = 100
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.select()
    .from(leaderboard)
    .where(eq(leaderboard.period, period))
    .orderBy(desc(leaderboard.totalCoins))
    .limit(limit);
}

/**
 * Get player rank in leaderboard
 */
export async function getPlayerRank(
  playerId: number,
  period: 'daily' | 'weekly' | 'monthly' | 'alltime'
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const allEntries = await db.select()
    .from(leaderboard)
    .where(eq(leaderboard.period, period))
    .orderBy(desc(leaderboard.totalCoins));

  const rank = allEntries.findIndex(entry => entry.playerId === playerId);
  return rank >= 0 ? rank + 1 : null;
}
