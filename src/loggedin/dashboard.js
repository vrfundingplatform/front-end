import React from "react";
import {logo} from "../../src/sixrNav.png"
import { Link, Route, Switch } from "react-router-dom";
import Project from "../components/navigation/project";
import Campaign from "../loggedin/campaign";

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
        <Link to="/"></Link>
      </nav>
    </div>
      <Switch>
        <Route exact path="/dashboard" component={Campaign} />
        <Route path="/project" component={Project} />
    </Switch>
    </>
  );
};