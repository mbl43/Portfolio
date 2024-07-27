import React from "react";
import HeroImg from "../assets/heroimage.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiEyeBold } from "react-icons/pi";

const Home = () => {
  return (
    // main body div
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* main text div */}
        <div className="flex flex-col justify-center h-1/2">
          {/* text div */}
          <h2 className="text-white font-bold text-3xl  sm:text-6xl pb-2">
            I&#39;m a Front-end Devloper
          </h2>
          <p className="text-gray-400 max-w-md">
            I have 3 years of experience developing websites. Currently, I love
            to work on web applications using technologies like HTML, CSS,
            Javascript, React, Tailwind, and Node.js.
          </p>
          <div className="flex flex-row  m-1">
            <button className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mr-4">
              PortFolio
              <span className="group-hover:rotate-90 duration-500">
                <FaArrowCircleRight size={20} className="ml-2" />
              </span>
            </button>

            <button className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
              
              <a href="https://docs.google.com/document/d/1646jtZqLFoKTldtvagaAaHVlM3xinFngbJqM5X_pQic/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
              <span>
                <PiEyeBold size={20} className="group-hover:scale-125 ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImg}
            alt="My Profile"
            className="rounded-2xl mx-auto w-3/4 md:full"
          />
        </div>
      </div>

      {/* image div */}
    </div>
  );
};

export default Home;
