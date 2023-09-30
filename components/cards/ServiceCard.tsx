import React from "react";
import { servicebarLinks } from "@/constants"; // Adjust the path if needed

function ServiceCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-2 mx-auto max-w-screen-xl p-1 px-2">
      {servicebarLinks.map((link, index) => (
        <a
          key={index}
          href={link.route}
          className="flex flex-col items-center hover:shadow-lg hover:shadow-black rounded-lg text-black bg-white text-center shadow-md shadow-black mb-4 md:mb-0"
        >
          <div className="w-full h-72 overflow-hidden rounded-lg">
            <img
              src={link.imgURL[0]} // Always use the first image
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
