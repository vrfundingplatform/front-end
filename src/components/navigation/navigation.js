import React from "react";
import logo from "../../sixrNav.png";
import { Link, Route } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="nav-logo">
        <img src={logo} alt="sixr company logo" />
      </div>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up">Start Funding</Link>
      </nav>
      <Route exact path="/">
        Hello from the Dash
      </Route>
      <Route path="/sign-in">Hello from sign in</Route>
      <Route path="/sign-up">Sign Up</Route>
    </>
  );
};
