import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {FaBusinessTime} from 'react-icons/fa'
import {BsFillTrashFill} from 'react-icons/bs'


function Make  ()  {
    const [showCard, setShowCard] = useState(false);

    const handleAddVacancy = () => {
      setShowCard(true);
    }; 

    const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <section className='section flex flex-col items-center justify-center h-full'>
      <div className="flex justify-center items-center   ">
        <motion.div initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <Link
  className="bg-blue-500 px-3 py-0.5 mt-16 mr-72 sm:mb-[-10px] sm:mt-16 sm:mr-[1000px] rounded-full text-white flex items-center transition duration-300 transform hover:scale-105 "
  onClick={handleAddVacancy}
>
  <AiOutlinePlus className="text-white mr-1" />
  Add Vacancy
</Link>

        </motion.div>
      </div>
      <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative w-10/12 sm:h-40  bg-white mt-5 rounded shadow-xl"
>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaBusinessTime class="mr-2" />
    <span>Vacancy</span>
  </div>

  <hr class="border-gray-300 my-1 mt-16" />

  <div className="mt-6 flex flex-col  ml-4  sm:flex-row">
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Position</p>
      <p className="text-sm">Sotfware Engginer</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Salary</p>
      <p className="text-sm">Rp 4.500.000 - Rp 5.000.000</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">
        Registration Duration
      </p>
      <p className="text-sm">2023-04-18</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Type</p>
      <p className="text-sm">Full Time</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Level</p>
      <p className="text-sm">Middle</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3">
      <p class="font-medium text-base text-blue-500">Location</p>
      <p className="text-sm">Batam</p>
    </div>
    <div class="flex-grow sm:w-1/3 flex justify-center items-center">
  <div className="flex">
    <button className="text-sm bg-blue-500 px-4 h-6 rounded-full text-white hover:text-gray-800 mr-2 mb-12">
      Edit
    </button>
    <button className="text-sm bg-red-500 px-4 h-6 rounded-full text-white hover:text-red-800 mb-12">
      Hapus
    </button>
    <button className="text-sm bg-blue-500 px-4 h-6 rounded-full text-white hover:text-gray-800 ml-2 mb-12 whitespace-nowrap">
      See Applicant
    </button>
  </div>
</div>

  </div>
</motion.div>
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative w-10/12 sm:h-40  bg-white mt-24 rounded shadow-xl"
>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaBusinessTime class="mr-2" />
    <span>Vacancy</span>
  </div>

  <hr class="border-gray-300 my-1 mt-16" />

  <div className="mt-6 flex flex-col  ml-4  sm:flex-row">
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class=" text-base text-blue-500">Position</p>
      <p className="text-sm">Sotfware Engginer</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class=" text-base text-blue-500">Salary</p>
      <p className="text-sm">Rp 4.500.000 - Rp 5.000.000</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class=" text-base text-blue-500">
        Registration Duration
      </p>
      <p className="text-sm">2023-04-18</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Type</p>
      <p className="text-sm">Full Time</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3 mb-3">
      <p class="font-medium text-base text-blue-500">Level</p>
      <p className="text-sm">Middle</p>
    </div>
    <div class="flex-grow text-start sm:text-center sm:w-1/3">
      <p class="font-medium text-base text-blue-500">Location</p>
      <p className="text-sm">Batam</p>
    </div>
    <div class="flex-grow sm:w-1/3 flex justify-center items-center">
  <div className="flex">
    <button className="text-sm bg-blue-500 px-4 h-6 rounded-full text-white hover:text-gray-800 mr-2 mb-12">
      Edit
    </button>
    <button className="text-sm bg-red-500 px-4 h-6 rounded-full text-white hover:text-red-800 mb-12">
      Hapus
    </button>
    <button className="text-sm bg-blue-500 px-4 h-6 rounded-full text-white hover:text-gray-800 ml-2 mb-12 whitespace-nowrap">
      See Applicant
    </button>
  </div>
</div>

  </div>
</motion.div>
        <div className="absolute bottom-56 left-28">
            <AnimatePresence>
      {showCard && (
        <motion.div className="fixed top-11 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
          <motion.div className="bg-white sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 h-10/12 p-6 rounded-md shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
          <div className="grid grid-cols-6 gap-4">
  <div className="col-span-3">
    <div className="mt-[-20px]">
      <h1>Position</h1>
      <input type="text" placeholder="Input Position" className="border-2 border-blue-400 p-0.5 mb-2 rounded-md w-full" />
    </div>
    <div>
      <h1>Location</h1>
      <input type="text" placeholder="Input Location" className="border-2 border-blue-400 p-0.5 mb-2 rounded-md w-full" />
    </div>
    <div>
      <h1>Level</h1>
      <select className="border-2 border-blue-400 p-1.5 mb-4 rounded-md w-full">
        <option value=""></option>
        <option value="1">level 1</option>
        <option value="2">level 2</option>
        <option value="3">level 3</option>
      </select>
    </div>
  </div>
  <div className="col-span-3">
    <div className="mt-[-20px]">
      <h1>Salary</h1>
      <input type="text" placeholder="Input Salary" className="border-2 border-blue-400 p-0.5 mb-2 rounded-md w-full" />
    </div>
    <div>
      <h1>Type</h1>
      <select className="border-2 border-blue-400 p-1.5 mb-2 rounded-md w-full">
        <option value=""></option>
        <option value="1">Field 1</option>
        <option value="2">Field 2</option>
        <option value="3">Field 3</option>
      </select>
    </div>
    <div>
      <h1>Registration duration</h1>
      <input type="text" placeholder="Input Registration duration" className="border-2 border-blue-400 p-0.5 mb-2 rounded-md w-full" />
    </div>
  </div>
</div>
<div className="bg-white p-2 rounded-md shadow-lg">
    <div className="relative">
        <h1 className="mb-[-10px]">Jobdesk</h1>
        <input type="text" placeholder="Input Jobdesk" className="border-2 border-blue-400 p-1 mt-3 rounded-md w-full pr-10" />
        <button className="absolute top-3/4  right-3 transform -translate-y-1/2">
            <BsFillTrashFill className="text-red-500 mb-1" />
        </button>
    </div>
    <button className="bg-blue-500 text-white px-16 rounded-full flex items-center transition duration-300 transform hover:scale-105 mt-4 mx-auto block">
        ADD
    </button>
</div>
<div className="bg-white mt-5 p-2 rounded-md shadow-lg">
    <div className="relative">
        <h1 className="mb-[-10px]">Requirement</h1>
        <input type="text" placeholder="Input Requirment" className="border-2 border-blue-400 p-1 mt-3 rounded-md w-full pr-10" />
        <button className="absolute top-3/4 right-3 transform -translate-y-1/2">
            <BsFillTrashFill className="text-red-500 mb-1"/>
        </button>
    </div>
    <button className="bg-blue-500 text-white px-16 rounded-full flex items-center transition duration-300 transform hover:scale-105 mt-4 mx-auto block">
        ADD
    </button>
</div>

            <div className="flex justify-between mt-10">
  <Link className="bg-red-500 text-white px-3 rounded-full flex items-center transition duration-300 transform hover:scale-105" onClick={handleCloseCard}>
    Cancel
  </Link>
  <button className="bg-blue-500 text-white px-3 rounded-full flex items-center transition duration-300 transform hover:scale-105">
    Add Vacancy
  </button>
</div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
        </div>
    </section>
  )
}

export default Make
