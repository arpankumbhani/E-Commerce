import React from "react";

import ps5 from "../assets/NewArrival/ps5.png";
import women from "../assets/NewArrival/women.jpg";
import speaker from "../assets/NewArrival/speaker.png";
import perfume from "../assets/NewArrival/perfume.png";

const NewArrival = () => {
  return (
    <div className="px-8 py-15 mx-22 pb-15">
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
      </div>

      <div className="min-h-screen">
        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="row-span-2 col-span-2 bg-black text-white flex items-center justify-center font-bold text-xl border">
            <div className="md:col-span-2 h-full relative rounded-lg overflow-hidden">
              <img
                src={ps5}
                alt="PlayStation 5"
                className="w-full h-full object-cover px-5"
              />
              <div className="absolute bottom-4 mx-10 left-4 z-10">
                <h3 className="text-xl font-semibold my-5">PlayStation 5</h3>
                <p className="text-sm w-64">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-sm underline my-5">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-[#0D0D0D] text-white flex items-center justify-center font-bold text-xl border">
            <div className="flex h-full w-full">
              <div className="flex flex-col justify-end p-8 w-1/2 z-10">
                <h2 className="text-2xl font-bold mb-2">Women’s Collections</h2>
                <p className="text-sm mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="#" className="underline font-semibold text-white">
                  Shop Now
                </a>
              </div>
              <div className="w-1/2 h-full">
                <img
                  src={women}
                  alt="Women's Collection"
                  className="w-full h-full object-cover opacity-80 scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-[#0D0D0D] text-white flex items-center justify-center font-bold text-xl border">
            <div className="relative h-full rounded-lg overflow-hidden">
              <img
                src={speaker}
                alt="Speakers"
                className="w-full ml-8 h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-xl font-semibold">Speakers</h3>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="mt-2 text-sm underline">Shop Now</button>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-[#0D0D0D] text-white flex items-center justify-center font-bold text-xl border">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={perfume}
                alt="Perfume"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-6 z-10">
                <h3 className="text-xl font-semibold">Perfume</h3>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="mt-2 text-sm underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
