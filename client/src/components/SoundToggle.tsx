import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { soundManager } from '@/utils/soundManager';

/**
 * Sound Toggle Component
 * Allows users to enable/disable sound effects globally
 */
export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(soundManager.isEnabled());
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    
    // Play a test sound when enabling
    if (newState) {
      soundManager.play('coin-clink', { volume: 0.3 });
    }
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSound}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative text-white hover:bg-white/10"
        aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
      >
        {soundEnabled ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </Button>
      
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
          {soundEnabled ? 'Mute sounds' : 'Enable sounds'}
        </div>
      )}
    </div>
  );
}
