import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Blog from './components/Blog';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
