import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

const destinations = [
  { id: 1, name: 'Paris, France', image: '/img/destinations-paris.jpg' },
  { id: 2, name: 'Sydney, Australia', image: '/img/destinations-sydney.jpg' },
  { id: 3, name: 'Rio de Janeiro, Brazil', image: '/img/destinations-rio.jpg' },
  { id: 4, name: 'Rome, Italy', image: '/img/destinations-rome.jpg' },
  { id: 5, name: 'Machu Picchu, Peru', image: '/img/destinations-machu.jpg' },
];

const Destinations = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="bg-gray-50">
      <ParallaxHeader>
        <Overlay />
        <HeaderContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Explore Top Destinations
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover the most amazing places around the world.
          </motion.p>
        </HeaderContent>
      </ParallaxHeader>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Trending Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CardImage src={destination.image} alt={destination.name} />
                <CardContent>
                  <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section ref={ref} className="bg-gray-100">
        <motion.div
          className="container mx-auto px-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Ready to Start Your Journey?</h2>
          <p className="text-2xl mb-10 text-center">Let us help you plan the trip of a lifetime.</p>
          <div className="text-center">
            <motion.a
              href="/book"
              className="bg-blue-600 text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Destinations;
