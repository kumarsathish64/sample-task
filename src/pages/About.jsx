// src/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-red-500">About Our Hotel</h1>
      <p className="mt-4 text-gray-600 ml-4 text-lg">
        Welcome to our hotel! We provide exceptional service and comfort to ensure that your stay is enjoyable and memorable.
      </p>

      <h2 className="text-2xl font-semibold mt-6  text-orange-500 ">Our Story</h2>
      <p className="mt-2 ml-4">
        Established in 2000, our hotel has been dedicated to offering quality accommodations and outstanding hospitality. 
        Our mission is to create a home away from home for every guest.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-center mb-4 text-blue-500 font-bold text-3xl">Amenities</h2>
      <ul className="list-disc list-inside mt-2 mb-4 text-lg text-gray-600 font-bold text-left ml-4  mb-4 ml-15">
        <li>Free Wi-Fi</li>
        <li>Complimentary Breakfast</li>
        <li>Swimming Pool</li>
        <li>Fitness Center</li>
        <li>Room Service</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-8">
        <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?cs=srgb&dl=dug-out-pool-hotel-pool-1134176.jpg&fm=jpg" alt="Hotel Image 1" className="rounded shadow-md" />
        <img src="https://i.pinimg.com/originals/33/f1/cd/33f1cdf9e3a834ffd39ebc66658549ca.jpg"  alt="Hotel Image 2" className="rounded shadow-md" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg" alt="Hotel Image 3" className="rounded shadow-md" />
      </div>
    </div>
  );
};

export default About;
