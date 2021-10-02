import About from "../../Components/About/about";
import Featured from "../../Components/Featured/featured";
import Carousel from "../../Components/Carousel/Carousel";

import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <Carousel />
      <Featured />
      <About />
    </div>
  );
}

export default Homepage;
