import React from 'react';
import profile from '../assets/perta.png';
import bg from '../assets/head1.png';
import {  motion } from "framer-motion";

const Company1 = () => {
  const handleGoBack = () => {
    // fungsi untuk kembali ke halaman sebelumnya
    window.history.back();
  }

  return (
    <section className="section relative flex flex-col items-center justify-center h-screen overflow-y-scroll">
      <motion.button 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
      className="absolute top-0 left-0 mt-2 ml-0.5 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full" onClick={handleGoBack}>Back</motion.button>
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg mt-40 shadow-md w-4/6">
        <div className="h-32">
          <img
            className="object-cover w-full h-full"
            src={bg}
            alt="Vacancy2"
          />
        </div>
        <div className="flex items-center justify-center h-20 -mt-12">
          <div className="flex items-center justify-center bg-blue-300 rounded-full h-32 w-32">
            <img
              className="object-cover rounded-full w-full h-full "
              src={profile}
              alt="Person"
              
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg text-center font-bold  mt-2 mb-2">
            PT.PERTAMINA
          </h2>
          <p className="text-center text-gray-500 text-sm">
            BUMN
          </p>
          <p className="text-center text-gray-500 text-sm mb-5">
            BATAM
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-8/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-5 left-2 font-semibold text-lg">Profile Company</div>
  <hr class="border-gray-300 my-1 mt-16" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">PT.PERTAMINA</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Batam</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Field Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Petroleum and Gas</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Type Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">BUMN</div>
    </div>
    <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500">Facility</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">T-Shirt,hostel,wearpack,helm</div>
    </div>
    <div className="flex justify-between items-center mb-5 ml-4">
      <div className="w-1/4 text-gray-500">Company size</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
  </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-8/12 h-96 bg-white mt-10 mb-10 rounded shadow-lg">
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <span>Description Company</span>
</div>

  <hr class="border-gray-300 my-1 mt-16" />
    <div className="mt-6">
        <div className="flex justify-between items-center">
            <div className="w-full mb-8 ml-4">PT pertamina bergerak di sektor pertambangan minyak dan gas</div>
        </div>
    </div>
        </motion.div>
    </section>
  );
};

export default Company1;
