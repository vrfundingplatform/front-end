import React from "react";
import logo from "../../sixr.png";
import { Link } from "react-router-dom";
import SignUp from "./signup";

const Home = () => {
  return (
    <>
      <img src={logo} alt="sixr company logo" />
      <h1>Insight. Culture. Passion</h1>
      <Link to="/sign-up">Join the Movement</Link>
    </>
  );
};

export default Home;
