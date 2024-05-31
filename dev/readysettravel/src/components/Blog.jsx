import React from 'react';
function Blog() {
  return (
    <div>
      <header className="relative bg-cover bg-center text-white custom-header-height flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex flex-col justify-center items-center py-1 md:py-2 px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Abril_Fatface mb-4 text-center text-shadow-lg animate-fade-in-up">Our personal experiences</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-shadow-md animate-fade-in-up animation-delay-200">Get out there and experience some adventure!</p>
        </div>
      </header>
      <section className="py-16" aria-label="Blog section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
