import React from 'react';
function Footer() {
  return (
    <footer className="bg-slate-500 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold leading-10 text-white">ReadySet<span className="text-orange-400">Travel</span></h2>
            <p className="mt-2 text-gray-300">We can provide you with the best advice and tips for your dream trip.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
            <p className="text-gray-300">1234 Address Street<br />Winter Park, FL 32792</p>
            <p className="mt-2 text-gray-300">123-456-7890</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
            <div className="flex mt-2">
              <a href="#" className="mr-4 text-white hover:text-orange-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="mr-4 text-white hover:text-orange-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-orange-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
