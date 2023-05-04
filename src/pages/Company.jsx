import React, { useState } from "react";
import Logo from '../assets/perta.png';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";


const Company = () => {
  const [searchText, setSearchText] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    const { value, checked } = event.target;
  
    if (checked) {
      setFilterType([...filterType, value]);
    } else {
      setFilterType(filterType.filter((type) => type !== value));
    }
  };

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
    <section className="section relative flex p-5  h-screen h-full overflow-y-scroll" >
      <div className="w-1/3" >
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        className="flex flex-col items-start bg-white p-4 rounded-lg shadow-md mt-[-120px]" 
        >
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
        className="w-full mb-24 flex "
        >
          <input
            type="text"
            placeholder="Find Company"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full border  px-4 py-0 rounded-l-lg shadow-md  focus:outline-none "
          />
          <button className="bg-green-400 hover:bg-green-400 text-white shadow-md font-bold py-0 px-2 rounded-r">
            Search
          </button>
        </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 1.2 } }}
          className="w-full mb-16"
          >
            <select
              value={filterOption}
              onChange={handleFilterOptionChange}
              className="w-full border  px-4 py-1 rounded-lg shadow-md  focus:outline-none transition duration-500 transform hover:scale-105"
              >
              <option value="">Field Of Company</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 1.3 } }}
          className="w-full mb-16"
          >
            <select
              value={filterOption}
              onChange={handleFilterOptionChange}
              className="w-full border  px-4 py-1 rounded-lg shadow-md  focus:outline-none transition duration-500 transform hover:scale-105"
              >
              <option value="">Type Of Company</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </motion.div>
            <div class="flex justify-center">
              <button href="#" class="inline-flex items-center px-8 py-0.5 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 md:px-12 md:py-3 lg:px-28 lg:py-0 mx-auto transition duration-500 transform hover:scale-105">SORT</button>
            </div>
        </motion.div>  
      </div>
      <div class="flex flex-wrap justify-center mt-[2800px] sm:mt-[1260px]">
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative flex justify-center items-center" style={{ width: "400px", height: "300px" }}>
        <div class="w-full max-w-md flex flex-col justify-center items-center">
          <div class="w-24 h-24 self-center mb-4">
            <img src={ Logo } alt="" class="w-24 h-24 rounded-md" />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-500 mb-5">PT.PERTAMINA</h2>
            <p class="mt-2 text-lg ">BUMN</p>
            <p class=" text-lg ">BATAM</p>
          </div>
          <Link to='/Company/Company1' class="mt-6 text-center">
            <a href="#" class="inline-block px-4 py-1 text-sm text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 ">VIEW MORE</a>
          </Link>
        </div>
      </motion.div>
      </div>  
      <div className="absolute flex mt-[6000px] left-[150px] sm:mt-[2850px] sm:left-[690px] mb-10 bg-white rounded-lg ">
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

export default Company;
