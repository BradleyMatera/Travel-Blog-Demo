// src/components/Tours.js
import React from 'react';

function Tours() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center" style={{ backgroundImage: "url('public/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Our Tours</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Explore our exclusive tour packages</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Exclusive Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="public/img/tour-mountainHiking.jpg" alt="Mountain Hiking" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Mountain Hiking</h3>
              <p className="text-base font-light text-stone-500">Experience breathtaking views and exhilarating hikes.</p>
            </div>
            <div className="text-center">
              <img src="public/img/tour-pyramids.jpg" alt="Pyramids Tour" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Pyramids Tour</h3>
              <p className="text-base font-light text-stone-500">Explore the ancient wonders of the world.</p>
            </div>
            <div className="text-center">
              <img src="public/img/tour-snorkel.jpg" alt="Snorkeling Adventure" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Snorkeling Adventure</h3>
              <p className="text-base font-light text-stone-500">Dive into the vibrant underwater world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tours;
