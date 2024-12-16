import React, { useState } from 'react';
import Background from './components/Background';
import MaintenanceCard from './components/MaintenanceCard';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      <Background />
      
      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4">
        <MaintenanceCard 
          isHovered={isHovered}
          onHoverChange={setIsHovered}
        />
      </div>
    </div>
  );
}

export default App;