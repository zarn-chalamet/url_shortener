import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-16 py-6 bg-white shadow-md w-full sticky top-0">
      {/* Logo */}
      <h1 className="text-3xl font-semibold text-yellow-500 bg-gray-800 px-5 py-2 rounded-xl cursor-pointer" onClick={()=> navigate("/")}>
        Linklytics
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-12 text-gray-700 text-lg font-medium">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive 
              ? "text-black border-b-2 border-black pb-1" 
              : "hover:text-black hover:border-b-2 hover:border-black pb-1 transition"
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive 
              ? "text-black border-b-2 border-black pb-1" 
              : "hover:text-black hover:border-b-2 hover:border-black pb-1 transition"
          }
        >
          About
        </NavLink>

        <NavLink to="/sign-up">
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
            Sign Up
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
