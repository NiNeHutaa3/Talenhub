import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Logo1 from '../assets/Rectangle 5.png';
import { AiOutlineAlignRight } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname === '/SignUp' || location.pathname === '/SignIn' || location.pathname === '/Vacancy/Vacancy1' || location.pathname === '/Vacancy/Vacancy1/Vacancy2'   || location.pathname === '/Profile') {
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
        <img src={Logo1} className='h-16 lg:w-16 lg:h-16' />
      </motion.ScrollLink>

      {/* hamburger menu */}
      <button
        type="button"
        className="ml-auto block lg:hidden text-gray-800 hover:text-primary transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineAlignRight size={28} />
      </button>

      {/* navbar */}
      <div
        className={`${
          isOpen ? 'fixed top-16 left-0 w-full h-full bg-gray-400 bg-opacity-50 z-50' : ''
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <motion.nav
        className={`lg:block font-semibold absolute top-16 left-0 lg:static bg-white rounded-b-lg w-full z-50  ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-y-3 lg:gap-x-28 lg:flex-row lg:items-center lg:ml-72 ">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              className="text-[#406aff] hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              <RouterLink to="/">HOME</RouterLink>
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/Vacancy"
              className="text-[#406aff] hover:text-primary  transition"
              onClick={() => setIsOpen(false)}
            >
              VACANCY
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/Company"
              className="text-[#406aff] hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              COMPANY
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/Talent"
              className="text-[#406aff] hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              TALENT
            </RouterLink>
          </li>
          <li className="flex gap-x-4">
            <RouterLink
              to="/SignUp"
              className="text-white max-w-[80px] lg:max-w-[200px] px-2 lg:px-6 py-1 lg:py-1.5 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </RouterLink>
            <RouterLink
              to='/SignIn'
              className='text-white max-w-[80px] lg:max-w-[200px] px-2 lg:px-6 py-1 lg:py-1.5 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer hover:text-primary transition'
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </RouterLink>
          </li>
        </ul>  
      </motion.nav>
    </motion.header>
  );
};

export default Header;
