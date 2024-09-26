import React, { useState } from 'react';
import './RandomColor.css'; // Import the CSS file

const RandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleRandomHashColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
    setBackgroundColor(randomColor);
  };

  const handleRandomRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = randomColor;
    setBackgroundColor(randomColor);
  };

  return (
    <div className='randomColor'>
      <button onClick={handleRandomHashColor}>Random Hash Colors</button>
      <button onClick={handleRandomRGBColor}>Random RGB Colors</button>

      <h2>Current Background Color: {backgroundColor}</h2>
    </div>
  );
};

export default RandomColor;
