import React, { useState } from 'react';
import './RandomColor.css';

const RandomColor = () => {
  const [color, setColor] = useState('red');

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;
    setColor(randomColor);
  };

  return (
    <div className="randomColor-container">
      <h2>Random Color Generator</h2>
      <button className="generate-btn" onClick={generateRandomColor}>
        Generate
      </button>
      <div className="generatedColor" style={{ backgroundColor: color }}>

      </div>
    </div>
  );
};

export default RandomColor;
