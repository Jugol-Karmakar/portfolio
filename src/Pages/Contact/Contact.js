import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center my-10">
      <input
        type="text"
        placeholder="Your Name"
        class="w-full max-w-md py-3 px-3 rounded-lg focus:outline-none bg-slate-700 text-white focus:border border-cyan-500 transition duration-500 mb-3"
      />
      <input
        type="email"
        placeholder="Email Address"
        class="w-full max-w-md py-3 px-3 rounded-lg focus:outline-none bg-slate-700 text-white focus:border border-cyan-500 transition duration-500 mb-3"
      />
      <textarea
        class="w-full max-w-md py-3 px-3 rounded-lg focus:outline-none bg-slate-700 text-white focus:border border-cyan-500 transition duration-500 mb-3"
        placeholder="Message"
      ></textarea>
      <button className="border border-cyan-500 rounded-lg text-lg font-medium hover:bg-cyan-600/80 duration-300 px-6 py-2 w-full max-w-md">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
