import React from 'react';
import StarField from './StarField';

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500" />
      <StarField />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </>
  );
};

export default Background;