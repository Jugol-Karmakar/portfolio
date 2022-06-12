import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto p-10 flex justify-around items-center">
      <div className="">
        <h2 className="text-3xl font-bold text-white">Jugol</h2>
      </div>
      <div className="mx-10">
        <Link
          to="/"
          className="mx-6 text-lg font-medium text-gray-400 transition-all duration-300 hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/"
          className="mx-6 text-lg font-medium text-gray-400 transition-all duration-300 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/"
          className="mx-6 text-lg font-medium text-gray-400 transition-all duration-300 hover:text-white"
        >
          Project
        </Link>
        <Link
          to="/"
          className="mx-6 text-lg font-medium text-gray-400 transition-all duration-300 hover:text-white"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
