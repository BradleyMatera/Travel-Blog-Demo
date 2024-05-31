// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Discover Our Story</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Learn about our journey, values, and the passion that drives us to deliver unforgettable travel experiences.</p>
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
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">About ReadySetTravel</h2>
          <p className="text-base font-light text-stone-500 mb-8 text-center">At ReadySetTravel, we believe that travel has the power to transform lives and create unforgettable memories. Our team of experienced travel experts is dedicated to crafting extraordinary journeys that cater to your unique preferences and desires.</p>
          <p className="text-base font-light text-stone-500 mb-8 text-center">Whether you’re seeking thrilling adventures, cultural immersion, or a luxurious getaway, we have curated a collection of destinations and tours that will ignite your wanderlust. With our meticulous attention to detail and commitment to exceptional service, we ensure that every aspect of your trip is seamlessly planned and executed.</p>
          <p className="text-base font-light text-stone-500 mb-8 text-center">Our mission is to provide you with the best advice, insider tips, and personalized recommendations to make your dream trip a reality. Let us be your trusted companion as you embark on a journey of a lifetime.</p>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold leading-10 text-neutral-800 mb-8">Ready to Explore?</h2>
          <p className="text-base font-light text-stone-500 mb-8">Start planning your dream vacation today!</p>
          <Link to="/book" className="bg-orange-400 text-white py-3 px-6 rounded-lg hover:bg-orange-500 transition duration-300 shadow-md">Book Now</Link>
        </div>
      </section>
    </div>
  );
}

export default About;
