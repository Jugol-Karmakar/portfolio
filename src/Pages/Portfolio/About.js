import React from "react";
import { Link } from "react-router-dom";
import jugol2 from "../../images/jugol2.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-10 flex flex-col lg:flex-row items-center">
      <div className="flex justify-center lg:justify-start mt-10 lg:mt-0 lg:w-1/2 w-full">
        <img
          className="h-full max-h-[400px] object-contain rounded-full"
          src={jugol2}
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2  text-center lg:text-left">
        <p className="text-lg text-white uppercase">About Me</p>
        <h2 className="text-3xl font-bold py-2 text-white">Personal Details</h2>
        <p className="text-gray-200 py-2">
          Here, I focus on a range of items and features that we use in life
          without giving them a second thought. such as Coca Cola. Dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco.
        </p>
        <p className="mt-4">
          <Link
            to="/about"
            className="text-lg font-bold border border-slate-700 hover:bg-slate-700 transition duration-500 text-white rounded-full py-2 px-4 mt-4"
          >
            View Full Details
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
