import React from "react";

const HomeCard = props => {
  return (
    <div className="home-card" key={props.info.id}>
      <img id="home-card-photo" src={props.info.img} alt="portrait" />
      <h2 className="home-card-name">{props.info.name}</h2>
      <p className="home-card-role">{props.info.role}</p>
      <p className="home-card-des">{props.info.description}</p>
    </div>
  );
};

export default HomeCard;
