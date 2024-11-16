import React, { useState } from "react";
import "./StarRating.css";

const StarRating = () => {
  const [stars, setStars] = useState([1,2,3,4,5]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <div className="star" key={index} onMouseEnter={() => handleSelect(index)} style={{backgroundColor: index <= selected ? "yellow" : ""}}/>
      ))}
    </div>
  );
};

export default StarRating;
