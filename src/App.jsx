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
function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Portfolio />
      <Experience />
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
