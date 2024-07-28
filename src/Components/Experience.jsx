import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import react from "../assets/react.png";
import Appwrite from "../assets/Appwrite.png";
import Vite from "../assets/Vite.png";
import Bootstrap from "../assets/Bootstrap.png";
import Photoshop from "../assets/Photoshop.png";
const Experience = () => {
  const skill = [
    {
      id: 1,
      src: Html,
      text: "Html",
      style: "shadow-orange-600",
    },

    {
      id: 2,
      src: Css,
      text: "Css",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: Js,
      text: "JavaScript",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: Tailwind,
      text: "Tailwind",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: Node,
      text: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: react,
      text: "React.js",
      style: "shadow-sky-600",
    },
    {
      id: 8,
      src: Appwrite,
      text: "Appwrite",
      style: "shadow-red-600",
    },
    {
      id: 9,
      src: Vite,
      text: "Vite",
      style: "shadow-yellow-600",
    },
    {
      id: 10,
      src: Bootstrap,
      text: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 11,
      src: Photoshop,
      text: "Adobe Photoshop",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white flex justify-center   md:h-auto "
    >
      <div className="max-w-screen-xl flex flex-col w-full mx-auto p-4 px-5 h-full">
        <div className=" pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Experience
          </p>
          <br />

          <p className="py-8 sm:text-xl">
            I have 1.9 years of experience as a web developer at eClerx Services
            Limited, Pune. I have honed my skills in programming languages such
            as HTML, CSS, JavaScript, and Node.js. Additionally, my proficiency
            in frameworks like React.js and Tailwind, Bootstrap as well as tools like Git,
            Postman, GitHub, and Photoshop, ChatGpt has further enhanced my
            capabilities as a web developer.
          </p>
        </div>
        <div className="grid grid-cols-2 w-fit sm:grid-cols-4 md:grid-cols-5 gap-8 px-2 sm:px-0  overflow-auto">
          {/* structure of skill */}
          {skill.map(({ id, src, text, style }) => (
            <div
              key={id}
              className={` shadow-md shadow-gray-600 m-2 rounded-lg flex justify-center items-center flex-col ${style}`}
            >
              <img
                src={src}
                alt="img"
                className="rounded-md duration-200 hover:scale-105 w-28"
              />
              <div className="w-1/2  px-6 py-3 m-4 flex justify-center items-center    duration-200 hover:scale-105">
                <span className="md:text-2xl  xsm:text-xl">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
