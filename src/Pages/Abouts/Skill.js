import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div className="container mx-auto px-10">
      <h2 className="text-3xl font-bold text-white text-left my-5 border-b-2 pb-3">
        Programming Skill
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        <div>
          <div>
            <p className="text-lg font-medium text-white ml-2">React.js</p>
            <ProgressBar
              completed={75}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="75%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">Javsscript</p>
            <ProgressBar
              completed={80}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="80%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">HTML</p>
            <ProgressBar
              completed={90}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="90%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">CSS</p>
            <ProgressBar
              completed={85}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="85%"
            />
          </div>
        </div>
        <div>
          <div>
            <p className="text-lg font-medium text-white ml-2">Bootstrap</p>
            <ProgressBar
              completed={80}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="80%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">Tailwind</p>
            <ProgressBar
              completed={90}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="90%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">Node.js</p>
            <ProgressBar
              completed={65}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="65%"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-white ml-2">MongoDB</p>
            <ProgressBar
              completed={70}
              width="50%"
              height="15px"
              margin="10px"
              bgColor="#3757c5"
              labelColor="#f4f4f4"
              transitionTimingFunction="ease-out"
              animateOnRender
              customLabel="70%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
