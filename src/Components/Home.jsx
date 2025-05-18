import { useEffect, useRef } from "react";
import HeroImg from "../assets/heroimage.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = ({ experience }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a Frontend<br>Developer"],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      name="Home"
      className="h-[calc(100vh-80px)] w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="mx-auto flex flex-col items-center md:justify-center h-[calc(100vh-100px)] px-4 md:flex-row">
        {/* Main text div */}
        <div className="flex flex-col justify-center p-16">
          <h2 className="text-white font-bold text-3xl sm:text-6xl pb-2">
            <span ref={el}></span>
          </h2>
          <p className="text-white max-w-md">
            I have {experience} years of experience developing websites.
            Currently, I love working on web applications using technologies
            like HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Photoshop,
            NextJs, TypeScript and Node.js.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <FaArrowCircleRight
                size={20}
                className="ml-2 group-hover:rotate-90 duration-500"
              />
            </Link>

            <a
              href="https://drive.google.com/file/d/1q51_1tleCW1HbKvl_wUs3nq42VQ1LJ8r/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white w-fit px-4 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Resume
              <PiEyeBold size={20} className="ml-2 group-hover:scale-125" />
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="flex w-[300px] h-[300px] md:w-[400px] md:h-[400px] items-center justify-center">
          <img
            src={HeroImg}
            alt="My Profile"
            className="rounded-2xl w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
