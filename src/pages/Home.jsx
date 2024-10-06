// src/Home.js
import { data } from 'autoprefixer';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
{/*     
    <div className="relative bg-light -900 text-white ">
      {/* Hero Section with Background Image */}
      {/* <div className="carousel w-full h-96 p-4 mx-auto mb-4  position-relative overflow-hidden ml-2  ">
  <div id="slide1" className="carousel-item relative w-full  ">
    <img
      src="https://img.freepik.com/free-photo/travel-relaxation-umbrella-luxury-hotels_1253-653.jpg?size=626&ext=jpg" 
      className="w-full "   />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://wallpaperaccess.com/full/6688068.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://wallpaperaccess.com/full/2690557.jpg "
      className= "w-full"  />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://wallpaperaccess.com/2690984.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    
  </div> */}
{/* </div> */} 
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-4 py-2 mt-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>

      {/* Content Section */}
      <div className="relative container mx-auto p-6 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl lg:text-6xl font-bold   mb-4">Welcome to Luxury Hotel</h1>
        <p className="text-lg lg:text-2xl mb-6">
          Experience the ultimate comfort and service at our award-winning hotel. Relax and unwind in style.
        </p>
        <Link   className="bg-blue-600 px-6 py-3 text-lg rounded hover:bg-blue-700 transition">
          Explore Our Hotels
        </Link>
      </div>
   


    <div className="container mx-auto p-6 mt-2 text-center">
      <h2 className="text-3xl font-semibold mt-2 mb-6">Our Hotel Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.Hg0Io5Ub-HPDsZ13Ch00kQHaE8&pid=Api&P=0&w=300&h=300"  alt="Hotel Image 1" className="rounded shadow-md" />
          <h3 className="text-xl font-semibold mt-4">Elegant Rooms</h3>
          <p className="mt-2">Beautifully designed rooms with a view.</p>
        </div>

        {/* Image 2 */}
        <div>
          <img src="https://tse1.mm.bing.net/th?id=OIP.9Ov9f_kKv0dLh7nIhBjAvgHaE8&pid=Api&P=0&w=300&h=300" alt="Hotel Image 2" className="rounded shadow-md" />
          <h3 className="text-xl font-semibold mt-4">World-Class Dining</h3>
          <p className="mt-2">Enjoy exquisite meals prepared by top chefs.</p>
        </div>

        {/* Image 3 */}
        <div>
          <img src="https://i.ytimg.com/vi/YVpjki_sGCQ/maxresdefault.jpg" alt="Hotel Image 3" className="rounded shadow-md" />
          <h3 className="text-xl font-semibold mt-4">Luxurious Spa</h3>
          <p className="mt-2">Relax and rejuvenate with our spa services.</p>
        </div>
      </div>
    </div>

    </>
  
  );
};
export default Home;


