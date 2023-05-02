import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/company1.png";
import Image2 from "../assets/company2.png";
import { Link } from "react-router-dom";


const Tfirst = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section className="section" style={{marginTop: "50px"}}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-10">Company</h1>
          <Link className="text-blue-500 underline font-medium hover:text-blue-700" to="/Company">
            SEE ALL
          </Link>
        </div>
        <div className="slider-container" style={{ maxHeight: "300px" }}>
          <Slider {...settings} className="mt-4 mb-9" style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div>
              <img className="w-full transition duration-500 transform hover:scale-105" src={Image1} alt="talent1" style={{ maxHeight: "350px", maxWidth: "95%" }} />
            </div>
            <div>
              <img className="w-full transition duration-500 transform hover:scale-105" src={Image2} alt="talent2" style={{ maxHeight: "350px", maxWidth: "95%" }} />
            </div>
            <div>
              <img className="w-full transition duration-500 transform hover:scale-105" src={Image1} alt="talent3" style={{ maxHeight: "350px", maxWidth: "95%" }} />
            </div>
            <div>
              <img className="w-full transition duration-500 transform hover:scale-105" src={Image2} alt="talent3" style={{ maxHeight: "350px", maxWidth: "95%" }} />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Tfirst;
