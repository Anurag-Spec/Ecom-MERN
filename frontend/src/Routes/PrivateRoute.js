import React from "react";
import { Route, useHistory } from "react-router-dom";
import Login from "../Pages/Login/Login";

function PrivateRoute({ path, ...props }) {
  const history = useHistory();
  let isUserLoggedIn = false;
  if (localStorage?.getItem("userInfo")) {
    isUserLoggedIn = true;
  }
  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    (history.push("/login"),
    (
      <Route path="/login">
        <Login />
      </Route>
    ))
  );
}

export default PrivateRoute;
