import React from 'react'
import Logo from '../assets/talent.png';
import {  motion } from "framer-motion";
import { FaDownload } from 'react-icons/fa';

const See1 = () => {
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
    transition={{ duration: 0.7 }}
    className='mt-10 self-center sm:self-start sm:ml-32'> 
      <a
        href="https://www.academia.edu/37014018/Contoh_Format_Laporan_pdf"
        download="your-file-name.pdf"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaDownload className="mr-2" />
        Download PDF
      </a>
    </motion.div>
    <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded-lg shadow-xl">
  <div className="absolute top-0 right-0 mt-2 mr-2">
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <span className='text-xl'>OTHERS INFORMATION</span>
</div>

  <hr class="border-gray-300 my-1 mt-16" />
    <div className="mt-6">
        <div className="flex justify-between items-center">
            <div className="w-full mb-10 ml-4">saya pernah bekerja menjadi software engineer di google. dari skil yang saya kuasai semoga bapak/ibuk dapat mempertimbangkan 
            saya untuk bekerja di perusahaan bapak dan ibu</div>
        </div>
    </div>
    </motion.div>
    </section>
  )
}

export default See1
