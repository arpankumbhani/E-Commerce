import React from "react";
import coat from "../assets/BestSellingProducts/coat.png";
import bag from "../assets/BestSellingProducts/bag.png";
import cpu from "../assets/BestSellingProducts/cpu.png";
import bookself from "../assets/BestSellingProducts/bookself.png";
import ProductCard from "./ProductCard/ProductCard";

const products = [
  {
    id: 1,
    title: "The north coat",
    price: 260,
    oldPrice: 360,
    discount: null,
    image: coat,
    rating: 4.5,
    reviews: 65,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    price: 960,
    discount: null,
    rating: 4.5,
    reviews: 65,
    oldPrice: 1160,
    image: bag,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    price: 160,
    rating: 4.5,
    discount: null,
    reviews: 65,
    oldPrice: 170,
    image: cpu,
  },
  {
    id: 4,
    title: "Small BookSelf",
    price: 360,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 65,
    image: bookself,
  },
];

const BestSellingProducts = () => {
  return (
    <div className="px-8 py-10 mx-22 pb-15">
      <div className="flex items-center mb-6">
        <div className="flex">
          <span
            className="w-5 h-10 bg-[#DB4444]
 rounded-md flex items-center justify-center text-white mr-4"
          ></span>
          <p className="flex text-[#DB4444] font-bold text-[16px] items-center">
            This Month
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex mb-6">
          <div className="text-[36px] tracking-[4px] font-bold w-[450px] flex items-end">
            Best Selling Products
          </div>
        </div>
        <button className="bg-[#DB4444] text-white px-10 py-4 rounded-md text-sm font-medium hover:bg-red-600">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
