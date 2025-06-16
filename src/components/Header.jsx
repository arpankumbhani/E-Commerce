import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-black text-white text-sm py-2 flex justify-between px-4">
        <p className="flex items-center w-full justify-center">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF
          50%!&nbsp;&nbsp;
          <span className="underline cursor-pointer font-bold "> Shop Now</span>
        </p>
        <div className="flex items-center gap-2 cursor-pointer mr-15">
          <span>English</span>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.25L10 12l4.75-4.75"></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between pt-8 px-6 py-4 bg-white border-1 border-gray-200">
        <h1 className="ml-25 text-[24px] font-bold">Exclusive</h1>
        <nav className="flex gap-9 ml-[-151px]">
          {["Home", "Contact", "About", "Sign Up"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className={`text-[16px] hover:text-black ${
                item === "Home"
                  ? "font-medium underline underline-offset-8"
                  : "text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 mr-15">
          <div className="relative bg-[#F5F5F5]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="rounded-lg px-4 py-2 pl-10 text-sm w-64 placeholder-gray-400"
            />
            <FaSearch className="absolute right-3 top-2.5 text-black" />
          </div>
          <FaHeart className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
