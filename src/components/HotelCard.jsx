import React from 'react';


const HotelCard = () => {
  const hotels = [
    {
      id: 1,
      name: "Luxury Resort",
      location: "Maldives",
      description: "A beautiful resort with ocean views and top-notch amenities.",
      imageUrl: "https://example.com/hotel1.jpg",
    },
    {
      id: 2,
      name: "Elegant Hotel",
      location: "Paris",
      description: "Experience the elegance of Paris in this luxurious hotel.",
      imageUrl: "https://example.com/hotel2.jpg",
    },
    {
      id: 3,
      name: "Five-Star Suites",
      location: "New York",
      description: "Stay in the heart of the city in our luxurious suites.",
      imageUrl: "https://example.com/hotel3.jpg",
    },
  ];

  return (
    <div>
      <header className="bg-blue-600 text-white text-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Luxury Hotel</h1>
        <p className="mt-2">Experience the ultimate comfort and service.</p>
      </header>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default HotelCard;
