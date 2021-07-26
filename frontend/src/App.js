import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import Carousel from "./Components/Carousel/Carousel";
import Featured from "./Components/Featured/featured";
import "./Homepage.css";
import About from "./Components/About/about";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/cart" element={<Cart />} />
        <Navbar />
        <Carousel />
        <Featured />
        <About />
      </Router>
    </div>
  );
}

export default App;
