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
    title: 'Mountain Hiking',
    image: '/img/tour-mountainHiking.jpg',
    description: 'Experience breathtaking views and exhilarating hikes.',
  },
  {
    id: 2,
    title: 'Pyramids Tour',
    image: '/img/tour-pyramids.jpg',
    description: 'Explore the ancient wonders of the world.',
  },
  {
    id: 3,
    title: 'Snorkeling Adventure',
    image: '/img/tour-snorkel.jpg',
    description: 'Dive into the vibrant underwater world.',
  },
];

const Tours = () => (
  <div className="bg-gray-50">
    <ParallaxHeader>
      <Overlay />
      <HeaderContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our Tours
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Explore our exclusive tour packages
        </motion.p>
      </HeaderContent>
    </ParallaxHeader>

    <Section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold leading-10 text-center text-neutral-800 mb-8">Exclusive Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {tours.map((tour) => (
            <Card key={tour.id}>
              <CardImage src={tour.image} alt={tour.title} />
              <CardContent>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-base font-light text-stone-500">{tour.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default Tours;
