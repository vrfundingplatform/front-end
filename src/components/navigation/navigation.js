import React from "react";
import logo from "../../sixrNav.png";
import { Link, Route, Switch } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import Reset from "./reset";

export const Navigation = () => {
  return (
    <>
      <div className="nav-logo">
        <Link to="/">
          <img id="image" src={logo} alt="sixr company logo" />
        </Link>
      </div>
      <nav>
        <Link to="/">Explore</Link>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/sign-up">Start Funding</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/reset" component={Reset} />
      </Switch>
    </>
  );
};
