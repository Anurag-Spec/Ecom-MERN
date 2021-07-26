import { BrowserRouter as Switch, Route } from "react-router-dom";
import App from "../App";
import Cart from "../Components/Cart/Cart";
import Wishlist from "../Components/Wishlist/Wishlist";
import Login from "../Components/Login/Login";

import React from "react";

function Routes() {
  return (
    <Switch>
      <Route path="/wishlist">
        <Wishlist />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  );
}

export default Routes;
