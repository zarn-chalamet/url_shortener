import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const Footer = () => {

  const navigate = useNavigate();
  return (
    <footer className="bg-custom-gradient bg-gray-800 text-white py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-2">Linklytics</h2>
          <p>Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0">
          &copy; 2024 Linklytics. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <button onClick={()=>{navigate("/about")}} className="hover:text-gray-200">
            <FaFacebook size={24} />
          </button>
          <button onClick={()=>{navigate("/about")}}className="hover:text-gray-200">
            <FaTwitter size={24} />
          </button>
          <button onClick={()=>{navigate("/about")}} className="hover:text-gray-200">
            <FaInstagram size={24} />
          </button>
          <button onClick={()=>{navigate("/about")}} className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;