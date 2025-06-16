import React from "react";
import {
  FaStar,
  FaRegEye,
  FaHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import food from "../assets/ProductCardimg/food.jpg";
import camera from "../assets/ProductCardimg/camera.png";
import laptop from "../assets/ProductCardimg/laptop.png";
import curology from "../assets/ProductCardimg/curology.png";
import car from "../assets/ProductCardimg/car.png";
import shoes from "../assets/ProductCardimg/shoes.png";
import gamepad from "../assets/ProductCardimg/gamepad.png";
import jacket from "../assets/ProductCardimg/jacket.png";
import ProductCard from "./ProductCard/ProductCard";

const products = [
  {
    title: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 35,
    image: food,
    cart: true,
  },
  {
    title: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: camera,
    cart: true,
  },
  {
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 5,
    reviews: 325,
    image: laptop,
    cart: true,
  },
  {
    title: "Curology Product Set",
    price: 500,
    rating: 4,
    reviews: 145,
    image: curology,
    cart: true,
  },
  {
    title: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: car,
    label: "NEW",
    colors: ["#000", "#f00"],
    cart: true,
  },
  {
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: shoes,
    colors: ["#cfc", "#000"],
    cart: true,
  },
  {
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 5,
    reviews: 55,
    image: gamepad,
    label: "NEW",
    colors: ["#000", "#f00"],
    cart: true,
  },
  {
    title: "Quilted Satin Jacket",
    price: 660,
    rating: 4,
    reviews: 55,
    image: jacket,
    colors: ["#0c0", "#f00"],
    cart: true,
  },
];

const ProductGrid = () => {
  return (
    <>
      <div className="px-8 py-15 mx-22 pb-15 ">
        <div className="flex items-center mb-6">
          <div className="flex">
            <span
              className="w-5 h-10 bg-[#DB4444]
 rounded-md flex items-center justify-center text-white mr-4"
            ></span>
            <p className="flex text-[#DB4444] font-bold text-[16px] items-center">
              Our Products
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex mb-6">
            <div className="text-[36px] tracking-[4px] font-bold w-[450px] flex items-end">
              Explore Our Products
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#DB4444] text-white px-6 py-2 rounded hover:bg-red-600 transition">
            View All Products
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
