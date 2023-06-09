import React from 'react';
import { useState } from 'react';
import Img from '../assets/sign.png';
import { Link }  from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp = () => {
  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderInput = () => {
    switch (selectedOption) {
      case 'company':
        return  <>
                  <div className="mb-4 mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Name Of Company
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Input your Name of Company"
                    />
                  </div>
                  <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email Of Company
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Input your Email of Company"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phonenumber"
              type="text"
              placeholder="Input your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              type="Username"
              placeholder="Input your Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Input your password"
            />
          </div>
                </>;
      case 'student':
        return (
          <>
                  <div className="mb-4 mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      NIM
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nim"
                      type="text"
                      placeholder="Input your NIM"
                    />
                  </div>
                  <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Input your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Input your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Input your password"
            />
          </div>
                </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-gradient-to-r from-cyan-300 to-blue-400 grid grid-cols-1 sm:grid-cols-2 h-screen w-full relative">
      <motion.div
        className="hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <motion.div
          className="absolute inset-y-0 right-0 w-2/4 bg-blue-200 rounded-[50px] rounded-r-lg"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={transition}
        ></motion.div>
        <motion.img
          className="absolute inset-y-12 left-0 w-2/4 h-3/4"
          src={Img}
          alt=""
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={transition}
        />
      </motion.div>
      <div className="flex justify-end items-center absolute inset-0 pr-[90px]">
      
        <motion.form
          className="bg-white shadow-md rounded-[30px] px-[5%] sm:px-[110px] py-[5%] sm:py-[30px]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={transition}
        >
          
          <diV className='text-center'>
            <h2 className="text-3xl mb-6 ">Sign Up</h2>
          </diV>
          <div className="w-full mb-4"
          >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              As a
            </label>
            <select
              className="w-full border-2 border-blue-200  px-4 py-2 rounded-lg shadow-md  focus:outline-none"
              value={selectedOption} onChange={handleOptionChange}
              >
              <option value=""></option>
              <option value="student">Polibatam Student</option>
              <option value="company">Company</option>
            </select>
            {renderInput()}
          </div>
          <div className="flex items-center justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-base py-1.5 px-8 rounded-[25px] focus:outline-none focus:shadow-outline transition-all duration-500" type="button">
              Sign Up
            </button>
          </div>
        </motion.form>
        <Link
          to='/'
          className="absolute top-0 left-0 m-6 py-1.5 px-4 rounded-[25px] text-sm bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline cursor-pointer" 
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={transition}
          >
            BACK
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default SignUp;
