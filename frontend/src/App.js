import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import WishList from "./Pages/Wishlist/Wishlist";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import NoMatch from "./Pages/NoMatch/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Homepage />
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/wishlist">
            <Navbar />
            <WishList />
          </Route>
          <Route path="/products">
            <Navbar />
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
