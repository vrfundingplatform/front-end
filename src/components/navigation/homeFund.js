import React from "react";
import SecurityIcon from "@material-ui/icons/Security";
import SpeedIcon from "@material-ui/icons/Speed";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const Fundraise = () => {
  return (
    <div className="fundraise">
      <h2 className="fund-title">
        The Leader in Virtual Reality Online Funding
      </h2>
      <div className="fund-container">
        <div className="fund-container-1">
          <div className="fund-card">
            <div className="fund-card-icon">
              <SecurityIcon className="fund-icon" />
              <h3 className="fund-card-header">Donor protection guarantee</h3>
            </div>
            <p className="fund-card-p">
              One of a few select platforms with donor protection in the
              industry.
            </p>
          </div>
          <div className="fund-card">
            <div className="fund-card-icon">
              <MonetizationOnIcon className="fund-icon" />
              <h3 className="fund-card-header">0% platform fee</h3>
            </div>
            <p className="fund-card-p">
              With a <span className="fee">0% platform fee</span>, you get to
              keep even more of your money.
            </p>
          </div>
          <div className="fund-card">
            <div className="fund-card-icon">
              <SpeedIcon className="fund-icon" />
              <h3 className="fund-card-header">Super simple setup</h3>
            </div>
            <p className="fund-card-p">
              You can personalize and share your Campaign in just a few minutes.
            </p>
          </div>
        </div>
        <div className="fund-container-2">
          <div className="fund-card">
            <div className="fund-card-icon">
              <MobileScreenShareIcon className="fund-icon" />
              <h3 className="fund-card-header">Mobile App</h3>
            </div>
            <p className="fund-card-p">
              The SIXR app makes it simple to launch and manage your campaign on
              the go.
            </p>
          </div>
          <div className="fund-card">
            <div className="fund-card-icon">
              <TrendingUpIcon className="fund-icon" />
              <h3 className="fund-card-header">Social reach</h3>
            </div>
            <p className="fund-card-p">
              Harness the power of social media to spread your story and get
              more support.
            </p>
          </div>
          <div className="fund-card">
            <div className="fund-card-icon">
              <SupervisorAccountIcon className="fund-icon" />
              <h3 className="fund-card-header">Industry Expert Advice</h3>
            </div>
            <p className="fund-card-p">
              Our industry experts will provide insight for your projects and
              guide your fund raising goals
            </p>
          </div>
        </div>
      </div>
      <div className="fund-join">
        <Button variant="contained" id="home-button">
          <NavLink id="home-link" to="/sign-up">
            Start Funding
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Fundraise;
