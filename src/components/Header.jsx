import React from 'react';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo1 from '../assets/Rectangle 5.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import {BsChevronDown} from 'react-icons/bs'

const containerVariants = {
  open: {
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: { height: 0 },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHam, setIsOpenHam] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimer(
      setTimeout(() => {
        setIsOpen(false);
      }, 500)
    );
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  

  if (location.pathname === '/SignUp' || 
      location.pathname === '/SignIn' || 
      location.pathname === '/SignIn1' || 
      location.pathname === '/Vacancy/Vacancy1' || 
      location.pathname === '/Vacancy/Vacancy1/Vacancy2'   || 
      location.pathname === '/Profile' || 
      location.pathname === '/Company/Company1' || 
      location.pathname === '/Talent/Talent1' || 
      location.pathname === '/Profile' || 
      location.pathname === '/See' || 
      location.pathname === '/See/See1' || 
      location.pathname === '/Manage' ) {
    return null;
  }

  return (
    <motion.header
      className="bg-white fixed w-full px-4 lg:px-8 z-30 h-16 lg:h-20 flex items-center justify-between"
      style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      >
      {/* logo */}
      <motion.ScrollLink to={'/'} className="flex items-center "
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      >
        <img src={Logo1} className='h-12 w-12 lg:w-16 lg:h-16' />
      </motion.ScrollLink>

      {/* hamburger menu */}
      <button
        type="button"
        className="ml-auto block lg:hidden text-gray-800 hover:text-primary transition"
        onClick={() => setIsOpenHam(!isOpenHam)}
      >
        <RxHamburgerMenu size={28} />
      </button>

      {/* navbar */}
      <div
        className={`${
          isOpenHam ? 'fixed top-20 left-0 w-full h-full bg-gray-400 bg-opacity-50 z-50' : ''
        }`}
        onClick={() => setIsOpenHam(false)}
      ></div>
      <motion.nav
        className={`lg:block font-semibold absolute top-16 mt-2 left-0 lg:static bg-white rounded-b-lg w-full z-50  ${
          isOpenHam ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-y-3 lg:gap-x-24 lg:flex-row lg:items-center lg:ml-72  ">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              className="text-[#406aff] hover:text-primary transition transition"
              onClick={() => setIsOpenHam(false)}
            >
              <RouterLink className='text-base ml-2' to="/">HOME</RouterLink>
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/Vacancy"
              className="text-[#406aff] text-base ml-2 hover:text-primary transition"
            >
              VACANCY
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/Company"
              className="text-[#406aff] text-base ml-2 hover:text-primary transition"
              
            >
              COMPANY
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/Talent"
              className="text-[#406aff] text-base ml-2 hover:text-primary transition"
              
            >
              TALENT
            </RouterLink>
          </li>
          <li class="flex gap-x-4">
            
          <div class="relative inline-block z-50">
  <RouterLink
    to="/SignUp"
    class="text-white max-w-[140px]  lg:max-w-[200px] w-full ml-2 lg:w-auto px-5 lg:px-7 py-1 lg:py-0.5 my-2 flex items-center rounded-2xl bg-blue-500 cursor-pointer hover:text-white"
    onClick={() => setIsOpen(false)}
  >
    Sign Up
  </RouterLink>
  </div>
  <div className="relative inline-block z-50">
      <motion.button
        className="text-white max-w-[150px] lg:max-w-[200px] w-full lg:w-auto px-4 lg:px-5 py-1 lg:py-0.5 my-2 flex items-center rounded-2xl bg-blue-500 cursor-pointer hover:text-white"
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Sign In
        <BsChevronDown className="ml-1" />
      </motion.button>
      <motion.div
        className="absolute z-50 top-full left-0 w-full bg-white rounded-md shadow-lg divide-y divide-gray-200"
        style={{ overflow: "hidden" }}
        variants={containerVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
      >
        <motion.a
          href="/SignIn"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-500 hover:text-white"
          variants={itemVariants}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
        Student
        </motion.a>
        <motion.a
          href="/SignIn1"
          className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-500 hover:text-white"
          variants={itemVariants}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Company
        </motion.a>
      </motion.div>
    </div>
</li>

        </ul>  
      </motion.nav>
    </motion.header>
  );
};

export default Header;
