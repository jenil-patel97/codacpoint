import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Partners from "./components/Partners.jsx";
import Card from "./components/Card";
import Letter from "./components/Letter";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Partners />
      <Card />
      <Letter />
    </div>
  );
}

export default App;
