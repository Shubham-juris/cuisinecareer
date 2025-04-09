import React from 'react'
import { motion } from 'framer-motion';
const Header = () => {
// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
  };    

  return (
    <motion.div
      className="container mx-auto py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-5xl font-bold text-center text-gray-800 mb-8"
        variants={headingVariants}
      >
        ABOUT US
        <hr className='border-t  text-base items-center width-1/2 mx-65 mt-7'></hr>
      </motion.h2>
      <div className="md:flex md:items-center md:gap-4">
        <motion.div className="md:w-1/2" variants={imageVariants}>
          <img
            src="cuisineabout1.jpg"
            alt="Baking Ingredients"
            className="rounded-lg shadow-md w-full h-60  "
          />
        </motion.div>
        <motion.div className="md:w-1/2 mt-6 md:mt-0 text-gray-700 text-md" variants={textVariants}>
          <motion.p className="mb-4">
            Welcome to Fusion Foodies, your premier destination for culinary careers! At
            Fusion Foodies, we understand the passion and dedication that goes into
            creating extraordinary culinary experiences. That's why we're here to connect
            talented chefs and kitchen workers with their dream jobs in the dynamic world
            of food.
          </motion.p>
          <motion.p>
            With a deep appreciation for the art of cooking and a commitment to
            supporting the culinary community, Fusion Foodies is more than just a job-
            seeking website. We're a platform built by food enthusiasts, for food
            enthusiasts. Our mission is simple: to empower chefs and kitchen professionals
            to find meaningful employment opportunities that align with their skills,
            aspirations, and values.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Header
