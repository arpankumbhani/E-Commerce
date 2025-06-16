import React, { useEffect, useState } from "react";

import deliveryIcon from "../assets/infoImages/delivery.png";
import serviceIcon from "../assets/infoImages/service.png";
import guaranteeIcon from "../assets/infoImages/guarantee.png";
import arrowUp from "../assets/infoImages/up-arrow.png";

export default function InfoBanner() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative pt-0 pb-32 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gray-300">
              <div className="p-4 rounded-full bg-black">
                <img
                  src={deliveryIcon}
                  alt="Delivery Icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-black">
            Free delivery for all orders over $140
          </p>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gray-300">
              <div className="p-4 rounded-full bg-black">
                <img src={serviceIcon} alt="Service Icon" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-black">Friendly 24/7 customer support</p>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gray-300">
              <div className="p-4 rounded-full bg-black">
                <img
                  src={guaranteeIcon}
                  alt="Guarantee Icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-black">We return money within 30 days</p>
        </div>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-100 shadow-md hover:bg-gray-300 transition duration-300"
        >
          <img src={arrowUp} alt="Scroll to top" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
