import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto px-10">
      <h2 className="text-3xl text-white font-bold my-5 border-b-2 pb-3">
        Education
      </h2>
      <div className="flex">
        <div>
          <ul class="steps steps-vertical">
            <li class="step step-info my-2">
              <span className="bg-slate-700 py-2 px-4 rounded-full text-white font-medium">
                2019 - Present
              </span>
            </li>
            <li class="step step-info my-2">
              <span className="bg-slate-700 py-2 px-4 rounded-full text-white font-medium">
                2022 - Present
              </span>
            </li>
            <li class="step step-info my-2">
              <span className="bg-slate-700 py-2 px-4 rounded-full text-white font-medium">
                2020 - 2021
              </span>
            </li>
            <li class="step step-info my-2">
              <span className="bg-slate-700 py-2 px-4 rounded-full text-white font-medium">
                2015 - 2017
              </span>
            </li>
          </ul>
        </div>
        <div className="ml-12 mt-4">
          <div className="mb-6">
            <h2 className="text-lg text-white font-bold">
              University Of Global Village
            </h2>
            <p className="text-gray-400 font-medium">Bachelor</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-white font-bold">Programming Hero</h2>
            <p className="text-gray-400 font-medium">
              Full Stack Web-Development
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-white font-bold">ledp.ictd.gov.bd</h2>
            <p className="text-gray-400 font-medium">Graphic design</p>
          </div>
          <div className="mb-2">
            <h2 className="text-lg text-white font-bold">R.K.B.K Collage</h2>
            <p className="text-gray-400 font-medium">
              Higer Secondary Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
