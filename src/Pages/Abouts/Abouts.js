import React from "react";
import jugol3 from "../../images/jugol3.jpg";
import Education from "./Education";
import Skill from "./Skill";

const Abouts = () => {
  return (
    <div>
      <div className="container mx-auto  shadow-xl rounded-3xl overflow-hidden">
        <div
          className="hero min-h-[500px]"
          style={{
            background: `url(${jugol3})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl flex flex-col items-end">
              <h1 className="mb-5 text-5xl font-bold text-white">
                I'm Jugol Karmakar
              </h1>
              <h5 className="mb-5 text-2xl font-bold text-white">
                Front-end Web Developer
              </h5>
              <p className="pb-3 text-right">
                Hi, my name is Adriano Smith and I began using WordPress when it
                first began. I've spent most of my waking hours for the last ten
                years designing, programming and operating WordPress sites.
              </p>
              <p className="pb-3 text-right">
                One of my specialties is taking an idea from scratch and
                creating a full-fledged platform. I go beyond to produce sites
                with a unique, outstanding, contemporary look-and-feel. With
                extensive knowledge of web mechanics, I'm able to optimize
                complex integrations to require little-to-no maintenance while
                running on their own for years.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 flex justify-start my-10">
        <div
          className="text-left w-1/2
        "
        >
          <p className="text-lg font-medium text-white pb-2">
            Birthday : <span className="text-slate-400">12 April 1999</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Age : <span className="text-slate-400">23</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Address : <span className="text-slate-400">Paikgacha,Khulna</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Email : <span className="text-slate-400">jugol.cse@gmail.com</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Phone : <span className="text-slate-400">01794732835</span>
          </p>
        </div>
        <div
          className="text-left w-1/2
        "
        >
          <p className="text-lg font-medium text-white pb-2">
            Nationality : <span className="text-slate-400">Bangladesh</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Study :{" "}
            <span className="text-slate-400">Unversity Of Global Village</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Degree : <span className="text-slate-400">Bachelor</span>
          </p>
          <p className="text-lg font-medium text-white pb-2">
            Interests : <span className="text-slate-400">Playing Gaming</span>
          </p>
        </div>
      </div>
      <div className="py-10">
        <Skill />
      </div>
      <div>
        <Education></Education>
      </div>
    </div>
  );
};

export default Abouts;
