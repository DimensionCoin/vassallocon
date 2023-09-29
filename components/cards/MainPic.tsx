"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const MainPic: React.FC = () => {
  const images = ["/logo.png", "/main.png", "/fences.png", "/office.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalDuration = currentImageIndex === 0 ? 15000 : 8000;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[73vh] overflow-hidden">
      <Image
        src={images[currentImageIndex]}
        alt="main pic"
        layout="fill"
        objectFit="cover"
        className="coverImage"
      />
      <h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffffff] font-bold leading-tight tracking-wider text-center xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        style={{
          fontFamily: "Oswald, sans-serif",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <p>Vassallo Construction</p>
        <p>_______</p>
        <p className="text-sm mt-6 text-">Home And Office Renovations</p>
      </h1>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 border p-1 px-2 bg-white rounded-full "
        onClick={prevImage}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 border p-1 px-2 bg-white rounded-full"
        onClick={nextImage}
      >
        →
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-4 h-4 rounded-full ${
              currentImageIndex === index
                ? "bg-white"
                : "border border-white bg-transparent"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MainPic;
