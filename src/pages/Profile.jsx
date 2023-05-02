import React from 'react'
import profile from '../assets/org.png';
import bg from '../assets/head.png';
import {  motion } from "framer-motion";
import {IoMdDownload} from 'react-icons/io'
import {AiOutlinePlus} from 'react-icons/ai'

import {FaUserAlt, FaGraduationCap, FaUserFriends, FaMedal ,FaBusinessTime} from 'react-icons/fa'
const Profile = () => {
    const handleGoBack = () => {
        // fungsi untuk kembali ke halaman sebelumnya
        window.history.back();
      }

  return (
    <section className='section relative flex flex-col items-center justify-center h-screen overflow-y-scroll'>
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
      className="bg-white rounded-lg shadow-md w-5/6 mt-[2500px] sm:mt-[1330px]">
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
            Nico Edward
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Teknologi Rekayasa Perangkat Lunak
          </p>
          <p className="text-center text-gray-500 text-sm">
            Kavling lama
          </p>
          <div className="flex justify-center">
  <div className="text-center mt-4">
    <a href="https://www.academia.edu/37014018/Contoh_Format_Laporan_pdf" download>
      <button className="bg-white hover:bg-green-500 hover:text-white text-green-400 font-bold py-0.5 px-4 shadow-lg rounded-full flex items-center justify-center">
        <IoMdDownload className='mr-1'/>
        <span>Save file for CV</span>
      </button>
    </a>
  </div>
  </div>
        </div>
      </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-10/12  bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add Profile
    </button>
  </div>
  <div className="absolute top-5 left-2 font-semibold text-lg">Profile</div>
  <hr class="border-gray-300 my-1 mt-16" />
  <div className="mt-6">
  <div className="flex justify-between items-center ml-4">
      <div className="w-1/4 text-gray-500 ">Name</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Niko </div>
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
    <div className="flex justify-between items-center mt-2 mb-10 ml-4">
      <div className="w-1/4 text-gray-500 text-lg font-bold">Skill</div>
      <div className='text-gray-500'>:</div>
      <div className="w-3/4 pl-2 text-gray-500">Java Scropt|HTML|CSS|PHP|React.js</div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
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
    <FaUserAlt class="mr-2" />
    <span>About Me</span>
</div>

  <hr class="border-gray-300 my-1 mt-16" />
    <div className="mt-6">
        <div className="flex justify-between items-center">
            <div className="w-full mb-10 ml-4">Saya memiliki keahlian dalam ngoding, desain UI/UX , dari keahlian itu saya mampu membuat website/aplikasi untuk sebuah perusahaan</div>
        </div>
    </div>
    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5  rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
        </motion.div>
        <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative w-10/12 h-auto sm:h-96 bg-white mt-10 rounded shadow-lg"
>
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white px-3 rounded-full flex items-center">
      <AiOutlinePlus className="text-white mr-1" />
      Add Education
    </button>
  </div>
  <div className="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaGraduationCap class="mr-2" />
    <span>Education</span>
  </div>

  <hr class="border-gray-300 my-1 mt-16" />
  <div className="mt-6">
    <div className="flex flex-col   sm:flex-row ">
      <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base text-blue-500">Institution/High School</p>
        <p className="text-base">Politeknik Negeri Batam</p>
      </div>
      <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base text-blue-500">Year Start</p>
        <p className="text-base">Agustus 2022</p>
      </div>
      <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base text-blue-500">Year End</p>
        <p className="text-base">Agustus 2025</p>
      </div>
      <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base text-blue-500">Major</p>
        <p className="text-base">D4 Teknologi Rekayasa Perangkat Lunak</p>
      </div>
      <div className="w-full sm:w-1/2 mb-4   ml-4 sm:mb-0">
        <p className="text-base text-blue-500">Mark</p>
        <p className="text-base">3.9</p>
      </div>
      <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base sm:ml-24 ml-0 text-blue-500">Action</p>
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add Organization
    </button>
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaUserFriends class="mr-2" />
    <span>Organization Experience</span>
</div>

  <hr class="border-gray-300 my-1 mt-16"/>
    <div className="mt-2 sm:mt-6">
    <div className="flex flex-col sm:flex-row ">
            <div className="w-full sm:w-1/2  ml-4  mb-2 sm:mb-0">
              <p className="text-base text-blue-500">Organization</p>
              <p className="text-base">Panitia YearBook</p>
            </div>
            <div className="w-full sm:w-1/2  ml-4  mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Year Start</p>
                <p className='text-base'>Agustus 2020</p>
            </div>
            <div className="w-full sm:w-1/2  ml-4  mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Year End</p>
                <p className='text-base'>Agustus 2021</p>
            </div>
            <div className="w-full sm:w-1/2 ml-4  mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Tittle</p>
                <p className='text-base'>Ketua</p>
            </div>
            <div className="w-full sm:w-1/2 ml-4  mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Description</p>
                <p className='text-base'>Menggarap Project buku tahunan kelas 12</p>
            </div>
            <div className="w-full sm:w-1/2 mb-4  ml-4  sm:mb-0">
        <p className="text-base sm:ml-24 ml-0 text-blue-500">Action</p>
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
        </div>
    </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add Achievement
    </button>
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaMedal class="mr-2" />
    <span>Achievement</span>
</div>

  <hr class="border-gray-300 my-1 mt-16"/>
    <div className="mt-6">
    <div className="flex flex-col  ml-4  sm:flex-row ">
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Position</p>
                <p className=''>-</p>
            </div>
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Achievemen Date</p>
                <p>-</p>
            </div>
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Description</p>
                <p>-</p>
            </div>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <p className="text-base sm:mb-12 sm:ml-48 ml-0 text-blue-500">Action</p>
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
        </div>
    </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-10/12 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add Experience
    </button>
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaBusinessTime class="mr-2" />
    <span>Experience</span>
</div>

  <hr class="border-gray-300 my-1 mt-16"/>
    <div className="mt-6 ">
    <div className="flex flex-col  ml-4  sm:flex-row ">
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Position</p>
                <p className='text-base'>Programmer</p>
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Company</p>
                <p className='text-base'>Google</p>
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Address</p>
                <p className='text-base'>Jakarta</p>
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Year Start</p>
                <p className='text-base'>January 2022</p>
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Year End</p>
                <p className='text-base'>Maret 2022</p>
            </div>
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Type</p>
                <p className='text-base'>Intern</p>
            </div>
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
                <p class="text-base text-blue-500">Job Desk</p>
                <p className='text-base'>~Membuat Software</p>
                <p className='text-base'>~Melakukan test software</p>
            </div>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <p className="text-base sm:mb-12 sm:ml-24 ml-0 text-blue-500">Action</p>
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
        </div>
    </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-10/12 h-96 bg-white mt-10 rounded shadow-lg">
  <div className="absolute top-0 right-0 mt-2 mr-2">
    <button className="bg-blue-500 text-white  px-3 rounded-full flex items-center">
        <AiOutlinePlus className='text-white mr-1' />
        Add  Reference
    </button>
  </div>
  <div class="absolute top-5 left-2 flex items-center font-semibold text-lg">
    <FaUserFriends class="mr-2" />
    <span>Reference</span>
</div>

  <hr class="border-gray-300 my-1 mt-16"/>
    <div className="mt-6">
    <div class="flex flex-row text-center">
            <div className="w-full sm:w-1/3 mb-2 sm:mb-0">
                <p className=''>PT SHOPEE-Pak Iyok</p>
            </div>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <div className="absolute bottom-0 right-0 flex flex-wrap justify-end">
          <button className="text-sm bg-blue-500 px-4 py-1 sm:px-5 sm:py-2 rounded-full text-white hover:text-gray-800 mr-2 mb-2">
            Edit
          </button>
          <button className="text-sm bg-red-500 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-white hover:text-red-800 mb-2">
            Hapus
          </button>
        </div>
      </div>
        </div>
    </div>
        </motion.div>

    </section>
  )
}

export default Profile
