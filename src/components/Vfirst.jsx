import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../assets/Rectangle 5.png";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import { motion } from "framer-motion";
import {BsArrowRight} from 'react-icons/bs'
import { Link } from "react-router-dom";


const Vfirst = () => {
  const [vacancies, setVacancies] = useState([
    {
      id: 1,
      title: "Software Engineer",
      image: Image,
      description: "Polibatam Software Team (PS Team)",
      link: "#",
    },
    {
      id: 2,
      title: "Front-end Developer",
      image: Image,
      description: "Tech Company Inc.",
      link: "#",
    },
    {
      id: 3,
      title: "Data Scientist",
      image: Image,
      description: "Big Data Company Ltd.",
      link: "#",
    },
    {
      id: 4,
      title: "Back-end Developer",
      image: Image,
      description: "E-commerce Inc.",
      link: "#",
    },
    {
      id: 5,
      title: "Full-stack Developer",
      image: Image,
      description: "Start-up Company Ltd.",
      link: "#",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-10">Vacancy</h1>
          <Link className="text-blue-500 underline font-medium hover:text-blue-700" to="/Vacancy">
            SEE ALL
          </Link>
        </div>
        <Slider {...settings} className="mt-4 mb-9" style={{marginTop: "50px", marginBottom: "50px"}}>
  {vacancies.map((vacancy) => (
    <motion.div key={vacancy.id} className="px-4 "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    >
      <div className="bg-white border-2 border-white rounded-lg px-6 py-8" style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)"}}>
        <img
          className="w-32 h- object-contain mb-4 mx-auto"
          src={vacancy.image}
          alt={vacancy.title}
        />
        <h2 className="text-lg text-center font-bold mb-2">{vacancy.title}</h2>
        <p className="text-gray-600 text-center mb-4">{vacancy.description}</p>
        <div className="text-center">
          <a className="text-blue-500 text-center font-medium hover:text-blue-700" href={vacancy.link}>
            <span className="flex items-center justify-center">
              READ ME
              <BsArrowRight className="ml-2" />
            </span>
          </a>
        </div>
      </div>      
    </motion.div>
  ))}
</Slider>

      </div>
    </section>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="bg-blue-500 rounded-full absolute top-1/2 -mt-3 left-0 z-10 px-3 py-1 text-sm text-blue-700 font-medium shadow-md flex justify-center items-center">
    <button
      className="text-xl text-white focus:outline-none"
      onClick={onClick}
    >
      <FaArrowLeft />
    </button>
  </div>
  
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="bg-blue-500 rounded-full absolute top-1/2 -mt-3 right-0 z-10 px-3 py-1 text-sm text-blue-700 font-medium shadow-md flex justify-center items-center">
  <button
    className="text-xl text-white focus:outline-none"
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
</div>

  );
};

export default Vfirst