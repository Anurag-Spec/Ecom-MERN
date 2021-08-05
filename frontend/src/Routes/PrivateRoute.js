import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute({ path, ...props }) {
  let isUserLoggedIn = false;
  if (localStorage?.getItem("userInfo")) {
    isUserLoggedIn = JSON.parse(localStorage?.getItem("userInfo"));
  }

  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Route {...props} path="/login" />
  );
}

export default PrivateRoute;
