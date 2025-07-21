import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../../../context/DataContext";
import { MdKeyboardArrowUp } from "react-icons/md";
import Up_Button from "@/components/button-up";

const UseFul = () => {
  const { useful } = useContext(DataContext);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="useful py-5 bg-[#f3f6fa]">
      <div className="text-center">
        <h1 className="font-medium text-[22px]">BEYNƏLXALQ TƏRƏFDAŞLIQLAR</h1>
      </div>
      <div className="max-w-7xl mx-auto py-5">
        <Slider {...settings}>
          {useful.map((item) => (
            <div key={item.id} className="px-2 py-4">
              <div className="group bg-white p-6 h-[100px] flex items-center justify-center gap-3">
                <img
                  src={item.img}
                  alt=""
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                <p className="text-xs text-black font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
    </div>
  );
};

export default UseFul;
