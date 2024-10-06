import React from 'react';


const HotelList = ({ hotels }) => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6">Our Luxury Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="mt-2">{hotel.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelList;
