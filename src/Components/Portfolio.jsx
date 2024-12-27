import React from "react";
import Currency from "../assets/portfolio/currency.png";
import Password from "../assets/portfolio/passoword.jpg";
import PM from "../assets/portfolio/pm.png";
import Interview from "../assets/portfolio/interview.png";
import Bookstore from "../assets/portfolio/bookstore.png";
import AI from "../assets/portfolio/ai.png";
import Hospital from "../assets/portfolio/health.png"
const Portfolio = () => {
  const projectlink = [
    {
      id: 1,
      src: AI,
      link: "https://text-to-image-jb.vercel.app/",
      name: "Text To Image AI",
      Stack: "HTML, CSS, Javascript, Bootstrap, API",
    },
    {
      id: 2,
      src: Bookstore,
      link: "https://spectacular-dango-a7d490.netlify.app/",
      name: "Online Book Store",
      Stack: "HTML, CSS, Javascript, React.js, Bootstrap, React Router",
    },
    {
      id: 3,
      src: Password,
      link: "https://password-generator-rt.vercel.app/",
      name: "Password Generator",
      Stack: "HTML, CSS, Javascript, React.js, Tailwind",
    },
    {
      id: 4,
      src: Interview,
      link: "https://mbl43.github.io/Mock-interviewER/",
      name: "Mock Interviewer",
      Stack: "HTML, CSS, Javascript",
    },
    {
      id: 5,
      src: Currency,
      link: "https://currency-converter-rt.vercel.app/",
      name: "Currency Converter",
      Stack: "HTML, CSS, Javascript, React.js, Tailwind",
    },
    {
      id: 6,
      src: PM,
      link: "https://mangesh-portfolio-rt.vercel.app/",
      name: "Personal PortFolio",
      Stack: "HTML, CSS, Javascript, React.js, Tailwind, React Router",
    },
    {
      id: 7,
      src: Hospital,
      link: "https://hospital-landing-page-jb.vercel.app/",
      name: "Hospital Landing Page",
      Stack: "HTML, CSS, Javascript, Bootstrap",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white  md:h-auto h-auto "
    >
      <div className=" max-w-screen-xl  mx-auto flex-col flex  h-full  pt-7 w-full p-4 ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-4">Checkout of some my Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8  sm:px-0 overflow-auto ">
          {projectlink.map(({ id, src, link, name, Stack }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-2xl m-1 p-2 w-80  lg:w-11/12 flex flex-col"
            >
              <img
                src={src}
                alt="img"
                loading="lazy"
                className=" duration-200 h-52 rounded-3xl hover:scale-105 "
              />
              <div className="flex flex-col items-center justify-center m-2">
                <button className="w-full  text-blue-500  py-1 m-4 duration-200 hover:scale-105 text-xl  lg:text-2xl ">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </button>
                <p className="p-2 text-2xl text-center">TechStack:</p>
                <p className="text-center  ">{Stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
