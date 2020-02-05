import React from "react";

const CampaignCard = (props) => {
console.log(props);
    return(
    <div className="campaign-card">
        <h2>{props.data.title}</h2>
        <img className="campaign-img" src={props.data.img}/>
        <h4>Funding Goal: {props.data.goal}</h4>
        <div className="campaign-footer">
        <img className="campaign-pp" src={props.data.profileimg}/>
        <button className="campaign-button">Explore Project</button>
        </div>
    </div>
)


}



export default CampaignCard;