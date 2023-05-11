import React, { useState } from "react";
import Logo from '../assets/talent.png';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";


const Talent = () => {

  let [num,setNum] = useState(1)
  let [cur,setCur] = useState(1)

    const pages = [
      {page: num},
      {page: num + 1},
      {page: num + 2},
      {page: num + 3},
    ]
    function Next ()
    {
      setNum(++num)
    }
    function Back ()
    {
      num > 1 &&  setNum(--num)
    }

    const paginationVariants = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
      exit: { opacity: 0, transition: { duration: 0.5 } }
    }

  
  return (
    <section className="section relative flex p-5  h-full" >
      <div class="flex flex-wrap justify-center mt-[100px] sm:mt-[160px]">
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-20 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-2">Tiyo Saputra</h2>
            <p class="mt-2 text-lg ">Tiyospt@gmail.com</p>
            <p class=" text-lg ">Tiban</p>
            <p class=" text-lg ">Linkedid</p>
          </div>
          <Link to='/Talent/Talent1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-[10px] shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      </div>  
      <div className="absolute flex mt-[3300px] left-[100px] sm:mt-[1400px] sm:left-[540px] mb-10 bg-white rounded-lg ">
    <button onClick={Back} className="h-12 border-2 border-r-0 border-blue-600 px-4 rounded-l-lg hover:bg-blue-600 hover:text-white">
      <AiOutlineLeft />
    </button>
    {
      pages.map((pg, i) =>(
        <button key={i} onClick={() => setCur(pg.page)} className={`h-12 border-2 border-r-0 border-blue-600 w-12 ${cur === pg.page && 'bg-blue-600 text-white'}`}>{pg.page}</button>
      ) )
    }
    <button onClick={Next} className="h-12 border-2  border-blue-600 px-4 rounded-r-lg hover:bg-blue-600 hover:text-white">
      <AiOutlineRight />
    </button>
  </div>
    </section>
  );
}

export default Talent;
