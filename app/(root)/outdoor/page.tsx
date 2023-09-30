"use client";
import React, { useState, useEffect } from "react";
import { servicebarLinks } from "@/constants";

function OutdoorPage() {
  const officeData = servicebarLinks.find((link) => link.name === "Outdoor");
  if (!officeData) {
    return <div>Error: Outdoor data not found!</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    description: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % officeData.imgURL.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:vnick8@hotmail.com?subject=Outdoor Renovation&body=Name: ${formData.name}%0D%0A%0D%0APhone Number: ${formData.phoneNumber}%0D%0A%0D%0AAddress: ${formData.address}%0D%0A%0D%0ADescription: ${formData.description}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-green-300/30 min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8 text-black">Outdoor Work</h1>
      <div className="mb-8 w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-64 relative">
        <img
          src={officeData.imgURL[currentImageIndex]}
          alt="Outdoor Image"
          className="rounded-lg shadow-lg w-full h-full object-cover absolute top-0 left-0"
        />
      </div>
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-20">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="description"
            placeholder="Please provide what you want done and a time and day that would work for us to stop by and give you a quote, free of charge."
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md h-40"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleSendEmail}
          className="bg-green-600 text-white p-3 rounded-md w-full hover:bg-green-500 transition duration-300"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default OutdoorPage;
