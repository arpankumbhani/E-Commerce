import React from "react";
import speaker from "../assets/Banner/jbl.png";

const Banner = () => {
  return (
    <div className="px-8 py-6 mx-22 pb-15">
      <div className="bg-black text-white rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between px-12 py-14">
        <div className="max-w-lg">
          <p className="text-[#00FF66] text-sm font-semibold mb-2">
            Categories
          </p>
          <h2 className="text-[48px] font-bold mb-6 leading-tight">
            Enhance Your <br /> Music Experience
          </h2>
          <div className="flex gap-4 mb-6">
            {[
              { value: "23", label: "Hours" },
              { value: "05", label: "Days" },
              { value: "59", label: "Minutes" },
              { value: "35", label: "Seconds" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-black w-15 h-15 rounded-full flex flex-col justify-center items-center shadow"
              >
                <span className="text-xl font-bold">{item.value}</span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#00FF66] text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition">
            Buy Now!
          </button>
        </div>
        <div className="relative mt-10 md:mt-0 md:w-[50%] flex w-full justify-center items-center">
          <div className="absolute w-60 h-60 md:w-96 md:h-96 rounded-full bg-white blur-2xl opacity-20"></div>
          <img
            src={speaker}
            alt="Speaker"
            className="max-h-72 w-full object-contain drop-shadow-2xl scale-x-[-1] relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
