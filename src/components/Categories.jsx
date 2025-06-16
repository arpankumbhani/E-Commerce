import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import phone from "../assets/categories/phone.png";
import computer from "../assets/categories/Computer.png";
import smartwatch from "../assets/categories/Category-SmartWatch.png";
import camera from "../assets/categories/Category-Camera.png";
import headphones from "../assets/categories/headphones.png";
import gaming from "../assets/categories/gaming.png";

const categories = [
  { name: "Phones", img: phone },
  { name: "Computers", img: computer },
  { name: "SmartWatch", img: smartwatch },
  { name: "Camera", img: camera },
  { name: "HeadPhones", img: headphones },
  { name: "Gaming", img: gaming },
];

const Categorries = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("Camera");

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-8 py-15 mx-22 border-b-1 pb-15 border-gray-200">
      <div className="flex items-center mb-6">
        <div className="flex">
          <span
            className="w-5 h-10 bg-[#DB4444]
 rounded-md flex items-center justify-center text-white mr-4"
          ></span>
          <p className="flex text-[#DB4444] font-bold text-[16px] items-center">
            Categories
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex mb-6">
          <div className="text-[36px] tracking-[4px] font-bold w-[450px] flex items-end">
            Browse By Category
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center shadow"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`flex flex-col items-center justify-center w-[170px] h-[145px] rounded-md border text-sm font-medium cursor-pointer transition-all duration-200
              ${
                active === cat.name
                  ? "bg-[#DB4444] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-8 h-8 mb-3 object-contain"
            />
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorries;
