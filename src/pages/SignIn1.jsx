import React from 'react';
import Img from '../assets/sign.png';
import { motion } from 'framer-motion';
import { Link }  from 'react-router-dom';

const SignIn1 = () => {
  const handleGoBack = () => {
    // fungsi untuk kembali ke halaman sebelumnya
    window.history.back();
  }

  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
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
          className="bg-white shadow-md rounded-[30px] px-[5%] sm:px-[110px] py-[5%] sm:py-[100px]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={transition}
        >
          <h2 className="text-3xl text-center mb-12">Sign In To TalentHub</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-4 sm:px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Input your username"
            />
          </div>
          <div className="mb-6">
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
          <div className="flex items-center justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-base py-1.5 px-8 rounded-[25px] focus:outline-none focus:shadow-outline transition-all duration-500" type="button">
              Sign In
            </button>
          </div>
        </motion.form>
        <Link
          className="absolute top-0 left-0 m-6 py-1 px-4 rounded-[25px] bg-blue-500 text-sm text-white font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline cursor-pointer sm:block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={transition}
            onClick={handleGoBack}
          >
            BACK
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export default SignIn1;
