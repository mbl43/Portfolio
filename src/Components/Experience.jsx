import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import react from "../assets/react.png";
import Vite from "../assets/Vite.png";
import Bootstrap from "../assets/Bootstrap.png";
import Photoshop from "../assets/Photoshop.png";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      text: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: Css,
      text: "CSS",
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
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold inline-block text-white border-b-4 border-gray-500 pb-2 mb-8">
            Experience
          </h2>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mt-8 text-white">
            <p className="text-lg md:text-xl leading-relaxed">
              I have 2 years of experience as a web developer at eClerx Services
              Limited, Pune. I have honed my skills in programming languages
              such as HTML, CSS, JavaScript, and Node.js. Additionally, my
              proficiency in frameworks like React.js and Tailwind, Bootstrap as
              well as tools like Git, Postman, GitHub, and Photoshop, ChatGpt
              has further enhanced my capabilities as a web developer.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-4">
              Developed 7 tools using Python, JavaScript, VBScript that
              significantly reduced workflow time by 15% and are now utilized by
              other processes, showcasing efficiency and innovation in workflow
              management.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ id, src, text, style }) => (
            <div
              key={id}
              className={`group relative bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 
              transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 
              ${style} shadow-lg hover:shadow-xl`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center p-4 bg-gray-800/50 rounded-xl">
                  <img
                    src={src}
                    alt={text}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white">{text}</h3>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
