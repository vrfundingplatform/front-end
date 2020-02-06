import React from "react";
import logo from "../sixrNav.png";
import { Link, Route, Switch } from "react-router-dom";
import Project from "../components/navigation/project";
import Campaign from "../loggedin/campaign";
import Settings from "../loggedin/settings";
import Protected from "./Protected";

export const Dashboard = () => {
  return (
    <>
      <div className="header">
        <div className="nav-logo">
          <Link to="/dashboard">
            <img id="image" src={logo} alt="sixr company logo" />
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/project">Create Campaign</Link>
          <Link to="/settings">User</Link>
        </nav>
      </div>
      <Switch>
        <Protected exact path="/dashboard" component={Campaign} />
        <Protected path="/project" component={Project} />
        <Protected path="/settings" component={Settings} />
      </Switch>
    </>
  );
};
