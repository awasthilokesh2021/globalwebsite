import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full text-black py-3 shadow-md">
      <div className="w-[92%] mx-auto flex flex-row justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="block">
          <h2 className="font-bold lg:text-2xl md:text-xl text-lg">
            GLOBAL
          </h2>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex flex-row justify-between list-none items-center gap-4">
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
            <li>Contact</li>
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
            Info
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
