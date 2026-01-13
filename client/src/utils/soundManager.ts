/**
 * Sound Manager Utility
 * Handles all game sound effects with precise timing and volume control
 */

export type SoundType =
  | 'coin-clink'
  | 'slot-spin'
  | 'slot-win'
  | 'card-flip'
  | 'card-shuffle'
  | 'roulette-spin'
  | 'win-small'
  | 'win-big'
  | 'casino-bling';

class SoundManager {
  private sounds: Map<SoundType, HTMLAudioElement> = new Map();
  private enabled: boolean = true;
  private volume: number = 0.5; // Default 50% volume

  constructor() {
    this.preloadSounds();
    // Load sound preferences from localStorage
    const savedEnabled = localStorage.getItem('soundEnabled');
    const savedVolume = localStorage.getItem('soundVolume');
    
    if (savedEnabled !== null) {
      this.enabled = savedEnabled === 'true';
    }
    if (savedVolume !== null) {
      this.volume = parseFloat(savedVolume);
    }
  }

  /**
   * Preload all sound files for instant playback
   */
  private preloadSounds() {
    const soundFiles: SoundType[] = [
      'coin-clink',
      'slot-spin',
      'slot-win',
      'card-flip',
      'card-shuffle',
      'roulette-spin',
      'win-small',
      'win-big',
      'casino-bling',
    ];

    soundFiles.forEach((soundName) => {
      const audio = new Audio(`/sounds/${soundName}.wav`);
      audio.preload = 'auto';
      audio.volume = this.volume;
      this.sounds.set(soundName, audio);
    });
  }

  /**
   * Play a sound effect
   * @param soundName - Name of the sound to play
   * @param options - Playback options
   */
  play(
    soundName: SoundType,
    options?: {
      volume?: number;
      loop?: boolean;
      delay?: number;
    }
  ): Promise<void> {
    return new Promise((resolve) => {
      if (!this.enabled) {
        resolve();
        return;
      }

      const delay = options?.delay || 0;

      setTimeout(() => {
        const audio = this.sounds.get(soundName);
        if (!audio) {
          console.warn(`Sound not found: ${soundName}`);
          resolve();
          return;
        }

        // Clone the audio element to allow overlapping sounds
        const soundClone = audio.cloneNode() as HTMLAudioElement;
        soundClone.volume = options?.volume !== undefined ? options.volume : this.volume;
        soundClone.loop = options?.loop || false;

        soundClone.play().catch((error) => {
          console.warn(`Failed to play sound ${soundName}:`, error);
        });

        soundClone.onended = () => {
          resolve();
        };

        // Resolve immediately if looping
        if (options?.loop) {
          resolve();
        }
      }, delay);
    });
  }

  /**
   * Stop a looping sound
   */
  stop(soundName: SoundType) {
    const audio = this.sounds.get(soundName);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  /**
   * Play a sequence of sounds with timing
   */
  async playSequence(
    sequence: Array<{
      sound: SoundType;
      delay?: number;
      volume?: number;
    }>
  ): Promise<void> {
    for (const item of sequence) {
      await this.play(item.sound, {
        delay: item.delay,
        volume: item.volume,
      });
    }
  }

  /**
   * Enable or disable all sounds
   */
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    localStorage.setItem('soundEnabled', enabled.toString());
  }

  /**
   * Get current enabled state
   */
  isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Set global volume (0.0 to 1.0)
   */
  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    localStorage.setItem('soundVolume', this.volume.toString());
    
    // Update volume for all preloaded sounds
    this.sounds.forEach((audio) => {
      audio.volume = this.volume;
    });
  }

  /**
   * Get current volume
   */
  getVolume(): number {
    return this.volume;
  }

  /**
   * Toggle sound on/off
   */
  toggle(): boolean {
    this.enabled = !this.enabled;
    localStorage.setItem('soundEnabled', this.enabled.toString());
    return this.enabled;
  }
}

// Export singleton instance
export const soundManager = new SoundManager();

// Export helper functions for common game sounds
export const gameSounds = {
  // Dice game sounds
  dice: {
    roll: () => soundManager.play('coin-clink', { volume: 0.6 }),
    win: () => soundManager.play('casino-bling'),
    loss: () => soundManager.play('coin-clink', { volume: 0.3 }),
  },

  // Slots game sounds
  slots: {
    spin: () => soundManager.play('slot-spin', { volume: 0.5 }),
    reelStop: (delay: number = 0) =>
      soundManager.play('coin-clink', { delay, volume: 0.4 }),
    win: () => soundManager.play('slot-win'),
    bigWin: () => soundManager.play('win-big'),
    jackpot: async () => {
      await soundManager.play('casino-bling');
      await soundManager.play('win-big');
    },
  },

  // Roulette game sounds
  roulette: {
    spin: () => soundManager.play('roulette-spin', { volume: 0.6 }),
    ballLand: () => soundManager.play('coin-clink', { volume: 0.5 }),
    win: () => soundManager.play('win-small'),
    bigWin: () => soundManager.play('win-big'),
  },

  // Blackjack game sounds
  blackjack: {
    shuffle: () => soundManager.play('card-shuffle', { volume: 0.4 }),
    deal: (delay: number = 0) =>
      soundManager.play('card-flip', { delay, volume: 0.5 }),
    flip: () => soundManager.play('card-flip', { volume: 0.5 }),
    win: () => soundManager.play('casino-bling'),
    blackjack: () => soundManager.play('win-big'),
    bust: () => soundManager.play('coin-clink', { volume: 0.3 }),
  },

  // Common sounds
  common: {
    bet: () => soundManager.play('coin-clink', { volume: 0.4 }),
    win: () => soundManager.play('win-small'),
    bigWin: () => soundManager.play('win-big'),
    bling: () => soundManager.play('casino-bling'),
  },
};
