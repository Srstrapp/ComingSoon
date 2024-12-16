import React from 'react';
import { Sparkles } from 'lucide-react';
import PixelCharacter from './PixelCharacter';

interface MaintenanceCardProps {
  isHovered: boolean;
  onHoverChange: (isHovered: boolean) => void;
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({ isHovered, onHoverChange }) => {
  return (
    <div 
      className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/20 transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <div className="mb-8 flex justify-center">
        <PixelCharacter isHovered={isHovered} />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 pixel-font">
        Under Maintenance
      </h1>

      <SpeechBubble />
      <StatusIndicator />
    </div>
  );
};

const SpeechBubble: React.FC = () => (
  <div className="relative">
    <div className="speech-bubble bg-white/90 p-4 rounded-xl relative mb-6">
      <p className="text-purple-900 text-lg md:text-xl pixel-font">
        We're leveling up our website!
        <br />
        Please check back soon...
      </p>
    </div>
  </div>
);

const StatusIndicator: React.FC = () => (
  <div className="flex items-center justify-center gap-2 text-white/90 pixel-font">
    <Sparkles className="animate-spin-slow" />
    <span>Making things awesome</span>
    <Sparkles className="animate-spin-slow" />
  </div>
);

export default MaintenanceCard;