import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Featured from "./Components/Featured/featured";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Featured />
    </div>
  );
}

export default App;
