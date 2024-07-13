import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ParallaxHeader = styled.header`
  background-image: url('/img/hero-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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

const StatisticBox = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function AnimatedStatistic({ value, label }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
      const end = parseInt(value, 10);
      const duration = 2000;
      const startTime = Date.now();

      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime;
        const progress = Math.min(timePassed / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
    return undefined;
  }, [inView, value, controls]);

  return (
    <StatisticBox ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      <h3 className="text-4xl font-bold mb-2">
        {count}
        +
      </h3>
      <p className="text-xl">{label}</p>
    </StatisticBox>
  );
}

AnimatedStatistic.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
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
            Discover Our Story
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting Unforgettable Travel Experiences Since 2005
          </motion.p>
        </HeaderContent>
      </ParallaxHeader>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            At ReadySetTravel, we&apos;re dedicated to transforming your travel dreams into reality.
            We believe that every journey should be as unique as you are, filled with authentic
            experiences and unforgettable moments.
          </p>
        </div>
      </Section>

      <Section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedStatistic value="1000" label="Trips Organized" />
            <AnimatedStatistic value="50" label="Countries Explored" />
            <AnimatedStatistic value="98" label="% Client Satisfaction" />
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
}

export default About;
