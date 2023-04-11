import React from 'react';
import profile from '../assets/org.png';
import bg from '../assets/head.png';
import {  motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Vacancy2 = () => {
  const handleGoBack = () => {
    // fungsi untuk kembali ke halaman sebelumnya
    window.history.back();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-5px]">
      <motion.button 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
      className="absolute top-0 left-0 mt-2 ml-0.5 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full" onClick={handleGoBack}>Back</motion.button>
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg shadow-md w-4/6">
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
            Teknologi Rekayasa Perangkat Lunak
          </p>
          <p className="text-center text-gray-500 text-sm">
            GPA:3.9
          </p>
          <div className="flex justify-center mb-[-20px] mt-1">
            <Link to='/Profile' className="text-blue-500 font-bold py-2 px-4 underline">
              See Profile
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-7 w-4/6">
  <label htmlFor="fileInput" className="text-sm font-bold">
    INPUT RESUME OR CV
  </label>
  <div className="mt-1 flex rounded-md w-96 shadow-lg">
  <div className="relative flex items-center justify-center px-2 py-2 bg-white border-2 border-blue-400 rounded-l-md">
    <svg
      className="w-6 h-6 text-blue-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 15v4m0 0h4m-4 0l-4-4m4 4l4-4m-5-9l-3 3m3 0l3-3m5-2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2z"
      ></path>
    </svg>
  </div>
  <input
    type="file"
    id="fileInput"
    className="hidden"
    placeholder="Choose file"
  />
  <input
    type="text"
    readOnly
    className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-10 rounded-none rounded-r-md sm:text-sm border-2 border-blue-500"
    placeholder="Choose file"
  />
</div>
<motion.div
initial={{ opacity: 0, y: -100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
>
  <div className="mt-4">
  <label htmlFor="other" className="text-sm font-bold">
    OTHER INFORMATION
  </label>
  <textarea
    id="other"
    name="other"
    placeholder="Explain why you deserve for this vacancy"
    className="block w-full h-44 mt-1 rounded-md shadow-lg border-blue-400 border-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  ></textarea>
  <motion.div 
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  class="text-center">
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-10 rounded-full mt-4">
    APPLY NOW
  </button>
  </motion.div>
</div>

</motion.div>


</motion.div>

    </div>
  );
};

export default Vacancy2;
