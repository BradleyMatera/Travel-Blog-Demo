import React, { useState, useEffect } from 'react';
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
  background: rgba(0, 0, 0, 0.6);
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

const BlogPost = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const blogPosts = [
  {
    id: 1,
    title: 'Exploring the Wonders of Paris',
    excerpt: 'Discover the magic of the City of Light, from iconic landmarks to hidden gems.',
    image: '/img/jack-ward-rknrvCrfS1k-unsplash.jpg',
  },
  {
    id: 2,
    title: 'A Journey Through the Heart of Australia',
    excerpt: 'Experience the raw beauty of the Outback and the vibrant culture of Australia\'s cities.',
    image: '/img/jake-blucker-tMzCrBkM99Y-unsplash.jpg',
  },
  {
    id: 3,
    title: 'Discovering the Beauty of Brazil',
    excerpt: 'From the Amazon rainforest to the beaches of Rio, Brazil offers a world of adventure.',
    image: '/img/jenna-day-UM8bURrginM-unsplash.jpg',
  },
  {
    id: 4,
    title: 'Japan: A Blend of Tradition and Modernity',
    excerpt: 'Explore the fascinating contrast between ancient traditions and cutting-edge technology.',
    image: '/img/japan-image.jpg',
  },
  {
    id: 5,
    title: 'The Enchanting Islands of Greece',
    excerpt: 'Island hop through the crystal-clear waters of the Aegean Sea.',
    image: '/img/greece-image.jpg',
  },
  {
    id: 6,
    title: 'Safari Adventures in Tanzania',
    excerpt: 'Witness the great migration and encounter Africa most majestic wildlife.',
    image: '/img/tanzania-image.jpg',
  },
];

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => Math.min(prevVisible + 3, blogPosts.length));
  };

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
            className="text-5xl md:text-6xl font-bold mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Travel Blog
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Get inspired by our travel stories and tips
          </motion.p>
        </HeaderContent>
      </ParallaxHeader>

      <Section>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogPost
                key={post.id}
                ref={index === visiblePosts - 1 ? ref : null}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogImage src={post.image} alt={post.title} />
                <BlogContent>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <motion.button
                    className="mt-4 text-blue-600 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </BlogContent>
              </BlogPost>
            ))}
          </div>
          {visiblePosts < blogPosts.length && (
            <div className="text-center mt-12">
              <motion.button
                className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                onClick={loadMorePosts}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Posts
              </motion.button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export default Blog;
