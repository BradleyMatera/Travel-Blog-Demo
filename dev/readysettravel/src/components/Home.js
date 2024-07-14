import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ParallaxHeader = styled.header`
  background-image: url('/img/hero-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeaderContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section`
  padding: 6rem 0;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const tours = [
  {
    id: 1,
    title: 'Paris Explorer',
    image: '/img/destinations-paris.jpg',
    description: 'Discover the City of Light',
  },
  {
    id: 2,
    title: 'Tokyo Adventure',
    image: '/img/japan-image.jpg',
    description: 'Experience the blend of tradition and modernity',
  },
  {
    id: 3,
    title: 'Bali Retreat',
    image: '/img/bali.jpg',
    description: 'Relax in tropical paradise',
  },
];

const destinations = [
  { id: 1, name: 'Rome', image: '/img/destinations-rome.jpg' },
  { id: 2, name: 'New York', image: '/img/newyork.jpg' },
  { id: 3, name: 'Sydney', image: '/img/destinations-sydney.jpg' },
];

function Home() {
  return (
    <div className="bg-gray-50">
      <ParallaxHeader>
        <Overlay />
        <HeaderContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Book the trip of a lifetime
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Get the best advice and tips for your dream trip
          </motion.p>
        </HeaderContent>
      </ParallaxHeader>

      <Section className="bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-white mb-8 text-center">Where do you want to go?</h2>
          <form role="search" aria-label="Search form" className="flex flex-col md:flex-row justify-center items-center">
            <label htmlFor="destination" className="sr-only">Enter a destination</label>
            <input
              type="text"
              id="destination"
              placeholder="Enter a destination"
              className="w-full max-w-md p-3 mr-0 md:mr-4 text-gray-800 rounded-lg mb-4 md:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Search for a destination"
              name="destination"
            />
            <motion.button
              type="submit"
              className="bg-orange-400 text-white py-3 px-8 rounded-lg hover:bg-orange-500 transition duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </form>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Plan the Perfect Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Flights', 'Transport', 'Guide'].map((item) => (
              <motion.div
                key={item}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={`/img/icon-${item.toLowerCase()}.png`} alt={item} className="h-24 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Trending Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card key={tour.id}>
                <CardImage src={tour.image} alt={tour.title} />
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
                  <p className="text-gray-600">{tour.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Top Notch Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id}>
                <CardImage src={destination.image} alt={destination.name} />
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Home;
