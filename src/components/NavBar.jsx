import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white  text-2xl font-bold hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">Luxury Hotel</h1>
        <ul className="flex space-x-4 ">
         
          <li><Link to="/Home" className="text-white ml-4  hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">Home</Link></li>
          <li><Link to="/About" className="text-white ml-4 hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">About</Link></li>
          
          <li><Link to="/HotelList" className="text-white ml-4 hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">HotelList</Link></li>
          <li><Link to="/BookingForm" className="text-white ml-4-500 hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">BookingForm</Link></li>
           <li><Link to="/Contact" className="text-white ml-4  hover:text-red-500 cursor-pointer hover:underline underline-offset-4 hover:decoration-4 shadow shadow-orange-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
