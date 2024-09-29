import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const url = "https://picsum.photos/v2/list";
  const page = 1;
  const limit = 3;

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index

  // Fetch images from the API
  async function imageFetch(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (error) {
      console.log("Data not found!");
    }
  }

  // Handle displaying the previous image
  function backImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  }

  // Handle displaying the next image
  function nextImage() {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }

  useEffect(() => {
    imageFetch(url);
  }, []);

  return (
    <>
      <h2>Image Slider</h2>
      <div className="image-slider">
        <button className="back" onClick={backImage}>
          BACK
        </button>

        <div className="image-view">
          {images.length > 0 && (
            <>
              <img
                src={images[currentIndex].download_url}
                alt="Slider Image"
                className="slider-image"
              />
              <p>Image ID: {images[currentIndex].id}</p>
            </>
          )}
        </div>

        <button className="next" onClick={nextImage}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
