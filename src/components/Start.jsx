import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import {MdFactory} from 'react-icons/md'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Start = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const slideRight = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };
return (
  <section className="section flex flex-col items-center  justify-center sm:flex-row flex-col" id="Start" style={{ height: "150vh", paddingTop:"100px" }}>
    <div className="flex flex-col items-center justify-between flex-grow max-w-6xl" >
    <motion.div
  className="flex flex-row my-5 sm:ml-[463px]"
  ref={ref1}
  animate={inView1 ? 'visible' : 'hidden'}
  variants={slideLeft}
>
  <div className="w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center transition duration-500 transform hover:scale-105">
    <FaUserFriends className="text-white text-xl" />
  </div>
  <div className="ml-4 font-medium text-lg transition duration-500 transform hover:scale-105">
    <h1 className="text-2xl font-semibold text-blue-500">
      Make a CV according to ATS Friendly
    </h1>
    <p className="py-4 max-w-md">
      This website helps you to create a suitable and friendly CV that has become a company standard for recruiting.
    </p>
  </div>
</motion.div>
<div className="flex flex-row items-center mt-[-91px] mb-[-19px]">
  <div className="hidden  sm:block" style={{ borderLeft: "2px solid gray", height: "100px" }}></div>
  <div className="sm:hidden sm:mt-5" style={{ borderTop: "2px solid gray", width: "100%" }}></div>
</div>

        <motion.div 
        className="flex flex-row-reverse my-5 sm:mr-[420px]"
        ref={ref2}
        animate={inView2 ? 'visible' : 'hidden'}
        variants={slideRight}
        >
          <div className="w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center transition duration-500 transform hover:scale-105">
            <FaUserFriends className="text-white text-xl" />
          </div>
          <div className="mr-4 font-medium text-lg text-right transition duration-500 transform hover:scale-105">
            <h1 className='text-2xl font-semibold text-blue-500 '>Find the job vacancy that you dream of</h1>
            <p className=" py-4 max-w-md">This website provides your dream job vacancies</p>
          </div>
        </motion.div>
        <div className="flex flex-row items-center mt-[-91px] mb-[-19px]">
  <div className="hidden sm:block" style={{ borderLeft: "2px solid gray", height: "120px" }}></div>
  <div className="sm:hidden" style={{ borderTop: "2px solid gray", width: "100%" }}></div>
</div>
        <motion.div 
        className="flex flex-row sm:ml-[465px]  my-5"
        ref={ref3}
        animate={inView3 ? 'visible' : 'hidden'}
        variants={slideLeft}
        >
          <div className="w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center transition duration-500 transform hover:scale-105">
            <MdFactory className="text-white text-xl" />
          </div>
          <div className="ml-4 font-medium text-lg transition duration-500 transform hover:scale-105">
            <h1 className='text-2xl font-semibold text-blue-500 '>Looking for suitable candidates</h1>
            <p className=" py-4 max-w-md">This website displays hundreds of candidates with their respective portfolios</p>
          </div>
        </motion.div>
        <div className="flex flex-row items-center mt-[-91px] mb-[-19px]">
  <div className="hidden sm:block" style={{ borderLeft: "2px solid gray", height: "100px" }}></div>
  <div className="sm:hidden" style={{ borderTop: "2px solid gray", width: "100%" }}></div>
</div>
        <motion.div 
        className="flex flex-row-reverse sm:mr-[463px] my-5"
        ref={ref4}
        animate={inView4 ? 'visible' : 'hidden'}
        variants={slideRight}     
        >
          <div className="w-12 h-12 rounded-full bg-blue-400 flex justify-center items-center transition duration-500 transform hover:scale-105">
            <MdFactory className="text-white text-xl" />
          </div>
          <div className="mr-4 font-medium text-right transition duration-500 transform hover:scale-105">
            <h1 className='text-2xl font-semibold text-blue-500 '>Easy to recruit</h1>
            <p className=" py-4 max-w-md">This website can make it easier for companies to recruit candidates</p>
          </div>
        </motion.div>
      </div >
  </section>
  );
};

export default Start