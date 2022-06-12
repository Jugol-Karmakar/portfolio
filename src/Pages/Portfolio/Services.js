import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdLaptopWindows } from "react-icons/md";
import { FiCamera } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto px-10 my-20">
      <div className="my-5 ">
        <h2 className="text-3xl font-bold text-white text-center py-3">
          My Offered Services
        </h2>
        <h3 className="text-center text-xl text-cyan-500 font-bold pb-3">
          What I Do
        </h3>
        <p className="text-white text-center">
          At about this time of year, some months after New Year's resolutions
          have been made and kept, or made and neglected.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
        <div className="p-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500">
          <div className="flex justify-center my-3">
            <AiOutlinePieChart className="text-5xl text-cyan-500" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
            Web Design
          </h2>
          <p className="py-4">
            “It is not because things are difficult that we do not dare; it is
            because we do not dare that they are difficult.”
          </p>
        </div>
        <div className="p-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500">
          <div className="flex justify-center my-3">
            <MdLaptopWindows className="text-5xl text-cyan-500" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
            Web Development
          </h2>
          <p className="py-4">
            “It is not because things are difficult that we do not dare; it is
            because we do not dare that they are difficult.”
          </p>
        </div>
        <div className="p-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500">
          <div className="flex justify-center my-3">
            <FiCamera className="text-5xl text-cyan-500" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
            Photography
          </h2>
          <p className="py-4">
            “It is not because things are difficult that we do not dare; it is
            because we do not dare that they are difficult.”
          </p>
        </div>
        <div className="p-3 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500">
          <div className="flex justify-center my-3">
            <FaRocket className="text-5xl text-cyan-500" />
          </div>
          <h2 className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
            Graphic Design
          </h2>
          <p className="py-4">
            “It is not because things are difficult that we do not dare; it is
            because we do not dare that they are difficult.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
