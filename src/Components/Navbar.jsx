import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Portfolio",
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
    <div className="flex z-50 justify-between items-center bg-black w-full h-20 text-white md:justify-around sticky backdrop-filter backdrop-blur-sm bg-opacity-35 top-0">
      <div>
        <h1 className="text-xl md:text-3xl pl-2">
          <a href="/">{"< Mangesh />"}</a>
        </h1>
      </div>
      {/* navbar */}
      <Switch/>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-125 duration-100 hover:text-cyan-400 capitalize"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* navbar end */}

      {/* hamburger start*/}
      <div
        onClick={() => setnav(!nav)}
        className="pl-10 z-10 cursor-pointer pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray ">
          {links.map(({ link, id }) => (
            <li
              className="px-4 cursor-pointer hover:scale-125 duration-100 hover:text-cyan-300 capitalize py-4 text-3xl
           "
              key={id}
            >
              <Link
                onClick={() => setnav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* hamburger end */}
    </div>
  );
}

export default Navbar;
