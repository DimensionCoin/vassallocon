"use client"

import React, { useState, useEffect } from "react";
import { servicebarLinks } from "@/constants"; // Adjust the path if needed

function ServiceCard() {
  // State to keep track of the current image index for each service link
  const [currentImageIndices, setCurrentImageIndices] = useState(
    servicebarLinks.map(() => 0)
  );

  useEffect(() => {
    // Set an interval to change the image every 5 seconds (or any other desired interval)
    const interval = setInterval(() => {
      setCurrentImageIndices((prevIndices) =>
        prevIndices.map(
          (currentIndex, idx) =>
            (currentIndex + 1) % servicebarLinks[idx].imgURL.length
        )
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto max-w-screen-xl p-2 px-4">
      {servicebarLinks.map((link, index) => (
        <a
          key={index}
          href={link.route}
          className="flex flex-col items-center hover:shadow-lg hover:shadow-black rounded-lg text-black bg-white text-center shadow-md shadow-black mb-4 md:mb-0"
        >
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src={link.imgURL[currentImageIndices[index]]}
              alt="Service Image"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 mb-8 font-bold">{link.name}</p> 
          <p className="mt-4 p-3">{link.description}</p>
        </a>
      ))}
    </div>
  );
}

export default ServiceCard;
