import { About, Contact, Experience, Home, Navbar, Portfolio, Social } from "./Components/index";
import "./App.css";
function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Portfolio/>
      <Experience/>
      <Social />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
