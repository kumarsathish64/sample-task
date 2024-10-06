// src/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ hotelId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., send data to an API)
    console.log('Booking request:', { hotelId, name, email, checkIn, checkOut });
    // Reset the form after submission
    setName('');
    setEmail('');
    setCheckIn('');
    setCheckOut('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold">Book Now</h2>
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;
