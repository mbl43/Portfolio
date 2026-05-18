import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Portfolio,
  Overlay,
  Social,
} from "./Components/index";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useRef, useState } from "react";

const EXPERIENCE_START = new Date("2022-10-18T00:00:00");
const MS_PER_YEAR  = 1000 * 60 * 60 * 24 * 365;
const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30;

function calculateExperience() {
  const diff = Date.now() - EXPERIENCE_START.getTime();
  const years  = Math.floor(diff / MS_PER_YEAR);
  const months = Math.floor((diff % MS_PER_YEAR) / MS_PER_MONTH);
  return `${years}.${months}`;
}

const CURSOR_INNER_STYLE = { backgroundColor: "var(--cursor-color)" };
const CURSOR_OUTER_STYLE = { border: "3px solid var(--cursor-color)" };
const HERO_STYLE         = { height: "600vh" };

export default function App() {
  const heroRef = useRef();
  const [experience, setExperience] = useState(calculateExperience);

  useEffect(() => {
    const id = setInterval(() => setExperience(calculateExperience()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Navbar />

      <div ref={heroRef} className="relative w-full" style={HERO_STYLE}>
        <Home experience={experience} heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      <Portfolio />
      <Experience experience={experience} />
      <Social />
      <About experience={experience}/>
      <Contact />

      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={CURSOR_INNER_STYLE}
        outerStyle={CURSOR_OUTER_STYLE}
      />
    </div>
  );
}