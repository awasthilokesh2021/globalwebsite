import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [value, setValue] = useState(false);
  const navigate = useNavigate(); // Correctly calling useNavigate

  const HandleValue = () => {
    setValue(!value);
  };

  const navigateToPage = (path) => {
    setValue(false); // Close the menu after navigation
    navigate(path);  // Correct usage of navigate
  };

  const content = (
    <div className="lg:hidden md:hidden absolute block h-[100vh]  bg-gradient-to-b from-gray-50 to-gray-300 text-black left-0 right-0 w-full shadow-lg z-50">
      <ul className="flex flex-col items-center gap-6 mt-16">
        <li
          onClick={() => navigateToPage("/")}
          className="hover:bg-red-500 hover:text-white transition-colors duration-300 text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md w-3/4 text-center"
        >
          Home
        </li>
        <li
          onClick={() => navigateToPage("/contact")}
          className="hover:bg-red-500 hover:text-white transition-colors duration-300 text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md w-3/4 text-center"
        >
          Contact Us
        </li>
        <li
          onClick={() => navigateToPage("/about")}
          className="hover:bg-red-500 hover:text-white transition-colors duration-300 text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md w-3/4 text-center"
        >
          About
        </li>
        <li
          onClick={() => navigateToPage("/services")}
          className="hover:bg-red-500 hover:text-white transition-colors duration-300 text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer shadow-md w-3/4 text-center"
        >
          Our Services
        </li>
      </ul>
    </div>
  );
  

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-1000 text-black lg:py-3 md:py-3 py-2 shadow-md bg-white">
      <div className="w-[92%] mx-auto flex flex-row justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="block">
          <h2 className="font-bold lg:text-2xl md:text-xl text-2xl ">GLOBAL</h2>
        </NavLink>

        <div className="lg:hidden md:hidden">
          <button className="text-2xl block transition" onClick={HandleValue}>
            {value ? <RxCross2 /> : <IoMdMenu />}
          </button>
          {value && content}
        </div>

        {/* Navigation Links */}
        <div
          className="hidden 
        
        lg:flex md:flex lg:justify-between lg:items-center list-none gap-4"
        >
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 bg-red-600 text-lg cursor-pointer rounded-md"
                : "px-3 py-1 hover:bg-red-600 text-lg cursor-pointer rounded-md transition duration-300"
            }
          >
            <li>Home</li>
          </NavLink>

          {/* Contact Link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 bg-red-600 text-lg cursor-pointer rounded-md"
                : "px-3 py-1 hover:bg-red-600 text-lg cursor-pointer rounded-md transition duration-300"
            }
          >
            <li>Contact us</li>
          </NavLink>

          <li className="px-3 py-1 hover:bg-red-600 text-lg cursor-pointer rounded-md transition duration-300">
            Page
          </li>

          {/* About Link */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-1 bg-red-600 text-lg cursor-pointer rounded-md"
                : "px-3 py-1 hover:bg-red-600 text-lg cursor-pointer rounded-md transition duration-300"
            }
          >
            <li>About</li>
          </NavLink>

          {/* Info Link */}
          <li className="px-3 py-1 hover:bg-red-600 text-lg cursor-pointer rounded-md transition duration-300">
            Our Services
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

