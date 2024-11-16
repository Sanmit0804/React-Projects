import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
    "https://phlearn.com/wp-content/uploads/2018/09/tip-1-annie-spratt.jpg",
    "https://c.pxhere.com/images/0c/2f/9c1038dbde5fcaf3d3dd78a02234-1674038.jpg!d",
  ];

  const [visible, setVisible] = useState(0);

  const handleNext = () => {
    setVisible((prevIndex) => (prevIndex + 1) % images.length); // Loops back to the first image
  };

  const handleBack = () => {
    setVisible(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1) // Loops to the last image if at the first image
    );
  };

  return (
    <>
      <div className="image-slider-container container">
        <div className="back-btn btn" onClick={handleBack}>
          Back
        </div>
        <img className="image" src={images[visible]} alt="Image" />
        {images.map((image, index) => {
          return (
            <div>
              {index == visible ? (
                <div className="image-dot active-dot"></div>
              ) : (
                <div className="image-dot"></div>
              )}
            </div>
          );
        })}
        <div className="next-btn btn" onClick={handleNext}>
          Next
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
