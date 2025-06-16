import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LCD from "../assets/productImg/lcd.png";
import chair from "../assets/productImg/chair.png";
import gamepad from "../assets/productImg/gamepad.png";
import keyboard from "../assets/productImg/keyboard.png";
import ProductCard from "./ProductCard/ProductCard";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    image: gamepad,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-35%",
    image: keyboard,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    image: LCD,
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: "-25%",
    image: chair,
    rating: 5,
    reviews: 99,
  },
];

const FlashSales = () => {
  return (
    <div className="px-8 py-10 mx-22 pb-15 border-b-1 border-gray-200">
      <div className="flex items-center mb-6">
        <div className="flex">
          <span
            className="w-5 h-10 bg-[#DB4444]
 rounded-md flex items-center justify-center text-white mr-4"
          ></span>
          <p className="flex text-[#DB4444] font-bold text-[16px] items-center">
            Today's
          </p>
        </div>
      </div>
      <div className="flex mb-6">
        <div className="text-[36px] tracking-[4px] font-bold w-[450px] flex items-end">
          Flash Sales
        </div>
        <div className="flex gap-4 text-center text-sm ml-34">
          <div>
            <p className="text-black font-semibold text-xs flex">Days</p>
            <p className="text-[32px] font-bold">
              03<span className="text-[#E07575] ml-3">:</span>
            </p>
          </div>

          <div>
            <p className="text-black font-semibold text-xs flex">Hours</p>
            <p className="text-[32px] font-bold">
              23<span className="text-[#E07575] ml-3">:</span>
            </p>
          </div>

          <div>
            <p className="text-black font-semibold text-xs flex">Minutes</p>
            <p className="text-[32px] font-bold">
              19<span className="text-[#E07575] ml-3">:</span>
            </p>
          </div>
          <div>
            <p className="text-black font-semibold text-xs flex">Minutes</p>
            <p className="text-[32px] font-bold flex">56</p>
          </div>
        </div>
        <div className="flex w-full justify-end gap-3">
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
      <div className="flex gap-[30px] overflow-x-auto pb-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-[#DB4444] text-white py-2 px-6 rounded-md">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
