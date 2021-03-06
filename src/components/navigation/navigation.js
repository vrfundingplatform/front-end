import React from "react";
import logo from "../../sixrNav.png";
import { Link, Route, Switch } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import Reset from "./reset";
import Project from "./project";

export const Navigation = props => {
  return (
    <>
      <div className="header">
        <div className="nav-logo">
          <Link to="/">
            <img id="image" src={logo} alt="sixr company logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Explore</Link>
          <Link to="/sign-in">Sign in</Link>
          <Link to="/sign-up">Start Funding</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} props={props} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/reset" component={Reset} />
        <Route path="/project" component={Project} />
      </Switch>
    </>
  );
};
