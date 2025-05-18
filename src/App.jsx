import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Portfolio,
  Social,
} from "./Components/index";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
function App() {
  const[experience,setExperience]=useState('2')
   useEffect(() => {
    const calculateExperience = () => {
      const now = new Date();
      const start = new Date("2022-10-18T00:00:00");
      const diff = now - start;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const remAfterYears = diff % (1000 * 60 * 60 * 24 * 365);
      const months = Math.floor(remAfterYears / (1000 * 60 * 60 * 24 * 30));
      const exper = `${years}.${months}`;

      setExperience(exper);
    };

    calculateExperience(); // initial run
    const intervalId = setInterval(calculateExperience, 1000);

    return () => clearInterval(intervalId); // cleanup
  }, []);
  return (
    <div className="">
      <Navbar />
      <Home experience={experience}/>
      <Portfolio />
      <Experience experience={experience} />
      <Social />
      <About />
      <Contact />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </div>
  );
}

export default App;
