import React from 'react'
import profile from '../assets/perta.png';
import bg from '../assets/head1.png';
import {AiOutlinePlus} from 'react-icons/ai'
import {  motion } from "framer-motion";

const manage = () => {
  return (
    <section className="section flex flex-col items-center justify-center h-screen overflow-y-scroll">
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-lg mt-40 shadow-md w-5/6">
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
            Tiyosptr@gmail.com
          </p>
          <p className="text-center text-gray-500 text-sm mb-5">
            Tiban
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add Profile
    </button>
  </div>
  <div className="absolute top-5 left-2 font-semibold text-lg">Profile Company</div>
  <hr class="border-gray-300 my-1 mt-16" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Niko</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-5px]">
      <div className="w-1/4 text-gray-500">Address</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Sagulung</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-5px]">
      <div className="w-1/4 text-gray-500">Field Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">-</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-5px]">
      <div className="w-1/4 text-gray-500">Type_Company</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">tiyosptr@gmail.com</div>
    </div>
    <div className="flex justify-between items-center ml-4 mt-[-5px]">
      <div className="w-1/4 text-gray-500">Facility</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">tiyosptr</div>
    </div>
    <div className="flex justify-between items-center mb-10 ml-4 mt-[-5px]">
      <div className="w-1/4 text-gray-500">Company Size</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500"></div>
    </div>
  </div>
  <div className="absolute bottom-0 right-0 flex justify-end">
    <button className="text-medium bg-blue-500 px-4 rounded-full text-white hover:text-gray-800 mr-2 mb-2">Edit</button>
    <button className="text-medium bg-red-500 px-4 rounded-full text-white hover:text-red-800 mb-2">Hapus</button>
  </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add About Me
    </button>
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <span>Description Company</span>
</div>

  <hr class="border-gray-300 my-1 mt-16" />
    <div className="mt-6">
        <div className="flex justify-between items-center">
            <div className="w-full mb-10 ml-4">Saya memiliki keahlian dalam ngoding, desain UI/UX , dari keahlian itu saya mampu membuat website/aplikasi 
                untuk sebuah perusahaan</div>
        </div>
    </div>
    <div className="absolute bottom-0 right-0 flex justify-end">
        <button className="text-medium bg-blue-500 px-4 rounded-full text-white hover:text-gray-800 mr-2 mb-2">Edit</button>
        <button className="text-medium bg-red-500 px-4 rounded-full text-white hover:text-red-800 mb-2">Hapus</button>
    </div>
        </motion.div>
    </section>
  )
}

export default manage
