import React from 'react'
import Logo from '../assets/talent.png';
import {  motion } from "framer-motion";
import { Link } from 'react-router-dom';


const See = () => {
    const handleGoBack = () => {
        // fungsi untuk kembali ke halaman sebelumnya
        window.history.back();
      }

return (
    <section className='section flex flex-col items-center justify-center h-screen overflow-y-scroll'>
    <motion.button 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        className="relative self-start top-5 left-3 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full" 
        onClick={handleGoBack}>
        Back
    </motion.button>
    <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded-lg shadow-xl">
  <div className="absolute top-0 right-0 mt-6 mr-2">
    <Link to='See1' className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        See Detail
    </Link>
  </div>
  <div class="w-16 h-16 self-center ml-5 mt-2 ">
            <img src={ Logo } alt="" class="w-20 h-16 rounded-md" />
          </div>
  <hr class="border-gray-300 my-1 mt-2" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Niko </div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Sagulung</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Phone Number</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Email</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">nicohutagalung@gmail.com</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Linkedin</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Nicoo</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Facebook</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500"></div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
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
    <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded-lg shadow-xl">
  <div className="absolute top-0 right-0 mt-6 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        See Detail
    </button>
  </div>
  <div class="w-16 h-16 self-center ml-5 mt-2 ">
            <img src={ Logo } alt="" class="w-20 h-16 rounded-md" />
          </div>
  <hr class="border-gray-300 my-1 mt-2" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Adrian dapit</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Dekat tamles</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Phone Number</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Email</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">adriantmbn@gmail.com</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Linkedin</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Adrian</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
      <div className="w-1/4 text-gray-500">Facebook</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500"></div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-10px]">
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
    </section>
    )
}

export default See
