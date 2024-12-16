import React, { useEffect, useState } from 'react';
import { characterFrames } from '../assets/character-sprite';

const PixelCharacter: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % characterFrames.length);
    }, 200); // Change frame every 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-32 h-32 relative ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
      <img
        src={characterFrames[currentFrame]}
        alt="Dancing character"
        className="w-full h-full pixelated"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};

export default PixelCharacter;