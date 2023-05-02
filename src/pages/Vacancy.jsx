import React, { useState } from "react";
import Logo from '../assets/Rectangle 5.png';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";


const Vacancy = () => {
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
    <section className="section absolute flex h-full" >
      <div className="w-1/3 " >
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
        className="flex flex-col mt-32 sm:mt-16 items-start bg-white p-4 rounded-lg shadow-md " 
        >
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
        className="w-full mb-12 flex"
        >
          <input
            type="text"
            placeholder="Find Vacancy"
            value={searchText}
            onChange={handleSearchChange}
            className="w-full border  px-4 py-0 rounded-l-lg shadow-md  focus:outline-none"
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
              <option value="">Field To Work</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
          exit={{ opacity: 0, x: -100, transition: { duration: 1.5 } }}
          className="flex flex-col w-full mb-4"
          >
            <span className="mb-2 font-bold">Offer Tipe</span>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type1"
                checked={filterType.includes("type1")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Full time</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type2"
                checked={filterType.includes("type2")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-6 w-6 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 ">Contract employees</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type3"
                checked={filterType.includes("type3")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Part time</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type4"
                checked={filterType.includes("type4")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Intern</span>
            </label>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.7 } }}
          exit={{ opacity: 0, x: -100, transition: { duration:  1.7} }}
          className="flex flex-col w-full mb-4">
            <span className="mb-2 font-bold">Experience level</span>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type5"
                checked={filterType.includes("type5")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Entry level</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type6"
                checked={filterType.includes("type6")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Midle level</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="filterType"
                value="type7"
                checked={filterType.includes("type7")}
                onChange={handleFilterTypeChange}
                className="form-checkbox h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
              />
              <span className="ml-2 text-gray-700">Senior level</span>
            </label>
            <div class="mt-4 flex justify-center items-center">
              <button href="#" class="px-8 py-0.5 text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 md:px-12 sm:py-1 lg:px-20 lg:py-0 transition duration-500 transform hover:scale-105">SORT</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div class="flex flex-wrap justify-center mt-[3700px] sm:mt-[1260px]">
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
        class="p-4 rounded-xl shadow-xl mt-[-60px] mr-10 mb-20 relative">
          <div class="absolute top-0 right-0 mt-3 mr-3">
            <p class="text-sm text-gray-500">Full time</p>
            <p class="text-sm text-center text-gray-500">Batam</p>
          </div>
          <div class="flex items-center justify-center">
            <div class="w-full max-w-md flex">
              <div class="w-24 h-24 mr-4 self-start">
                <img src={ Logo } alt="" class="w-20 h-20 rounded-md" />
              </div>
              <div class="flex flex-col justify-between w-full">
                <div class="text-center">
                  <h2 class="text-base font-medium mr-20">Polibatam Software Team(PS Team)</h2>
                  <p class="mt-2 text-lg text-blue-700 font-bold mb-2 mr-20">Software engineer</p>
                  <p class="mt-2 text-lg text-blue-500 text-xl font-bold mb-2 mr-20">5Jt-10Jt</p>
                  <p class="mt-2 text-  mr-20 " >Pria/Perempuan Minimal lulusan SMK RPL/Teknik Informatika S1, D4,D3</p>
                  <p class="mt-2 text-base mr-20">Registration end 01 Maret 2023</p>
                </div>
                <Link to='/Vacancy/Vacancy1' class="mt-4 text-center mr-20">
                  <a href="#" class="inline-block px-4  text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">Apply</a>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>  
      <div className="absolute flex mt-[7750px] left-[150px] sm:mt-[2850px] sm:left-[660px] bg-white rounded-lg ">
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

export default Vacancy;
