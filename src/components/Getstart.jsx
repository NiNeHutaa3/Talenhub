import React from 'react';
import {MdArrowRightAlt} from 'react-icons/md';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import pict1 from '../assets/bangunan.jpg';

const Getstart = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  const textVariants = {
    hidden: { y: '-100vh' },
    visible: { y: 0, transition: { type: 'spring', delay: 1, stiffness: 120 } },
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay: 0.5, duration: 1 } },
  };

  

  return (
    <motion.div
      className="h-full w-full mb-20"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ paddingTop: '80px' }}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          className="flex flex-col justify-center h-full"
          variants={textVariants}
        >
          <h3 className="text-4xl sm:text-5xl text-blue-700 font-semibold">
            Welcome To<h3 className="text-black">TalentHub!</h3>
          </h3>
          <p className="py-4 max-w-md">Find Your Dream Job</p>
          <div>
            <Link
              to="Start"
              spy={false}
              smooth={true}
              offset={-10}
              duration={800}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600 cursor-pointer"
            >
              Get Started
              <span>
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={pict1}
            alt=""
            className="rounded-2xl mx-auto w-4/5 md:w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Getstart;
