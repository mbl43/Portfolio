import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
function Navbar() {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "PortFolio",
    },
    {
      id: 3,
      link: "Experience",
    },
      {
        id: 4,
        link: "About",
      },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex z-50 justify-between items-center fixed bg-black w-full h-20 text-white md:justify-around ">
      <div>
        <h1 className="text-3xl pl-2">Mangesh</h1>
      </div>
{/* navbar */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-125 duration-100 hover:text-cyan-400 capitalize"
          >
            {link}
          </li>
        ))}
      </ul>
      {/* navbar end */}

      {/* hamburger start*/}
      <div
        onClick={() => setnav(!nav)}
        className="  pl-10 z-10 cursor-pointer pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray ">
          {links.map(({ link, id }) => (
            <li
              className="px-4  cursor-pointer hover:scale-125 duration-100 hover:text-cyan-300 capitalize py-4 text-3xl
           "
              key={id}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
      {/* hamburger end */}
    </div>
  );
}

export default Navbar;
