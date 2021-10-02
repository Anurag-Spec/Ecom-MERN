import Homepage from "./Pages/Homepage/Homepage";
import PrivateRoute from "./Routes/PrivateRoute";
import Navbar from "./Components/Navbar/Navbar";
import WishList from "./Pages/Wishlist/Wishlist";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import NoMatch from "./Pages/NoMatch/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import Singleproduct from "./Pages/singleProduct/singleProduct";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/:id" children={<Singleproduct />}>
            <Navbar />
            <Singleproduct />
            <Footer />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Homepage />
            <Footer />
          </Route>
          <PrivateRoute path="/cart">
            <Navbar />
            <Cart />
            <Footer />
          </PrivateRoute>
          <PrivateRoute path="/wishlist">
            <Navbar />
            <WishList />
            <Footer />
          </PrivateRoute>
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
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
