// src/components/BookingForm.js
import React from 'react';

function BookingForm() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Book Your Dream Trip</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Fill out the form below to start planning your adventure.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Booking Form</h2>
          <form className="bg-white shadow-md rounded-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your full name" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
              <input type="text" id="destination" name="destination" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your destination" />
            </div>
            <div className="mb-6">
              <label htmlFor="dates" className="block text-gray-700 text-sm font-bold mb-2">Travel Dates</label>
              <input type="text" id="dates" name="dates" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your travel dates" />
            </div>
            <div className="mb-6">
              <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Number of Guests</label>
              <input type="number" id="guests" name="guests" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter number of guests" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Additional Information</label>
              <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter any additional information"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default BookingForm;
