// src/components/Blog.js
import React from 'react';

function Blog() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Travel Blog</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Get inspired by our travel stories and tips</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img src="/img/jack-ward-rknrvCrfS1k-unsplash.jpg" alt="Blog Post 1" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Exploring the Wonders of Paris</h3>
              <p className="text-base font-light text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
            </div>
            <div className="text-center">
              <img src="/img/jake-blucker-tMzCrBkM99Y-unsplash.jpg" alt="Blog Post 2" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">A Journey Through the Heart of Australia</h3>
              <p className="text-base font-light text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
            </div>
            <div className="text-center">
              <img src="/img/jenna-day-UM8bURrginM-unsplash.jpg" alt="Blog Post 3" className="w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Discovering the Beauty of Brazil</h3>
              <p className="text-base font-light text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
