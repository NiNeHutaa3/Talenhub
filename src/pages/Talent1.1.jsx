import React from 'react'
import profile from '../assets/talent.png';
import bg from '../assets/head.png';
import {  motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Talent11 = () => {
    const handleGoBack = () => {
        // fungsi untuk kembali ke halaman sebelumnya
        window.history.back();
      }

  return (
    <section className='section relative flex flex-col items-center justify-center h-screen '>
      <motion.button 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        className="absolute top-0 left-0 mt-2 ml-0.5 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full" onClick={handleGoBack}>
          Back
      </motion.button>
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md w-5/6 lg:mt-1 ">
        <div className="h-32">
          <img
            className="object-cover w-full h-full"
            src={bg}
            alt="Vacancy2"
          />
        </div>
        <div className="flex items-center justify-center h-20 -mt-11">
          <div className="flex items-center justify-center bg-blue-300 rounded-full h-28 w-28">
            <img
              className="object-cover rounded-full w-full h-full"
              src={profile}
              alt="Person"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg text-center font-bold  mt-2 mb-2">
            Tiyo Saputra
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Tiyospt@gmail.com
          </p>
          <p className="text-center text-gray-500 text-sm">
            Tiban
          </p>
        </div>
      </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  
  <div className="absolute top-5 left-2 font-semibold text-lg">Profile</div>
  <hr class="border-gray-300 my-1 mt-12" />
  <div className="mt-1">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Tiyo Saputra </div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Sagulung</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Phone Number</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Email</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">nicohutagalung@gmail.com</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Linkedin</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Nicoo</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Facebook</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500"></div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Instagram</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500"></div>
    </div>
    <div className="flex justify-between items-center mt-2 ml-4">
      <div className="w-1/4 text-gray-500 text-lg font-bold">Skill</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Java Scropt|HTML|CSS|PHP|React.js</div>
    </div>
  </div>
        </motion.div>
        <Link to='/SignIn' class="mt-4 text-center">
            <motion.button 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.6 } }}
            class="inline-block px-6 py-1 text-base text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</motion.button>
          </Link>

    </section>
  )
}

export default Talent11 ;
