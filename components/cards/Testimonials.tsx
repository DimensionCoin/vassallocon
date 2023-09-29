"use client";
import React from "react";
import { testimonialsData } from "@/constants/index.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testimonials() {
  return (
    <div className="flex flex-col items-center mt-2 justify-center mb-24 md:mt-8">
      <h1 className="font-bold text-black mb-2">See what our customers say!</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={1000}
        className="w-full md:w-2/3"
        stopOnHover={true}
      >
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center p-4 px-8">
            <div className="p-4 py-7 border rounded shadow shadow-black w-full mx-6">
              <p className="text-gray-700">{testimonial.review}</p>
              <p className="mt-20 font-bold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
