// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Book the trip of a lifetime</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Get the best advice and tips for your dream trip</p>
        </div>
      </header>
      <section className="bg-gray-800 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-Abril_Fatface text-white mb-6 animate-fade-in-up">Where do you want to go?</h2>
          <form role="search" aria-label="Search form" className="flex flex-col md:flex-row justify-center items-center">
            <label htmlFor="destination" className="sr-only">Enter a destination</label>
            <input type="text" id="destination" placeholder="Enter a destination" className="w-full max-w-md p-2 mr-0 md:mr-4 text-gray-800 rounded-lg mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-400" aria-label="Search for a destination" name="destination" />
            <button type="submit" className="bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition duration-300 shadow-md animate-fade-in-up animation-delay-400">Search</button>
          </form>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Plan the Perfect Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/img/icon-flights.png" alt="Flights" className="h-24 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Flights</h3>
            </div>
            <div className="text-center">
              <img src="/img/icon-transport.png" alt="Transportation" className="h-24 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Transportation</h3>
            </div>
            <div className="text-center">
              <img src="/img/icon-guide.png" alt="Guides" className="h-24 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Guides</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Trending Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Add tour items here */}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Top Notch Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Add destination items here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
