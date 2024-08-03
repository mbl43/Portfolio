import React from "react";
import Currency from "../assets/portfolio/currency.png"
import Password from "../assets/portfolio/passoword.jpg"
import PM from "../assets/portfolio/pm.png"
import Interview from "../assets/portfolio/interview.png"
import Bookstore from "../assets/portfolio/bookstore.png"

const Portfolio = () => {
  const projectlink = [
    {
      id:1n,
      src: Currency,
      link: "https://currency-converter-rt.vercel.app/",
      name:"Currency Converter"
    },
    {
      id: 2,
      src: Bookstore,
      link: "https://spectacular-dango-a7d490.netlify.app/",
       name:"Online Book Store"
    },
    {
      id: 3,
      src: Password,
      link:"https://password-generator-rt.vercel.app/",
      name:"Password Generator"
    },
    {
      id: 4,
      src: Interview,
      link:"https://mbl43.github.io/Mock-interviewER/",
      name:"Mock Interviewer"
    },
    {
      id: 5,
      src: PM,
      link:"https://pm-nextgen-solutions.vercel.app/",
      name:"Company Website"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white h-[100vh] md:h-auto "
    >
      <div className=" max-w-screen-xl  mx-auto flex-col flex  h-full  pt-7 w-full p-4">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-4">Checkout of some my Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 overflow-auto">
          {/* structure for card */}
          {projectlink.map(({ id, src,link,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg m-2">
              <img
                src={src}
                alt="img"
                className="rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2    py-1 m-4 duration-200 hover:scale-105 md:text-3xl">
                   <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
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
