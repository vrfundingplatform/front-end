import React from "react";
import logo from "../../sixr.png";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import data from "./homeData.json";
import HomeCard from "./homeCard";
import Fundraise from "./homeFund";

const Home = () => {
  return (
    <>
      <h1 className="home-message">
        Insight<span id="period-1">.</span> Culture<span id="period-2">.</span>{" "}
        Passion<span id="period-3">.</span>
      </h1>
      <div className="home-join">
        <Button variant="contained" id="home-button">
          <NavLink id="home-link" to="/sign-up">
            Join the Movement
          </NavLink>
        </Button>
      </div>
      <div className="story">
        <h2>
          <span id="story-1">Our</span> <span id="story-2">Communities</span>{" "}
          <span id="story-3">Your</span> <span id="story-4">Stories</span>
        </h2>
      </div>
      <div className="data">
        {data.map(info => {
          return <HomeCard info={info} key={info.id} />;
        })}
      </div>
      <Fundraise />
    </>
  );
};

export default Home;
