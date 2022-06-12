import React from "react";
import { Link } from "react-router-dom";
import jugol from "../../images/jugol.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import AnimatedText from "react-animated-text-content";

const HomePage = () => {
  return (
    <div className="min-h-[500px] container mx-auto px-10 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-3/4 text-center">
        <p className="text-xl font-medium text-cyan-500">Hello I'm </p>
        <h1 className="text-6xl font-bold text-white">Jugol Karmakar</h1>
        <p className="text-3xl py-4">
          <AnimatedText
            type="words"
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            Junior Front-end Developer
          </AnimatedText>
        </p>
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="btn px-6 bg-slate-600 text-white rounded-full"
          >
            Hire Me
          </Link>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 w-full lg:w-1/4">
        <img
          src={jugol}
          className="h-full max-h-[500px] object-contain rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
