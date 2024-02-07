import React, { useState, useRef } from "react";
import img from "../../assets/wally.jpeg";

const Image = () => {
  const [zoom, setZoom] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState("top left");
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setTransformOrigin(`${x * 100}% ${y * 100}%`);
      setZoom(2.5); // Adjust the zoom factor as needed
    }
  };

  const handleMouseLeave = () => {
    setZoom(1);
    setTransformOrigin("top left");
  };

  const handleMouseClick = (e) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;

      console.log("Relative Coordinates:", { x: relativeX, y: relativeY });
    }
  };

  const getZoomStyle = () => {
    return {
      transform: `scale(${zoom})`,
      transformOrigin: transformOrigin,
      transition: "transform 0.3s ease",
    };
  };

  return (
    <div className="image-container">
      <div
        className="magnify custom-cursor" // Apply custom cursor class here
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          ref={imageRef}
          className="game-image"
          src={img}
          alt="Game Image - Where's Wally?"
          style={getZoomStyle()}
          onClick={handleMouseClick}
        />
      </div>
    </div>
  );
};

export default Image;
