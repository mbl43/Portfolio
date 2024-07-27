import React from "react";
import Project from "../assets/portfolio/Project.jpg";

const Portfolio = () => {
  const projectlink = [
    {
      id: 1,
      src: Project,
    },
    {
      id: 2,
      src: Project,
    },
    {
      id: 3,
      src: Project,
    },
    {
      id: 4,
      src: Project,
    },
    {
      id: 5,
      src: Project,
    },
  ];
  return (
    <div
      name="portfolio "
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-[100vh] md:h-auto overflow-auto"
    >
      <div className=" max-w-screen-xl  mx-auto flex-col flex  h-full  pt-7 w-full p-4">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-4">Checkout of some my Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* structure for card */}
          {projectlink.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="img"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2  px-6 py-3 m-4 duration-200 hover:scale-105 md:text-3xl">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
