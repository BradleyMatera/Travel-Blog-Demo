import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-slate-200 py-4 sticky top-0 z-50 shadow-md" aria-label="Primary navigation">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold leading-10 text-slate-900 hover:text-orange-400 transition duration-300">
          ReadySet<span className="text-orange-400">Travel</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="text-base font-medium text-slate-900 hover:text-orange-400 transition duration-300">About</Link>
          <Link to="/destinations" className="text-base font-medium text-slate-900 hover:text-orange-400 transition duration-300">Destinations</Link>
          <Link to="/tours" className="text-base font-medium text-slate-900 hover:text-orange-400 transition duration-300">Tours</Link>
          <Link to="/blog" className="text-base font-medium text-slate-900 hover:text-orange-400 transition duration-300">Blog</Link>
          <Link to="/book" className="bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-md">Book a Trip</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
