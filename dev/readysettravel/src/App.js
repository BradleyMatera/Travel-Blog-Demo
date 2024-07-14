import React, {
  useState, useEffect,
} from 'react';
import {
  BrowserRouter as Router, Route, Routes, useLocation,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Blog from './components/Blog';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const AppContainer = motion.div;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  return (
    <Router>
      <AppContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
