import React from "react";
import logo from "../../sixr.png";
import { Link } from "react-router-dom";
import SignUp from "./signup";

const Home = () => {
  return (
    <>
      <h1 className="home-message">
        Insight<span id="period-1">.</span> Culture<span id="period-2">.</span>{" "}
        Passion<span id="period-3">.</span>
      </h1>
      <Link to="/sign-up">Join the Movement</Link>
    </>
  );
};

export default Home;
