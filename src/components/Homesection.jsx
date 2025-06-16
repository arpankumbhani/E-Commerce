import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import iPhone from "../assets/logo/iPhone.jpg";

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      img: iPhone,
    },
    {
      title: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      img: iPhone,
    },
    {
      title: "iPhone 14 Series",
      offer: "Up to 10% off Voucher",
      img: iPhone,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <div className="flex pb-15">
      <aside className="w-1/4 border-r border-gray-200 pr-6 px-8 py-6">
        <ul className="space-y-4 text-[16px] font-medium text-gray-700 ml-[90px]">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center cursor-pointer hover:text-black"
            >
              {cat}
              {["Woman’s Fashion", "Men’s Fashion"].includes(cat) && (
                <span className="text-lg">{">"}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 relative px-8 pt-6 pr-18">
        <div className="w-full h-full bg-white px-4 pt-4 ">
          <div className="flex items-center justify-between bg-black text-white overflow-hidden p-6">
            <div className="space-y-3 ml-10">
              <div className="flex items-center gap-2 text-white">
                <FaApple className="text-5xl" />
                <span className="text-sm">{slides[currentSlide].title}</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight w-[19rem]">
                {slides[currentSlide].offer}
              </h2>
              <button className="mt-4 text-white underline font-medium hover:opacity-80">
                Shop Now &rarr;
              </button>
            </div>
            <div className="w-1/2 flex justify-end">
              <img
                src={slides[currentSlide].img}
                alt="Product"
                className="h-70 object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2 absolute bottom-12 left-1/2 transform -translate-x-1/2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
