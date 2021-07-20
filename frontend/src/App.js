import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Featured from "./Components/Featured/featured";
import "./App.css";
import About from "./Components/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Featured />
      <About />
    </div>
  );
}

export default App;
