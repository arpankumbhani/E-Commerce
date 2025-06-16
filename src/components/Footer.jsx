import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import qrCode from "../assets/FooterImg/qrCode.jpg";
import appStore from "../assets/FooterImg/appStore.png";
import playStore from "../assets/FooterImg/playStore.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-15 px-10 md:px-25">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <h3 className="text-[24px] font-bold mb-4">Exclusive</h3>
          <p className="text-[20px] font-semibold my-4">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex border border-white rounded px-3 py-2 items-center w-fit">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm outline-none text-white placeholder-gray-400"
            />
            <svg
              className="w-4 h-4 ml-2 rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] font-bold mb-4">Support</h3>
          <p className="text-[16px] mb-2">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm my-4">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="space-y-4 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="space-y-4 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="text-[12px] mb-3 text-gray-400">
            Save $3 with App New User Only
          </p>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-16 h-16 border border-gray-600"
            />
            <div className="flex flex-col gap-2">
              <img src={playStore} alt="Google Play" className="w-24" />
              <img src={appStore} alt="App Store" className="w-24" />
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-900 mt-10 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
