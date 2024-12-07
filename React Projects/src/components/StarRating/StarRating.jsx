import React, { useState } from "react";
import "./StarRating.scss";
import { CiStar } from "react-icons/ci";


const StarRating = () => {
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <>
    <div className="star-container container">
    {stars.map((star, index) => (
        <CiStar
          className="star"
          key={index}
          onMouseEnter={() => handleSelect(index)}
          style={{ color: index <= selected ? "yellow" : "" }}
        />
      ))}
    </div>
    <div>
      <div className="halfDiv">This is halfDiv 1</div>
      <div className="halfDiv">This is halfDiv 2</div>
      <div className="halfDiv">This is halfDiv 3</div>
      <div className="halfDiv">This is halfDiv 4</div>
    </div>
    </>
  );
};

export default StarRating;
