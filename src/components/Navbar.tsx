"use client"
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full max-w-full h-16 flex items-center fixed shadow-2xl z-10 bg-yellow-600 px-5">
      <div className="flex justify-between items-center w-full">
        <h2
          className="text-white text-3xl font-serif cursor-pointer"
          onClick={() => navigate("/")}
        >
          StarFood
        </h2>
        <div className=" hidden md:block flex space-x-6 text-white">
          <Link
            className="text-xl font-bold hover:text-black transition-all duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-xl font-bold hover:text-black transition-all duration-200"
            to="/menu"
          >
            Menu
          </Link>
          <Link
            className="text-xl font-bold hover:text-black transition-all duration-200"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-xl font-bold hover:text-black transition-all duration-200"
            to="/about"
          >
            About
          </Link>
        </div>
        <div
          className="md:hidden flex items-center text-white"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FiX /> : <FiMenu />}
        </div>
      </div>
      {menu && (
      <div className="absolute top-14 left-0 w-full max-w-full bg-yellow-600 flex flex-col items-center  md:hidden ">
        <Link
          onClick={() => setMenu(false)}
          className="text-xl font-bold text-white hover:text-black py-2"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="text-xl font-bold text-white hover:text-black py-2"
          to="/menu"
        >
          Menu
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="text-xl font-bold text-white hover:text-black py-2"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          onClick={() => setMenu(false)}
          className="text-xl font-bold text-white hover:text-black py-2"
          to="/about"
        >
          About
        </Link>
      </div>
      )}
    </div>
  );
};

export default Navbar;
